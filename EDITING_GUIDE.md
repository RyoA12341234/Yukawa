# 湯川寛之オフィシャルサイト - 編集ガイド

## 🎯 簡単編集ガイド

### ⚡ 超簡単デプロイ（ワンコマンド）

```bash
./deploy.sh
```

このコマンド1つで、ビルド→デプロイまで自動実行されます！

---

## 📝 よく編集する場所

### 1. 文章を変更したい
**ファイル**: `src/index.tsx`

#### キャッチコピー
```typescript
// 87行目付近
<div class="hero-catchphrase">すべての人が輝く須磨区へ</div>
```

#### TOPICSの内容
```typescript
// 127行目〜
<h3 class="topic-title">地域懇談会を開催</h3>
<p class="topic-text">月2回、各地域で懇談会を...</p>
```

#### 政策の内容
```typescript
// 189行目〜
<h3 class="policy-title">安全で安心なまちづくり</h3>
<p class="policy-lead">阪神・淡路大震災の教訓を...</p>
```

---

### 2. 色を変更したい
**ファイル**: `public/static/edano-structure.css`

```css
/* 7行目〜 */
:root {
  --primary-blue: #0051A5;      /* メインの青色 */
  --primary-yellow: #FFD700;    /* メインの黄色 */
  --dark-blue: #003d7a;         /* 濃い青 */
}
```

---

### 3. サイズを変更したい
**ファイル**: `public/static/edano-structure.css`

#### ヒーロー画像の高さ
```css
/* 191行目付近 */
.hero-image-section {
  height: 600px;  /* 数字を変更 */
}
```

#### 名前の大きさ
```css
/* 237行目付近 */
.hero-name {
  font-size: 52px;  /* 数字を変更 */
}
```

---

## 🖼️ 画像を変更したい

### 方法1: サイト上で直接アップロード
1. https://yukawa-hiroyuki.pages.dev にアクセス
2. 各セクションの「画像をアップロード」ボタンをクリック
3. 画像を選択

⚠️ **注意**: この方法は一時的です。ページをリロードすると消えます。

### 方法2: コードに画像URLを埋め込む（永久保存）

**ファイル**: `src/index.tsx`

```typescript
// ヒーロー画像
<div class="hero-image-wrapper" style="background-image: url('あなたの画像URL')">

// 政策画像
<div class="policy-image" style="background-image: url('あなたの画像URL')">
```

画像URLの取得方法：
1. 画像をどこかにアップロード（例: imgur.com）
2. URLをコピー
3. 上記の `あなたの画像URL` に貼り付け

---

## 📂 ファイル構造

```
Yukawa/
├── src/
│   ├── index.tsx          ← 📝 文章・コンテンツ
│   └── renderer.tsx       ← ⚙️ HTMLテンプレート
├── public/
│   └── static/
│       └── edano-structure.css  ← 🎨 色・デザイン
├── deploy.sh              ← 🚀 デプロイスクリプト
└── README.md
```

---

## 🔄 編集→デプロイの流れ

### VS Codeを使う場合（推奨）

1. **ファイルを編集**
   - `src/index.tsx` または `public/static/edano-structure.css`

2. **変更を保存**
   - `Ctrl + S` (Windows) または `Cmd + S` (Mac)

3. **Gitにコミット**
   ```bash
   git add .
   git commit -m "変更内容のメモ"
   git push origin main
   ```

4. **デプロイ**
   ```bash
   ./deploy.sh
   ```

### GitHub上で編集する場合

1. https://github.com/RyoA12341234/Yukawa にアクセス

2. ファイルを開く → 鉛筆マーク（Edit）をクリック

3. 編集 → 「Commit changes」ボタンをクリック

4. ローカルPCでデプロイ
   ```bash
   cd Yukawa
   ./deploy.sh
   ```

---

## 💡 よくある編集例

### 例1: キャッチコピーを変更

**変更前**:
```typescript
<div class="hero-catchphrase">すべての人が輝く須磨区へ</div>
```

**変更後**:
```typescript
<div class="hero-catchphrase">未来を創る、須磨区から</div>
```

### 例2: メインカラーを変更

**変更前**:
```css
--primary-blue: #0051A5;
```

**変更後**:
```css
--primary-blue: #0066CC;  /* より明るい青 */
```

### 例3: 統計数字を更新

**変更前**:
```typescript
<div class="stat-number">500+</div>
<div class="stat-label">地域訪問回数</div>
```

**変更後**:
```typescript
<div class="stat-number">600+</div>
<div class="stat-label">地域訪問回数</div>
```

---

## 🆘 困ったときは

### サイトが壊れた場合

```bash
# 前のバージョンに戻す
git reset --hard HEAD~1
./deploy.sh
```

### エラーが出た場合

```bash
# 依存関係を再インストール
rm -rf node_modules
npm install
./deploy.sh
```

---

## 🌐 公開URL

- **本番環境**: https://yukawa-hiroyuki.pages.dev
- **GitHubリポジトリ**: https://github.com/RyoA12341234/Yukawa

---

**編集は簡単！ファイルを開いて、文字を変えて、保存して、デプロイするだけ！**
