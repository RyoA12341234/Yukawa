import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>湯川寛之オフィシャルサイト - すべての人が輝く須磨区へ</title>
        <meta name="Description" content="湯川寛之の政策を発信するサイト。神戸市須磨区の未来のために、5つの基本政策と10の重点プロジェクトを掲げています。" />
        <link type="text/css" href="/static/edano-style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
