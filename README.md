# プロジェクト概要

このリポジトリは Astro と Tailwind CSS で構築した法人サイトです。公開は GitHub Pages を利用し、main ブランチの内容が自動的に配信される運用を想定しています。コードに触れなくても、お知らせ記事を Markdown ファイルで追加・更新できます。

## お知らせを追加・更新する手順（GitHub のブラウザ画面）
1. リポジトリの src/content/news/ フォルダを開き、右上の **Add file → Create new file** を選びます。既存記事を修正する場合は対象ファイルを開いて **Edit** を押します。
2. 新しいファイル名は YYYY-MM-DD.md 形式にしてください（例: 2025-04-15.md）。日付は公開日です。
3. 下記テンプレートを貼り付け、	itle と pubDate を編集します。本文はテンプレートの下に Markdown で記述します。

   `markdown
   ---
   title: お知らせタイトル
   pubDate: 2025-04-15
   ---

   本文をここに書きます。改行は空行で区切ります。
   `
4. 文章は通常の日本語テキストで入力できます。強調は **太字**、リンクは [表示名](https://example.com) のように書きます。画像を使う場合は public/images/ に画像を追加し、![説明文](/images/ファイル名.jpg) と記述します。
5. 画面下部の **Preview** で体裁を確認したら、変更説明を入力し **Commit changes** を押してください。承認フローがある場合は Pull Request を作成し担当者にレビューを依頼します。

## GitHub Pages への公開
- main ブランチに変更を取り込むと、GitHub Actions がビルド (pnpm install → pnpm build) を実行し、生成された dist/ フォルダが GitHub Pages に自動デプロイされる運用を推奨します。
- まだ設定していない場合は、GitHub の **Settings → Pages** で「GitHub Actions」を選び、**Astro** テンプレートのワークフローを追加してください。追加された deploy.yml はそのまま利用できます。

## 画像やファイルのアップロード
- 画像は public/images/ に配置します。GitHub のブラウザからアップロードする場合は、同フォルダで **Add file → Upload files** を選び、画像をドラッグ＆ドロップしてください。
- 大きすぎる画像は表示が遅くなるため、横幅 1600px 程度まで縮小してからアップロードすることをおすすめします。

## ローカルでの確認（開発担当者向け）
- Node.js と pnpm を用意し、pnpm install で依存関係を取得します。
- pnpm dev でローカルサーバー (http://localhost:4321) を起動するとライブプレビューが確認できます。
- 変更内容が確定したら pnpm build で本番と同じ静的ファイルを生成できます。

## ディレクトリの主な構成
- src/pages/ … 固定ページ（トップ、会社案内など）
- src/components/ … 共通パーツ（ヘッダー、フッターなど）
- src/content/news/ … お知らせ掲載用 Markdown
- public/ … 画像などビルド不要の静的ファイル
- dist/ … ビルド後に生成される公開用ファイル（手動編集は不要）

## 困ったときは
- Markdown の書き方に迷ったら「GitHub Markdown チートシート」で検索してください。
- 運用ルールや Pull Request の手順は AGENTS.md に詳しくまとめてあります。技術担当者へ引き継ぎする際も参照してください。
