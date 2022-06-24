やっほーっほーー
# Jamstack Blog

## Start development
```bash
npm i
npm run dev
```

## Building
### API
```bash
npm run build:api
```

### App
```bash
npm run build
```

## Directory
```
src
├── aspida aspidaで使用するAPIリクエストを表現する型を含むフォルダ
│   ├── microcms
│   └── next
├── config 設定ファイル
├── features 機能群
│    └── profile 機能名
│        ├── api APIリクエスト用関数
│        ├── components
│        │   └── ProfileTile
│        └── types
├── libs ライブラリラッパー群
├── markdown マークダウンファイル群
├── pages
├── shared 共有ファイル群
│   ├── components
│   ├── hooks
│   ├── types
│   │   └── microCMS microCMS用の型
│   │       └── api
│   └── utils
└── styles グローバルスタイル
```

## Stack
- NextJS
- TypeScript
- TailwindCSS
- aspida
- SWR
- microCMS
- Supabase
