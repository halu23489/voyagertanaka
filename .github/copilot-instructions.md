# Next.js + Vercel Project

## プロジェクト概要
Next.js 16（App Router）とVercelを使用したWebアプリケーション開発プロジェクト

## 技術スタック
- **Framework**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **Linter**: ESLint
- **デプロイ**: Vercel
- **パッケージマネージャー**: npm

## プロジェクト構成
```
nextjs-project/
├── src/
│   └── app/           # App Routerのルート
│       ├── layout.tsx # ルートレイアウト
│       ├── page.tsx   # トップページ
│       └── globals.css
├── public/            # 静的ファイル
├── .github/
│   └── copilot-instructions.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 開発コマンド
```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# Linter実行
npm run lint
```

## 開発環境
- **ローカル**: http://localhost:3000
- **開発サーバー**: Turbopack使用で高速リロード

## Vercelデプロイ手順
1. GitHubリポジトリにプッシュ
2. Vercelダッシュボードで「New Project」
3. リポジトリを選択して接続
4. Framework Preset: Next.js (自動検出)
5. デプロイ実行

## 開発のポイント
- App Routerを使用（srcディレクトリ構成）
- サーバーコンポーネントがデフォルト
- クライアントコンポーネントは `'use client'` ディレクティブ使用
- 動的ルーティング: `[param]/page.tsx`
- API Routes: `app/api/route.ts`
