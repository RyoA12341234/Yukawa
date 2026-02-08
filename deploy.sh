#!/bin/bash

# 湯川寛之サイト デプロイスクリプト

echo "🚀 デプロイを開始します..."

# 最新のコードを取得
echo "📥 GitHubから最新コードを取得中..."
git pull origin main

# ビルド
echo "🔨 ビルド中..."
npm run build

# デプロイ
echo "☁️  Cloudflare Pagesへデプロイ中..."
npx wrangler pages deploy dist --project-name yukawa-hiroyuki

echo "✅ デプロイ完了！"
echo "🌐 サイトURL: https://yukawa-hiroyuki.pages.dev"
