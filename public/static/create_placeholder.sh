#!/bin/bash
# SVGプレースホルダー画像を作成

# トップ写真名前
cat > top_photo_name.png << 'SVGEOF'
<svg width="784" height="459" xmlns="http://www.w3.org/2000/svg">
  <rect width="784" height="459" fill="#f0f0f0"/>
  <text x="392" y="200" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#2d5016" text-anchor="middle">湯川寛之</text>
  <text x="392" y="260" font-family="Arial, sans-serif" font-size="30" fill="#555" text-anchor="middle">ゆかわ ひろゆき</text>
  <text x="392" y="320" font-family="Arial, sans-serif" font-size="24" fill="#666" text-anchor="middle">神戸市須磨区</text>
  <text x="392" y="380" font-family="Arial, sans-serif" font-size="20" fill="#666" text-anchor="middle">支えあう社会でまっとうな明日へ！</text>
</svg>
SVGEOF

# トピックス
cat > topics.png << 'SVGEOF'
<svg width="100" height="40" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="28" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ff0000">TOPICS</text>
</svg>
SVGEOF

# 政策タイトル
cat > manifesto_title.png << 'SVGEOF'
<svg width="400" height="80" xmlns="http://www.w3.org/2000/svg">
  <text x="200" y="50" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="#2d5016" text-anchor="middle">須磨区への約束</text>
</svg>
SVGEOF

# 政策1-5
for i in {1..5}; do
  case $i in
    1) title="1. 安全・安心のまちづくり" ;;
    2) title="2. 子ども・若者が健やかに育つまちづくり" ;;
    3) title="3. 健やかでいきいきと暮らせるまちづくり" ;;
    4) title="4. 自然・歴史・文化・スポーツを楽しめるまちづくり" ;;
    5) title="5. 交流・参画で活気あふれるまちづくり" ;;
  esac
  
  cat > "manifesto_00$i.png" << SVGEOF
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#e8f5e9"/>
  <rect x="0" y="0" width="10" height="200" fill="#2d5016"/>
  <text x="200" y="110" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2d5016" text-anchor="middle">$title</text>
</svg>
SVGEOF
done

# 湯川写真
cat > yukawa_photo.png << 'SVGEOF'
<svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#e0e0e0"/>
  <circle cx="150" cy="150" r="80" fill="#bbb"/>
  <rect x="70" y="220" width="160" height="180" fill="#999"/>
  <text x="150" y="390" font-family="Arial, sans-serif" font-size="20" fill="#333" text-anchor="middle">湯川寛之</text>
</svg>
SVGEOF

echo "プレースホルダー画像を作成しました"
