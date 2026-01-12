import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen bg-white">
      {/* ヘッダー部 */}
      <header id="header" class="relative">
        {/* ナビゲーション */}
        <nav class="bg-gray-800 text-white">
          <div class="container mx-auto">
            <ul class="flex justify-center items-center py-3 text-sm font-bold">
              <li class="px-4 hover:bg-gray-700 transition"><a href="#top">TOP</a></li>
              <li class="px-4 hover:bg-gray-700 transition"><a href="#vision">基本理念</a></li>
              <li class="px-4 hover:bg-gray-700 transition"><a href="#policies">5つの政策</a></li>
              <li class="px-4 hover:bg-gray-700 transition"><a href="#projects">10の重点プロジェクト</a></li>
              <li class="px-4 hover:bg-gray-700 transition"><a href="#profile">プロフィール</a></li>
              <li class="px-4 hover:bg-gray-700 transition"><a href="#contact">お問い合わせ</a></li>
            </ul>
          </div>
        </nav>

        {/* メインビジュアル */}
        <div class="header-main relative bg-gradient-to-b from-blue-50 to-white py-20">
          <div class="container mx-auto px-4 text-center">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm text-gray-600 mb-4">神戸市須磨区</p>
              <h1 class="text-6xl font-bold text-gray-800 mb-4">湯川寛之</h1>
              <p class="text-3xl text-blue-600 font-bold mb-8">ゆかわ ひろゆき</p>
              <p class="text-xl text-gray-700 font-bold">支えあう社会でまっとうな明日へ！</p>
            </div>
          </div>
        </div>

        {/* トピックス */}
        <div class="bg-yellow-50 border-t-4 border-yellow-400 py-4">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-center">
              <span class="text-red-600 font-bold mr-4 text-lg">TOPICS</span>
              <div class="flex-1 max-w-3xl">
                <p class="text-gray-800">
                  <span class="mr-8">須磨区のまちづくりを応援しています</span>
                  <span>人間中心の経済を目指します</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 基本理念セクション */}
      <section id="vision" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800 border-b-4 border-blue-600 pb-4 inline-block w-full">
              基本理念
            </h2>
            <div class="bg-blue-50 border-l-8 border-blue-600 p-10">
              <h3 class="text-3xl font-bold mb-8 text-blue-800">人間中心の経済</h3>
              <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  わたしは徹底的に「人」に着目して「人」を支え、すべての「人」の能力を最大限に引き出す経済をつくります。
                </p>
                <p>
                  誰もが存分に力を発揮することができ、ゆとりある暮らしを営み、人生における選択の自由がある。そんな社会であってこそ、全体が発展できます。
                </p>
                <p>
                  知識集約型産業が基軸となる経済システムが前提となったいま、人間の多様で多面的な能力の開発・育成が、持続可能な成長のための必須条件です。
                </p>
                <p>
                  あわせて、社会保障・生活保障や社会制度、コミュニティのつながりを丹念に強化する「安心の立て直し」が、力強い経済の基盤であると考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの基本政策 */}
      <section id="policies" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800 border-b-4 border-blue-600 pb-4 inline-block w-full">
              5つの基本政策
            </h2>
            <div class="space-y-6">
              <div class="bg-white border-l-8 border-blue-500 p-8 shadow-sm hover:shadow-md transition">
                <h3 class="text-2xl font-bold mb-4 text-blue-700">1. 安全・安心のまちづくり</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  地域コミュニティの強化や防犯、防災対策を通じて、誰もが安心して暮らせる環境を整備します。
                </p>
              </div>

              <div class="bg-white border-l-8 border-green-500 p-8 shadow-sm hover:shadow-md transition">
                <h3 class="text-2xl font-bold mb-4 text-green-700">2. 子ども・若者が健やかに育つまちづくり</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  待機児童の解消や教育環境の充実、子育て世代への支援を強化します。
                </p>
              </div>

              <div class="bg-white border-l-8 border-purple-500 p-8 shadow-sm hover:shadow-md transition">
                <h3 class="text-2xl font-bold mb-4 text-purple-700">3. 健やかでいきいきと暮らせるまちづくり</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  高齢者や障害者が地域で自分らしく暮らせるよう、福祉と健康づくりのネットワークを構築します。
                </p>
              </div>

              <div class="bg-white border-l-8 border-yellow-500 p-8 shadow-sm hover:shadow-md transition">
                <h3 class="text-2xl font-bold mb-4 text-yellow-700">4. 自然・歴史・文化・スポーツを楽しめるまちづくり</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  須磨の豊かな自然環境や歴史遺産、スポーツ施設を活用し、生活の質を向上させます。
                </p>
              </div>

              <div class="bg-white border-l-8 border-red-500 p-8 shadow-sm hover:shadow-md transition">
                <h3 class="text-2xl font-bold mb-4 text-red-700">5. 交流・参画で活気あふれるまちづくり</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  多様な主体の参画を促し、地域の魅力発信や拠点駅周辺の再整備を通じて活気を創出します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10の重点プロジェクト */}
      <section id="projects" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800 border-b-4 border-blue-600 pb-4 inline-block w-full">
              10の重点プロジェクト
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  1. 地域のつながり・防犯プロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>自治会活動の支援</li>
                  <li>防犯カメラの設置補助</li>
                  <li>特殊詐欺防止啓発</li>
                  <li>通学路の安全確保</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  2. 災害に強いまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>木造住宅の耐震化促進</li>
                  <li>土砂災害対策</li>
                  <li>避難所環境の整備</li>
                  <li>自主防災組織の訓練支援</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  3. 子どもの笑顔をはぐくむプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>保育所の整備による待機児童対策</li>
                  <li>子ども家庭センターの充実</li>
                  <li>中学校給食の自校調理方式推進</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  4. 地域で支えあう福祉プロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>地域福祉センターの拠点化</li>
                  <li>認知症サポーターの養成</li>
                  <li>高齢者のフレイル予防活動</li>
                  <li>移動支援サービスの確保</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  5. 歴史・文化を次世代へつなぐプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>須磨離宮公園の再整備</li>
                  <li>伝統行事の継承支援</li>
                  <li>歴史散策ルートの整備とPR</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  6. 魅力・活気あふれるまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>須磨の観光ポータルの運営</li>
                  <li>商店街のにぎわい支援</li>
                  <li>若年世帯の住み替え支援事業</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  7. 参画と協働によるまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>区民広報紙「すま」による情報発信</li>
                  <li>区民まつりの開催</li>
                  <li>ボランティア活動支援</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  8. 海と山を活かしたまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>須磨海岸の通年利活用の促進</li>
                  <li>里山の保全活動</li>
                  <li>森林整備と自然体験イベント</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  9. 名谷リノベーションプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>名谷駅前の再開発</li>
                  <li>名谷図書館の充実</li>
                  <li>駅周辺の商業機能の更新</li>
                  <li>北須磨団地等の住宅再生</li>
                </ul>
              </div>

              <div class="bg-gray-50 border-t-4 border-blue-500 p-6 hover:bg-blue-50 transition">
                <h3 class="text-xl font-bold mb-3 text-blue-700">
                  10. 須磨海浜公園・海辺のリノベーションプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>須磨海浜水族園の再整備</li>
                  <li>海浜公園内への施設誘致</li>
                  <li>海辺の歩行者空間の整備</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロフィールセクション */}
      <section id="profile" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800 border-b-4 border-blue-600 pb-4 inline-block w-full">
              プロフィール
            </h2>
            <div class="bg-white border-l-8 border-blue-600 p-10">
              <h3 class="text-3xl font-bold mb-6 text-blue-800">湯川寛之（ゆかわ ひろゆき）</h3>
              <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  神戸市須磨区で生まれ育ち、地域の課題を肌で感じてきました。
                </p>
                <p>
                  すべての住民が安心して暮らせる須磨区を実現するため、政治の道を志しました。
                </p>
                <p>
                  人間中心の経済、地域の絆、子育て支援、高齢者福祉など、住民の生活に直結する政策に全力で取り組みます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800 border-b-4 border-blue-600 pb-4 inline-block w-full">
              お問い合わせ
            </h2>
            <div class="bg-blue-50 border-l-8 border-blue-600 p-10 text-center">
              <p class="text-2xl font-bold text-blue-800 mb-6">湯川寛之 事務所</p>
              <p class="text-lg text-gray-700 mb-8">
                ご意見・ご要望がございましたら、お気軽にお声をお聞かせください。
              </p>
              <div class="text-gray-700 space-y-3">
                <p class="text-lg">
                  <span class="font-bold">電話：</span>準備中
                </p>
                <p class="text-lg">
                  <span class="font-bold">メール：</span>準備中
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4 text-center">
          <p class="text-2xl font-bold mb-3">湯川寛之</p>
          <p class="text-sm mb-6">神戸市須磨区　支えあう社会でまっとうな明日へ！</p>
          <div class="border-t border-gray-600 pt-6 mt-6">
            <p class="text-xs text-gray-400">© 2024 湯川寛之 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
