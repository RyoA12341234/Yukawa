import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen bg-gray-50">
      {/* ヒーローセクション */}
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="container mx-auto px-4 py-16">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl font-bold mb-4">湯川寛之</h1>
            <p class="text-2xl mb-8">神戸市須磨区の未来のために</p>
            <p class="text-lg opacity-90">
              人間中心の政治で、すべての住民が安心して暮らせる須磨区を実現します
            </p>
          </div>
        </div>
      </div>

      {/* ナビゲーション */}
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4">
          <div class="flex justify-center space-x-8 py-4">
            <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium transition">プロフィール</a>
            <a href="#vision" class="text-gray-700 hover:text-blue-600 font-medium transition">ビジョン</a>
            <a href="#policies" class="text-gray-700 hover:text-blue-600 font-medium transition">政策</a>
            <a href="#projects" class="text-gray-700 hover:text-blue-600 font-medium transition">重点プロジェクト</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium transition">お問い合わせ</a>
          </div>
        </div>
      </nav>

      {/* プロフィールセクション */}
      <section id="about" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">プロフィール</h2>
            <div class="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 class="text-2xl font-bold mb-4 text-blue-600">湯川寛之（ゆかわ ひろゆき）</h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                神戸市須磨区で生まれ育ち、地域の課題を肌で感じてきました。
                すべての住民が安心して暮らせる須磨区を実現するため、政治の道を志しました。
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                人間中心の経済、地域の絆、子育て支援、高齢者福祉など、
                住民の生活に直結する政策に全力で取り組みます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ビジョンセクション */}
      <section id="vision" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">基本理念</h2>
            <div class="bg-white rounded-lg p-8 shadow-md">
              <h3 class="text-2xl font-bold mb-6 text-blue-600">人間中心の経済</h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                徹底的に「人」に着目して「人」を支え、すべての「人」の能力を最大限に引き出す経済をつくります。
                誰もが存分に力を発揮することができ、ゆとりある暮らしを営み、人生における選択の自由がある社会を目指します。
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                社会保障・生活保障や社会制度、コミュニティのつながりを丹念に強化する「安心の立て直し」が、
                力強い経済の基盤であると考えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの基本政策 */}
      <section id="policies" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">5つの基本政策</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div class="text-3xl mb-4 text-blue-600">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">1. 安全・安心のまちづくり</h3>
                <p class="text-gray-700">
                  地域コミュニティの強化や防犯、防災対策を通じて、誰もが安心して暮らせる環境を整備します。
                </p>
              </div>

              <div class="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div class="text-3xl mb-4 text-green-600">
                  <i class="fas fa-child"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">2. 子ども・若者が健やかに育つまちづくり</h3>
                <p class="text-gray-700">
                  待機児童の解消や教育環境の充実、子育て世代への支援を強化します。
                </p>
              </div>

              <div class="bg-purple-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div class="text-3xl mb-4 text-purple-600">
                  <i class="fas fa-heart"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">3. 健やかでいきいきと暮らせるまちづくり</h3>
                <p class="text-gray-700">
                  高齢者や障害者が地域で自分らしく暮らせるよう、福祉と健康づくりのネットワークを構築します。
                </p>
              </div>

              <div class="bg-yellow-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div class="text-3xl mb-4 text-yellow-600">
                  <i class="fas fa-mountain"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">4. 自然・歴史・文化・スポーツを楽しめるまちづくり</h3>
                <p class="text-gray-700">
                  須磨の豊かな自然環境や歴史遺産、スポーツ施設を活用し、生活の質を向上させます。
                </p>
              </div>

              <div class="bg-red-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div class="text-3xl mb-4 text-red-600">
                  <i class="fas fa-users"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">5. 交流・参画で活気あふれるまちづくり</h3>
                <p class="text-gray-700">
                  多様な主体の参画を促し、地域の魅力発信や拠点駅周辺の再整備を通じて活気を創出します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10の重点プロジェクト */}
      <section id="projects" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">10の重点プロジェクト</h2>
            <div class="space-y-6">
              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">1.</span>地域のつながり・防犯プロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>自治会活動の支援</li>
                  <li>防犯カメラの設置補助</li>
                  <li>特殊詐欺防止啓発</li>
                  <li>通学路の安全確保</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">2.</span>災害に強いまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>木造住宅の耐震化促進</li>
                  <li>土砂災害対策</li>
                  <li>避難所環境の整備（段ボールベッドの備蓄等）</li>
                  <li>自主防災組織の訓練支援</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">3.</span>子どもの笑顔をはぐくむプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>保育所の整備による待機児童対策</li>
                  <li>子ども家庭センターによる相談体制の充実</li>
                  <li>中学校給食の自校調理方式の推進</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">4.</span>地域で支えあう福祉プロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>地域福祉センターの拠点化</li>
                  <li>認知症サポーターの養成</li>
                  <li>高齢者のフレイル（虚弱）予防活動</li>
                  <li>移動支援サービスの確保</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">5.</span>歴史・文化を次世代へつなぐプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>須磨離宮公園の再整備</li>
                  <li>伝統行事（須磨大乗会など）の継承支援</li>
                  <li>歴史散策ルートの整備とPR</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">6.</span>魅力・活気あふれるまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>須磨の観光ポータルの運営</li>
                  <li>商店街のにぎわい支援</li>
                  <li>若年世帯の住み替え支援事業</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">7.</span>参画と協働によるまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>区民広報紙「すま」による情報発信</li>
                  <li>区民まつりの開催</li>
                  <li>ボランティア活動のプラットフォームづくり</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">8.</span>海と山を活かしたまちづくりプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>須磨海岸の通年利活用の促進</li>
                  <li>里山（横尾山など）の保全活動</li>
                  <li>森林整備と自然体験イベントの実施</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">9.</span>名谷リノベーションプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>名谷駅前の再開発</li>
                  <li>名谷図書館の充実</li>
                  <li>駅周辺の商業機能の更新</li>
                  <li>北須磨団地等の住宅再生</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-bold mb-3 text-blue-600">
                  <span class="mr-2">10.</span>須磨海浜公園・海辺のリノベーションプロジェクト
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>須磨海浜水族園の再整備</li>
                  <li>海浜公園内への宿泊施設・商業施設の誘致</li>
                  <li>海辺の歩行者空間の整備</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 text-gray-800">お問い合わせ</h2>
            <p class="text-lg text-gray-700 mb-8">
              ご意見・ご要望がございましたら、お気軽にお声をお聞かせください。
            </p>
            <div class="bg-blue-50 rounded-lg p-8">
              <p class="text-xl font-bold text-blue-600 mb-4">湯川寛之 事務所</p>
              <p class="text-gray-700 mb-2">
                <i class="fas fa-envelope mr-2"></i>
                準備中
              </p>
              <p class="text-gray-700">
                <i class="fas fa-phone mr-2"></i>
                準備中
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="text-lg font-bold mb-2">湯川寛之</p>
          <p class="text-sm opacity-75">神戸市須磨区の未来のために</p>
          <p class="text-xs mt-4 opacity-50">© 2024 湯川寛之 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
})

export default app
