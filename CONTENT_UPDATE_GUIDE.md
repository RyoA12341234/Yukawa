# 📝 活動報告・写真の追加方法

## 🎯 超簡単！3ステップで更新

### ステップ1: JSONファイルを編集

1. **GitHub でファイルを開く**
   https://github.com/RyoA12341234/Yukawa/blob/main/public/data/content.json

2. **鉛筆マーク（✏️ Edit）をクリック**

3. **内容を追加・編集**

---

## 📋 編集例

### 新しいTOPICSを追加

```json
{
  "topics": [
    {
      "id": "004",  ← 新しいID
      "date": "2024-12-25",  ← 日付
      "category": "街頭活動",  ← カテゴリ
      "title": "クリスマス街頭演説",  ← タイトル
      "content": "名谷駅前でクリスマス街頭演説を行いました...",  ← 本文
      "image": "画像のURL"  ← 画像URL（オプション）
    },
    // 既存のTOPICSはここに残す
  ]
}
```

### 新しい活動報告を追加

```json
{
  "activities": [
    {
      "id": "004",
      "date": "2024-12-25",
      "title": "地域清掃活動に参加",
      "description": "須磨海岸の清掃活動に参加しました。地域の皆様と一緒に...",
      "category": "ボランティア",
      "images": [
        "画像URL1",
        "画像URL2",
        "画像URL3"
      ]
    },
    // 既存の活動報告はここに残す
  ]
}
```

### 統計情報を更新

```json
{
  "stats": {
    "visits": 550,  ← 地域訪問回数
    "voices": 1300,  ← 住民の声聴取数
    "events": 60,  ← イベント参加数
    "updated": "2024-12-25"  ← 更新日
  }
}
```

---

## 🖼️ 画像のアップロード方法

### 方法1: GitHub Issuesを利用（最も簡単）

1. **GitHub リポジトリにアクセス**
   https://github.com/RyoA12341234/Yukawa/issues

2. **「New issue」をクリック**

3. **画像をドラッグ＆ドロップ**
   - 自動的にURLが生成されます
   - 例: `https://user-images.githubusercontent.com/...`

4. **URLをコピー**
   - `content.json` の `"image"` や `"images"` に貼り付け

5. **Issueを閉じる**（または保存せず閉じる）

### 方法2: 画像ホスティングサービス

- **imgur.com** （無料・簡単）
  1. https://imgur.com/ にアクセス
  2. 「New post」をクリック
  3. 画像をアップロード
  4. URLをコピー

- **Cloudinary** （無料プランあり）
- **ImgBB** （無料）

---

## 🚀 ステップ2: 変更を保存

1. **ページ下部の「Commit changes」をクリック**

2. **変更内容を入力**（オプション）
   - 例: "2024年12月25日の活動報告を追加"

3. **「Commit changes」ボタンをクリック**

---

## 🌐 ステップ3: サイトに反映

### 自動反映（推奨）

GitHubにコミットすると、約1分後に自動的にサイトに反映されます！

### 手動デプロイ

より確実に反映したい場合：

```bash
cd Yukawa
git pull origin main
./deploy.sh
```

---

## 📝 content.json の完全な構造

```json
{
  "topics": [
    {
      "id": "ユニークID",
      "date": "YYYY-MM-DD",
      "category": "カテゴリ名",
      "title": "タイトル",
      "content": "本文",
      "image": "画像URL（オプション）"
    }
  ],
  "activities": [
    {
      "id": "ユニークID",
      "date": "YYYY-MM-DD",
      "title": "タイトル",
      "description": "説明文",
      "category": "カテゴリ名",
      "images": [
        "画像URL1",
        "画像URL2"
      ]
    }
  ],
  "stats": {
    "visits": 数字,
    "voices": 数字,
    "events": 数字,
    "updated": "YYYY-MM-DD"
  }
}
```

---

## 💡 よくある質問

### Q: 画像のサイズはどれくらいがいい？
**A:** 横幅800～1200px程度、ファイルサイズ500KB以下が推奨です。

### Q: 古い記事を削除したい
**A:** `content.json` から該当する項目を削除してコミットしてください。

### Q: 順番を変えたい
**A:** JSONファイル内で項目の順番を変更してください。上にあるものほど新しい記事として表示されます。

### Q: すぐに反映されない
**A:** ブラウザのキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）してください。

### Q: 画像が表示されない
**A:** 画像URLが正しいか確認してください。httpsで始まるURLを使用してください。

---

## 🆘 困ったときは

### サイトが壊れた場合

```bash
cd Yukawa
git reset --hard HEAD~1  # 前のバージョンに戻す
./deploy.sh
```

### JSONのエラーが出た場合

https://jsonlint.com/ でJSONの文法チェックができます。

---

**これで活動報告を自由に追加・更新できます！**

毎日の活動をどんどん追加して、サイトを充実させましょう！
