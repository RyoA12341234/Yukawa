import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=640, user-scalable=yes" />
        <title>湯川寛之オフィシャルサイト　神戸市須磨区</title>
        <meta name="Description" content="湯川寛之の政策を発信するサイト。基本理念や須磨区の10の重点プロジェクトが掲載されている。" />
        <link type="text/css" href="/static/default.css" rel="stylesheet" />
      </head>
      <body class="drawer drawer--top">{children}</body>
    </html>
  )
})
