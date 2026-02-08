const axios = require('axios');
const fs = require('fs');

async function updateContentFromSheet() {
  try {
    // Googleスプレッドシートの公開CSV URLから取得
    const sheetUrl = process.env.SHEET_URL;
    
    if (!sheetUrl) {
      console.log('SHEET_URL が設定されていません');
      return;
    }

    // CSVデータを取得
    const response = await axios.get(sheetUrl);
    const csvData = response.data;
    
    // CSVをパース
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    
    const topics = [];
    const activities = [];
    let stats = { visits: 500, voices: 1200, events: 50, updated: new Date().toISOString().split('T')[0] };
    
    // トピックスシート（lines[1]からデータ開始）
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = parseCSVLine(lines[i]);
      
      if (values[0] === 'TOPIC') {
        topics.push({
          id: String(topics.length + 1).padStart(3, '0'),
          date: values[1],
          category: values[2],
          title: values[3],
          content: values[4],
          image: values[5] || ''
        });
      } else if (values[0] === 'ACTIVITY') {
        const images = [];
        for (let j = 6; j < values.length; j++) {
          if (values[j] && values[j].startsWith('http')) {
            images.push(values[j]);
          }
        }
        
        activities.push({
          id: String(activities.length + 1).padStart(3, '0'),
          date: values[1],
          title: values[3],
          description: values[4],
          category: values[2],
          images: images
        });
      } else if (values[0] === 'STATS') {
        stats = {
          visits: parseInt(values[1]) || 500,
          voices: parseInt(values[2]) || 1200,
          events: parseInt(values[3]) || 50,
          updated: values[4] || new Date().toISOString().split('T')[0]
        };
      }
    }
    
    // content.jsonを生成
    const content = {
      topics: topics,
      activities: activities,
      stats: stats
    };
    
    // ファイルに書き込み
    fs.writeFileSync(
      './public/data/content.json',
      JSON.stringify(content, null, 2),
      'utf-8'
    );
    
    console.log('✅ コンテンツを更新しました');
    console.log(`- TOPICS: ${topics.length}件`);
    console.log(`- 活動報告: ${activities.length}件`);
    
  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

// CSV行をパース（引用符対応）
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

updateContentFromSheet();
