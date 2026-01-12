import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ
app.get('/', (c) => {
  return c.render(
    <div>
      {/* ヒーローセクション - 強化版 */}
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="container">
            <div class="hero-content">
              <p class="hero-location">神戸市須磨区</p>
              <h1 class="hero-name">湯川寛之</h1>
              <p class="hero-kana">ゆかわ ひろゆき</p>
              <div class="hero-catchphrase">
                <p class="catchphrase-main">すべての人が輝く須磨区へ</p>
                <p class="catchphrase-sub">支えあう社会で、まっとうな明日を実現します</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ナビゲーション */}
      <nav class="main-nav">
        <div class="container">
          <ul class="nav-list">
            <li><a href="#about">想い</a></li>
            <li><a href="#vision">基本理念</a></li>
            <li><a href="#policies">5つの政策</a></li>
            <li><a href="#projects">重点プロジェクト</a></li>
            <li><a href="#activity">活動実績</a></li>
            <li><a href="#profile">プロフィール</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </div>
      </nav>

      {/* 想い・メッセージセクション */}
      <section id="about" class="message-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">MESSAGE</span>
            <h2 class="section-title">私の想い</h2>
          </div>
          <div class="message-content">
            <div class="message-main">
              <h3 class="message-heading">なぜ、政治の道を選んだのか</h3>
              <div class="message-text">
                <p>
                  私は神戸市須磨区で生まれ、この街で育ちました。美しい海と山に囲まれた須磨区は、私にとってかけがえのない故郷です。
                </p>
                <p>
                  しかし近年、少子高齢化、地域経済の停滞、若者の流出など、様々な課題に直面しています。
                  商店街のシャッターが閉まり、高齢者の孤立が進み、子育て世帯が安心して暮らせる環境が失われつつあります。
                </p>
                <p>
                  <strong>「このままでは、愛する須磨区の未来が心配だ」</strong>
                </p>
                <p>
                  そんな危機感から、私は政治の道を志しました。地域の声に耳を傾け、一人ひとりの悩みに寄り添い、
                  <strong>すべての住民が安心して笑顔で暮らせる須磨区</strong>を実現したい。その一心で、日々活動しています。
                </p>
              </div>
            </div>
            <div class="message-vision">
              <div class="vision-box">
                <h4>私が目指す須磨区</h4>
                <ul class="vision-list">
                  <li><span class="icon">✓</span> 子どもたちの笑顔があふれる街</li>
                  <li><span class="icon">✓</span> 高齢者が安心して暮らせる街</li>
                  <li><span class="icon">✓</span> 若者が希望を持てる街</li>
                  <li><span class="icon">✓</span> 地域経済が活性化する街</li>
                  <li><span class="icon">✓</span> 歴史と文化を次世代につなぐ街</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基本理念セクション */}
      <section id="vision" class="vision-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">VISION</span>
            <h2 class="section-title">基本理念</h2>
          </div>
          <div class="vision-content">
            <h3 class="vision-title">人間中心の経済</h3>
            <div class="vision-description">
              <p>
                私は徹底的に<strong>「人」</strong>に着目します。一人ひとりの能力を最大限に引き出し、すべての人が存分に力を発揮できる経済を創ります。
              </p>
              <p>
                誰もがゆとりある暮らしを営み、人生における選択の自由がある。そんな社会であってこそ、地域全体が発展できると信じています。
              </p>
              <div class="vision-principles">
                <div class="principle-item">
                  <div class="principle-number">01</div>
                  <h4>能力開発への投資</h4>
                  <p>人間の多様な能力を育成することが、持続可能な成長の必須条件です</p>
                </div>
                <div class="principle-item">
                  <div class="principle-number">02</div>
                  <h4>安心の立て直し</h4>
                  <p>社会保障・生活保障を強化し、コミュニティのつながりを再構築します</p>
                </div>
                <div class="principle-item">
                  <div class="principle-number">03</div>
                  <h4>個人の尊重</h4>
                  <p>すべての住民が個人として尊重され、健康で文化的な生活を営める社会を実現します</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの基本政策 */}
      <section id="policies" class="policies-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">POLICIES</span>
            <h2 class="section-title">5つの基本政策</h2>
            <p class="section-description">須磨区の未来を創る、具体的な政策です</p>
          </div>
          <div class="policies-grid">
            <div class="policy-card">
              <div class="policy-number">01</div>
              <h3 class="policy-title">安全・安心のまちづくり</h3>
              <p class="policy-summary">
                地域の絆を強め、誰もが安心して暮らせる環境を整備します
              </p>
              <div class="policy-details">
                <h4>具体的な取り組み</h4>
                <ul>
                  <li><strong>防犯対策の強化</strong> - 地域の見守りネットワーク構築、防犯カメラ設置補助で犯罪発生率30%削減を目指します</li>
                  <li><strong>防災体制の充実</strong> - 木造住宅耐震化率80%達成、避難所の機能強化（段ボールベッド、Wi-Fi整備）</li>
                  <li><strong>自治会活動支援</strong> - 活動資金の助成拡大、若い世代の参加促進で地域コミュニティを活性化</li>
                  <li><strong>通学路の安全確保</strong> - 危険箇所の改修、見守り活動の拡充で子どもたちを守ります</li>
                </ul>
              </div>
            </div>

            <div class="policy-card">
              <div class="policy-number">02</div>
              <h3 class="policy-title">子ども・若者が健やかに育つまちづくり</h3>
              <p class="policy-summary">
                次世代を担う子どもたちの笑顔と成長を全力でサポートします
              </p>
              <div class="policy-details">
                <h4>具体的な取り組み</h4>
                <ul>
                  <li><strong>待機児童ゼロの実現</strong> - 保育所の新設・拡充で3年以内に待機児童ゼロを達成します</li>
                  <li><strong>教育環境の充実</strong> - 学校施設の改修、ICT教育の推進、教員の働き方改革で質の高い教育を提供</li>
                  <li><strong>中学校給食の改善</strong> - 自校調理方式の導入で温かく美味しい給食を提供します</li>
                  <li><strong>子育て相談体制の強化</strong> - 子ども家庭センターの機能拡充、24時間相談窓口の設置で孤立を防ぎます</li>
                  <li><strong>若者の居場所づくり</strong> - 学習スペース、交流拠点の整備で若者を支援します</li>
                </ul>
              </div>
            </div>

            <div class="policy-card">
              <div class="policy-number">03</div>
              <h3 class="policy-title">健やかでいきいきと暮らせるまちづくり</h3>
              <p class="policy-summary">
                高齢者・障害者が地域で自分らしく暮らせる社会を実現します
              </p>
              <div class="policy-details">
                <h4>具体的な取り組み</h4>
                <ul>
                  <li><strong>地域福祉の充実</strong> - 地域福祉センターを拠点化し、相談・交流の場を提供します</li>
                  <li><strong>認知症支援の強化</strong> - 認知症サポーター1000人養成、早期発見・支援体制の構築</li>
                  <li><strong>フレイル予防活動</strong> - 健康教室、運動プログラムで高齢者の健康寿命を延伸します</li>
                  <li><strong>移動支援の拡充</strong> - コミュニティバス、乗合タクシーで高齢者の外出をサポート</li>
                  <li><strong>バリアフリー推進</strong> - 公共施設・道路のバリアフリー化で誰もが暮らしやすい街に</li>
                </ul>
              </div>
            </div>

            <div class="policy-card">
              <div class="policy-number">04</div>
              <h3 class="policy-title">自然・歴史・文化・スポーツを楽しめるまちづくり</h3>
              <p class="policy-summary">
                須磨の豊かな資源を活かし、生活の質を向上させます
              </p>
              <div class="policy-details">
                <h4>具体的な取り組み</h4>
                <ul>
                  <li><strong>須磨離宮公園の再整備</strong> - バラ園の拡充、イベントスペースの整備で年間来場者20万人を目指します</li>
                  <li><strong>伝統行事の継承</strong> - 須磨大乗会など地域の伝統を次世代につなぎます</li>
                  <li><strong>歴史散策ルートの整備</strong> - 案内板の設置、ガイドツアーで須磨の歴史を発信</li>
                  <li><strong>スポーツ振興</strong> - 体育施設の充実、市民スポーツ大会の開催で健康増進</li>
                  <li><strong>文化活動の支援</strong> - 文化団体への助成、発表の場の提供で地域文化を活性化</li>
                </ul>
              </div>
            </div>

            <div class="policy-card">
              <div class="policy-number">05</div>
              <h3 class="policy-title">交流・参画で活気あふれるまちづくり</h3>
              <p class="policy-summary">
                多様な主体の参画で地域を活性化し、魅力を発信します
              </p>
              <div class="policy-details">
                <h4>具体的な取り組み</h4>
                <ul>
                  <li><strong>地域情報の発信強化</strong> - 広報紙「すま」のリニューアル、SNS活用で情報を届けます</li>
                  <li><strong>区民まつりの充実</strong> - 多世代が楽しめるイベントで地域の一体感を醸成</li>
                  <li><strong>ボランティア活動支援</strong> - プラットフォームの構築、活動助成で市民参加を促進</li>
                  <li><strong>商店街の活性化</strong> - リノベーション支援、イベント開催でにぎわいを創出</li>
                  <li><strong>若年世帯の定住促進</strong> - 住み替え支援、住宅リフォーム助成で人口増加を図ります</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10の重点プロジェクト */}
      <section id="projects" class="projects-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">PROJECTS</span>
            <h2 class="section-title">10の重点プロジェクト</h2>
            <p class="section-description">須磨区の未来を切り拓く、優先的に取り組む施策です</p>
          </div>
          <div class="projects-grid">
            {[
              {
                num: "01",
                title: "地域のつながり・防犯プロジェクト",
                desc: "地域の絆を強化し、犯罪のない安全な街を実現",
                items: ["自治会活動の支援", "防犯カメラの設置補助", "特殊詐欺防止啓発", "通学路の安全確保"]
              },
              {
                num: "02",
                title: "災害に強いまちづくりプロジェクト",
                desc: "防災体制を強化し、災害時も安心できる街に",
                items: ["木造住宅の耐震化促進", "土砂災害対策", "避難所環境の整備", "自主防災組織の訓練支援"]
              },
              {
                num: "03",
                title: "子どもの笑顔をはぐくむプロジェクト",
                desc: "すべての子どもが健やかに育つ環境を整備",
                items: ["保育所の整備による待機児童対策", "子ども家庭センターの充実", "中学校給食の自校調理方式推進"]
              },
              {
                num: "04",
                title: "地域で支えあう福祉プロジェクト",
                desc: "高齢者・障害者が安心して暮らせる支援体制を構築",
                items: ["地域福祉センターの拠点化", "認知症サポーターの養成", "高齢者のフレイル予防活動", "移動支援サービスの確保"]
              },
              {
                num: "05",
                title: "歴史・文化を次世代へつなぐプロジェクト",
                desc: "須磨の歴史と文化を守り、継承する",
                items: ["須磨離宮公園の再整備", "伝統行事の継承支援", "歴史散策ルートの整備とPR"]
              },
              {
                num: "06",
                title: "魅力・活気あふれるまちづくりプロジェクト",
                desc: "地域経済を活性化し、にぎわいを創出",
                items: ["須磨の観光ポータルの運営", "商店街のにぎわい支援", "若年世帯の住み替え支援事業"]
              },
              {
                num: "07",
                title: "参画と協働によるまちづくりプロジェクト",
                desc: "市民参加を促進し、協働でまちづくりを推進",
                items: ["区民広報紙「すま」による情報発信", "区民まつりの開催", "ボランティア活動支援"]
              },
              {
                num: "08",
                title: "海と山を活かしたまちづくりプロジェクト",
                desc: "須磨の自然資源を活用し、魅力を向上",
                items: ["須磨海岸の通年利活用の促進", "里山の保全活動", "森林整備と自然体験イベント"]
              },
              {
                num: "09",
                title: "名谷リノベーションプロジェクト",
                desc: "名谷駅周辺を再生し、新たな活力を創出",
                items: ["名谷駅前の再開発", "名谷図書館の充実", "駅周辺の商業機能の更新", "北須磨団地等の住宅再生"]
              },
              {
                num: "10",
                title: "須磨海浜公園・海辺のリノベーションプロジェクト",
                desc: "海辺の魅力を最大化し、新たな観光拠点に",
                items: ["須磨海浜水族園の再整備", "海浜公園内への施設誘致", "海辺の歩行者空間の整備"]
              }
            ].map((project) => (
              <div class="project-card">
                <div class="project-header">
                  <span class="project-num">{project.num}</span>
                  <h3>{project.title}</h3>
                </div>
                <p class="project-desc">{project.desc}</p>
                <ul class="project-items">
                  {project.items.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 活動実績セクション */}
      <section id="activity" class="activity-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">ACTIVITY</span>
            <h2 class="section-title">活動実績</h2>
            <p class="section-description">地域に根ざした活動を続けています</p>
          </div>
          <div class="activity-content">
            <div class="activity-stats">
              <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">地域訪問回数</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1,200+</div>
                <div class="stat-label">住民の声を聴取</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">地域イベント参加</div>
              </div>
            </div>
            <div class="activity-list">
              <h3>主な活動</h3>
              <div class="activity-grid">
                <div class="activity-item">
                  <h4>🚶 街頭活動</h4>
                  <p>毎週3回、駅前や商店街で住民の皆様と対話し、生の声を聴いています</p>
                </div>
                <div class="activity-item">
                  <h4>👥 地域懇談会</h4>
                  <p>月2回、各地域で懇談会を開催。地域課題について意見交換しています</p>
                </div>
                <div class="activity-item">
                  <h4>📋 政策提言</h4>
                  <p>住民の声をまとめ、行政への政策提言を積極的に行っています</p>
                </div>
                <div class="activity-item">
                  <h4>🤝 ボランティア</h4>
                  <p>清掃活動、お祭りの運営など、地域活動に積極的に参加しています</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロフィールセクション */}
      <section id="profile" class="profile-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">PROFILE</span>
            <h2 class="section-title">湯川寛之のあゆみ</h2>
          </div>
          <div class="profile-content">
            <div class="profile-main">
              <h3>湯川寛之（ゆかわ ひろゆき）</h3>
              <div class="profile-text">
                <p>神戸市須磨区で生まれ育ち、この街を愛し、この街の未来を真剣に考えています。</p>
                <p>
                  地域の皆様との対話を重ね、一人ひとりの声に耳を傾けながら、
                  <strong>すべての住民が幸せに暮らせる須磨区</strong>を実現するため、日々活動しています。
                </p>
                <div class="profile-info">
                  <div class="info-item">
                    <h4>現在</h4>
                    <p>神戸市須磨区在住<br/>地域活動家</p>
                  </div>
                  <div class="info-item">
                    <h4>家族</h4>
                    <p>妻と子供</p>
                  </div>
                  <div class="info-item">
                    <h4>座右の銘</h4>
                    <p>「一隅を照らす」<br/>小さなことでも、自分の持ち場で全力を尽くす</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">CONTACT</span>
            <h2 class="section-title">お問い合わせ</h2>
            <p class="section-description">ご意見・ご要望をお聞かせください</p>
          </div>
          <div class="contact-content">
            <div class="contact-message">
              <p>
                皆様の声が、須磨区の未来を創ります。<br/>
                どんな小さなことでも構いません。ぜひお聞かせください。
              </p>
            </div>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-detail">
                  <h4>メール</h4>
                  <p>準備中</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-detail">
                  <h4>電話</h4>
                  <p>準備中</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-detail">
                  <h4>事務所</h4>
                  <p>神戸市須磨区（詳細準備中）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-main">
              <h3>湯川寛之</h3>
              <p>神戸市須磨区　すべての人が輝く須磨区へ</p>
            </div>
            <div class="footer-links">
              <a href="#about">想い</a>
              <a href="#vision">基本理念</a>
              <a href="#policies">政策</a>
              <a href="#projects">プロジェクト</a>
              <a href="#contact">お問い合わせ</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2024 湯川寛之 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
