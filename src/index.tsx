import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use(renderer)

// 静的ファイル配信
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/data/*', serveStatic({ root: './public' }))
app.use('/admin/*', serveStatic({ root: './' }))

// コンテンツAPI
app.get('/api/content', async (c) => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/RyoA12341234/Yukawa/main/public/data/content.json')
    const data = await response.json()
    return c.json(data)
  } catch (error) {
    return c.json({ error: 'Failed to load content' }, 500)
  }
})

// メインページ - 枝野サイト構造 + 国民民主党カラー + 須磨区政策
app.get('/', (c) => {
  return c.render(
    <div>
      {/* ========== HEADER ========== */}
      <header class="site-header">
        <div class="header-top">
          <div class="container header-top-inner">
            <div class="party-logo">
              <img 
                src="https://www.genspark.ai/api/files/s/NW2MXMEI" 
                alt="国民民主党" 
                height="50"
              />
            </div>
            <nav class="header-nav">
              <a href="#top" class="nav-link">TOP</a>
              <a href="#policy" class="nav-link">5つの政策</a>
              <a href="#report" class="nav-link">須磨区レポート</a>
              <a href="#profile" class="nav-link">湯川寛之のあゆみ</a>
              <a href="#activity" class="nav-link">活動報告</a>
              <a href="#projects" class="nav-link">10の重点プロジェクト</a>
              <a href="#support" class="nav-link support-link">応援しよう</a>
            </nav>
            <button class="menu-toggle" type="button" aria-label="メニュー">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-inner">
          <a href="#top" class="mobile-nav-link">TOP</a>
          <a href="#policy" class="mobile-nav-link">5つの政策</a>
          <a href="#report" class="mobile-nav-link">須磨区レポート</a>
          <a href="#profile" class="mobile-nav-link">湯川寛之のあゆみ</a>
          <a href="#activity" class="mobile-nav-link">活動報告</a>
          <a href="#projects" class="mobile-nav-link">10の重点プロジェクト</a>
          <a href="#support" class="mobile-nav-link">応援しよう</a>
        </div>
      </div>

      {/* ========== HERO IMAGE SECTION ========== */}
      <section id="top" class="hero-image-section">
        <div class="hero-image-wrapper">
          <input type="file" id="hero-image-upload" accept="image/*" style="display:none;" />
          <label for="hero-image-upload" class="hero-upload-label">
            ヒーロー画像をアップロード
          </label>
          <div class="hero-overlay">
            <div class="hero-name-plate">
              <div class="hero-location">神戸市須磨区</div>
              <h1 class="hero-name">湯川寛之</h1>
              <div class="hero-kana">ゆかわ ひろゆき</div>
              <div class="hero-catchphrase">すべての人が輝く須磨区へ</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TOPICS SECTION ========== */}
      <section class="topics-section">
        <div class="container">
          <div class="topics-header">
            <h2 class="topics-title">TOPICS</h2>
          </div>
          <div class="topics-grid" id="topics-grid">
            {/* JavaScriptで動的に読み込まれます */}
            <article class="topic-item">
              <time class="topic-date">読み込み中...</time>
              <h3 class="topic-title">コンテンツを読み込んでいます</h3>
              <p class="topic-text">少々お待ちください...</p>
            </article>
          </div>
          <div class="topics-more">
            <a href="#all-activities" class="more-link">もっと見る ›</a>
          </div>
        </div>
      </section>

      {/* ========== 私の想い SECTION ========== */}
      <section class="vision-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">私の想い</h2>
            <div class="section-subtitle">神戸市須磨区の未来のために</div>
          </div>
          <div class="vision-content">
            <div class="vision-image">
              <input type="file" id="vision-image-upload" accept="image/*" style="display:none;" />
              <label for="vision-image-upload" class="image-upload-label">
                画像をアップロード
              </label>
            </div>
            <div class="vision-text">
              <p class="vision-lead">
                神戸市須磨区で生まれ育ち、この街を愛し、この街の未来を真剣に考えています。
              </p>
              <p>
                須磨区は、美しい海と山に囲まれ、歴史と文化が息づく魅力的なまちです。しかし、
                少子高齢化、人口減少、地域コミュニティの希薄化など、さまざまな課題に直面しています。
              </p>
              <p>
                私は、地域の皆様との対話を重ね、一人ひとりの声に耳を傾けながら、
                すべての住民が幸せに暮らせる須磨区を実現するため、日々活動しています。
              </p>
              <p class="vision-emphasis">
                「人間中心の経済」を理念に、能力開発への投資、安心の立て直し、個人の尊重を軸とした
                政策を推進し、誰もが輝ける須磨区を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5つの基本政策 SECTION ========== */}
      <section id="policy" class="policy-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">5つの基本政策</h2>
            <div class="section-subtitle">須磨区基本計画に基づく具体的な政策</div>
          </div>

          {/* 政策01 */}
          <article class="policy-card">
            <div class="policy-number">01</div>
            <div class="policy-content">
              <h3 class="policy-title">安全で安心なまちづくり</h3>
              <div class="policy-image">
                <input type="file" id="policy1-image-upload" accept="image/*" style="display:none;" />
                <label for="policy1-image-upload" class="image-upload-label">
                  画像をアップロード
                </label>
              </div>
              <div class="policy-description">
                <p class="policy-lead">
                  阪神・淡路大震災の教訓を継承し、災害に強く、犯罪のない安全・安心なまちを実現します。
                </p>
                <div class="policy-points">
                  <h4>主な取り組み</h4>
                  <ul>
                    <li><strong>防災・減災対策の強化</strong><br/>
                    自主防災組織の活動支援、避難所機能の強化、感震ブレーカー設置促進、災害備蓄品の充実</li>
                    <li><strong>木造住宅耐震化率80%達成</strong><br/>
                    住宅の耐震化促進、危険なブロック塀の撤去支援、空き家対策の推進</li>
                    <li><strong>防犯カメラ設置補助で犯罪発生率30%削減</strong><br/>
                    防犯カメラの設置支援、地域見守り活動の推進、防犯灯・街路灯の整備</li>
                    <li><strong>交通安全対策の推進</strong><br/>
                    通学路の安全確保、交通安全意識の向上、高齢者交通事故防止対策</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* 政策02 */}
          <article class="policy-card">
            <div class="policy-number">02</div>
            <div class="policy-content">
              <h3 class="policy-title">子どもから高齢者まで健やかに暮らせるまちづくり</h3>
              <div class="policy-image">
                <input type="file" id="policy2-image-upload" accept="image/*" style="display:none;" />
                <label for="policy2-image-upload" class="image-upload-label">
                  画像をアップロード
                </label>
              </div>
              <div class="policy-description">
                <p class="policy-lead">
                  すべての世代が健康で安心して暮らせる環境を整備し、支え合いの地域社会を実現します。
                </p>
                <div class="policy-points">
                  <h4>主な取り組み</h4>
                  <ul>
                    <li><strong>待機児童ゼロの実現</strong><br/>
                    保育所・認定こども園の整備、地域子育て支援拠点の充実、産前産後ケアの推進</li>
                    <li><strong>教育環境の充実</strong><br/>
                    中学校給食の質的向上、教育施設の整備、放課後児童クラブの充実</li>
                    <li><strong>認知症サポーター1,000人養成</strong><br/>
                    認知症ケアの推進、地域福祉センターを拠点とした活動の活性化</li>
                    <li><strong>健康寿命の延伸</strong><br/>
                    フレイル予防プログラムの実施、健康診査の受診促進、介護予防活動の支援</li>
                    <li><strong>障害者支援の充実</strong><br/>
                    相談支援体制の強化、就労支援の充実、バリアフリー化の推進</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* 政策03 */}
          <article class="policy-card">
            <div class="policy-number">03</div>
            <div class="policy-content">
              <h3 class="policy-title">まちの魅力を高め、人を呼び込むまちづくり</h3>
              <div class="policy-image">
                <input type="file" id="policy3-image-upload" accept="image/*" style="display:none;" />
                <label for="policy3-image-upload" class="image-upload-label">
                  画像をアップロード
                </label>
              </div>
              <div class="policy-description">
                <p class="policy-lead">
                  須磨の豊かな観光資源を活かし、若年層の定住促進と地域の賑わいを創出します。
                </p>
                <div class="policy-points">
                  <h4>主な取り組み</h4>
                  <ul>
                    <li><strong>名谷駅周辺の活性化</strong><br/>
                    駅前の再整備、名谷図書館のリニューアル、商業施設の充実</li>
                    <li><strong>須磨海浜公園・須磨離宮公園の魅力向上</strong><br/>
                    新水族館の整備支援、公園施設のリニューアル、周辺エリアの歩行空間整備</li>
                    <li><strong>若年層の定住促進</strong><br/>
                    魅力的な住環境の形成、交通利便性の向上、子育て世帯への支援</li>
                    <li><strong>観光・賑わいの創出</strong><br/>
                    観光ポータルサイトの運営、イベントの開催、商店街の活性化支援</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* 政策04 */}
          <article class="policy-card">
            <div class="policy-number">04</div>
            <div class="policy-content">
              <h3 class="policy-title">誰もがいきいきと活躍し、交流するまちづくり</h3>
              <div class="policy-image">
                <input type="file" id="policy4-image-upload" accept="image/*" style="display:none;" />
                <label for="policy4-image-upload" class="image-upload-label">
                  画像をアップロード
                </label>
              </div>
              <div class="policy-description">
                <p class="policy-lead">
                  市民活動を支援し、多様な主体が協働する活力あるコミュニティを形成します。
                </p>
                <div class="policy-points">
                  <h4>主な取り組み</h4>
                  <ul>
                    <li><strong>市民活動の活性化</strong><br/>
                    地域活動の担い手育成、ボランティア活動への支援、NPO・市民団体との協働</li>
                    <li><strong>多文化共生の推進</strong><br/>
                    外国人住民への支援、多文化交流イベントの開催、やさしい日本語の普及</li>
                    <li><strong>生涯学習・スポーツの振興</strong><br/>
                    図書館・スポーツ施設の充実、生涯学習プログラムの提供</li>
                    <li><strong>地域交流の促進</strong><br/>
                    区民まつりの開催、伝統行事の継承、世代間交流の推進</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* 政策05 */}
          <article class="policy-card">
            <div class="policy-number">05</div>
            <div class="policy-content">
              <h3 class="policy-title">豊かな自然・歴史・文化を次世代へつなぐまちづくり</h3>
              <div class="policy-image">
                <input type="file" id="policy5-image-upload" accept="image/*" style="display:none;" />
                <label for="policy5-image-upload" class="image-upload-label">
                  画像をアップロード
                </label>
              </div>
              <div class="policy-description">
                <p class="policy-lead">
                  須磨の豊かな自然環境と歴史・文化を保全・継承し、地域の誇りとして次世代に引き継ぎます。
                </p>
                <div class="policy-points">
                  <h4>主な取り組み</h4>
                  <ul>
                    <li><strong>自然環境の保全</strong><br/>
                    須磨の森・海・里山の保全活動支援、身近な緑や公園の適正管理</li>
                    <li><strong>歴史・文化の継承</strong><br/>
                    源平ゆかりの地や万葉の歴史の普及啓発、伝統行事・伝統芸能の保存継承支援</li>
                    <li><strong>歴史散策ルートの整備</strong><br/>
                    須磨・一の谷ルート、名谷・妙法寺ルートの整備、案内板・マップの充実</li>
                    <li><strong>環境教育の推進</strong><br/>
                    学校での環境学習、地域での自然体験プログラム、歴史学習の機会提供</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ========== 10の重点プロジェクト SECTION ========== */}
      <section id="projects" class="projects-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">10の重点プロジェクト</h2>
            <div class="section-subtitle">須磨区将来ビジョン実現に向けた優先施策</div>
          </div>
          <div class="projects-grid">
            <article class="project-item">
              <div class="project-number">01</div>
              <h3 class="project-title">地域のつながり・防犯力強化</h3>
              <p class="project-desc">自治会活動支援、防犯カメラ設置補助、通学路安全確保、見守り活動の推進</p>
            </article>
            <article class="project-item">
              <div class="project-number">02</div>
              <h3 class="project-title">災害に強いまちづくり</h3>
              <p class="project-desc">木造住宅耐震化促進、避難所環境整備、防災訓練支援、感震ブレーカー普及</p>
            </article>
            <article class="project-item">
              <div class="project-number">03</div>
              <h3 class="project-title">子どもの笑顔をはぐくむ</h3>
              <p class="project-desc">保育所整備、待機児童対策、中学校給食改善、放課後児童クラブ充実</p>
            </article>
            <article class="project-item">
              <div class="project-number">04</div>
              <h3 class="project-title">地域で支えあう福祉</h3>
              <p class="project-desc">地域福祉センター拠点化、認知症サポーター養成、フレイル予防プログラム</p>
            </article>
            <article class="project-item">
              <div class="project-number">05</div>
              <h3 class="project-title">歴史・文化を次世代へ</h3>
              <p class="project-desc">須磨離宮公園再整備、伝統行事継承支援、歴史散策ルート整備</p>
            </article>
            <article class="project-item">
              <div class="project-number">06</div>
              <h3 class="project-title">魅力・活気あふれるまち</h3>
              <p class="project-desc">観光ポータル運営、商店街にぎわい支援、イベント開催</p>
            </article>
            <article class="project-item">
              <div class="project-number">07</div>
              <h3 class="project-title">参画と協働のまちづくり</h3>
              <p class="project-desc">区民広報紙発信、区民まつり開催、市民活動の担い手育成</p>
            </article>
            <article class="project-item">
              <div class="project-number">08</div>
              <h3 class="project-title">海と山の自然を活かす</h3>
              <p class="project-desc">須磨海岸活用促進、里山保全活動、環境教育の推進</p>
            </article>
            <article class="project-item">
              <div class="project-number">09</div>
              <h3 class="project-title">名谷駅周辺の活性化</h3>
              <p class="project-desc">駅前再開発、名谷図書館充実、商業施設リニューアル、住宅再生</p>
            </article>
            <article class="project-item">
              <div class="project-number">10</div>
              <h3 class="project-title">須磨海浜公園・海辺再生</h3>
              <p class="project-desc">水族園再整備、施設誘致、歩行者空間整備、観光拠点化</p>
            </article>
          </div>
        </div>
      </section>

      {/* ========== 須磨区レポート SECTION ========== */}
      <section id="report" class="report-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">須磨区レポート</h2>
            <div class="section-subtitle">地域の課題と解決策を定期的に発信</div>
          </div>
          <div class="report-content">
            <div class="report-image">
              <input type="file" id="report-image-upload" accept="image/*" style="display:none;" />
              <label for="report-image-upload" class="image-upload-label">
                レポート画像をアップロード
              </label>
            </div>
            <div class="report-text">
              <p>
                地域の皆様から寄せられた声をもとに、須磨区の課題や取り組みを分かりやすくまとめた
                「須磨区レポート」を定期的に発行しています。
              </p>
              <p>
                住民の皆様との対話で得た生の声を、政策提言や行政への働きかけに活かし、
                実効性のある改善策を提案しています。
              </p>
              <div class="report-actions">
                <a href="#" class="btn-primary">最新レポートを見る</a>
                <a href="#" class="btn-secondary">バックナンバー</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 活動報告 SECTION ========== */}
      <section id="activity" class="activity-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">活動報告</h2>
            <div class="section-subtitle">日々の活動をお伝えします</div>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="stat-label">地域訪問回数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">1,200+</div>
              <div class="stat-label">住民の声を聴取</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">50+</div>
              <div class="stat-label">地域イベント参加</div>
            </div>
          </div>
          <div class="activity-content">
            <h3 class="activity-subtitle">主な活動</h3>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">📢</div>
                <div class="activity-detail">
                  <h4>街頭活動</h4>
                  <p>毎週3回、駅前や商店街で住民の皆様と対話し、生の声を聴いています。</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">💬</div>
                <div class="activity-detail">
                  <h4>地域懇談会</h4>
                  <p>月2回、各地域で懇談会を開催し、地域課題について意見交換しています。</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">📝</div>
                <div class="activity-detail">
                  <h4>政策提言</h4>
                  <p>住民の声をまとめ、行政への政策提言を積極的に行っています。</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">🤝</div>
                <div class="activity-detail">
                  <h4>ボランティア活動</h4>
                  <p>清掃活動、防災訓練、地域イベントのサポートなど、地域に根ざした活動を続けています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 活動報告詳細 SECTION ========== */}
      <section id="all-activities" class="all-activities-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">活動報告一覧</h2>
            <div class="section-subtitle">日々の活動を写真と共にお伝えします</div>
          </div>
          <div id="activities-list" class="activities-list">
            {/* JavaScriptで動的に読み込まれます */}
            <div class="activity-detail-card">
              <p>活動報告を読み込んでいます...</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 湯川寛之のあゆみ SECTION ========== */}
      <section id="profile" class="profile-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">湯川寛之のあゆみ</h2>
            <div class="section-subtitle">プロフィール</div>
          </div>
          <div class="profile-content">
            <div class="profile-image">
              <input type="file" id="profile-image-upload" accept="image/*" style="display:none;" />
              <label for="profile-image-upload" class="image-upload-label">
                プロフィール画像をアップロード
              </label>
            </div>
            <div class="profile-text">
              <div class="profile-info">
                <h3>湯川寛之（ゆかわ ひろゆき）</h3>
                <p class="profile-role">国民民主党 神戸市須磨区</p>
              </div>
              <div class="profile-details">
                <h4>現在の活動</h4>
                <ul>
                  <li>神戸市須磨区での地域活動を展開</li>
                  <li>住民との対話を重視した政策立案</li>
                  <li>地域課題の解決に向けた提言活動</li>
                </ul>
                <h4>経歴</h4>
                <p>
                  神戸市須磨区出身。地域の発展と住民の幸せを願い、政治活動を決意。
                  人間中心の経済を理念に、誰もが輝ける社会の実現を目指して活動中。
                </p>
                <h4>家族</h4>
                <p>準備中</p>
                <h4>座右の銘</h4>
                <p>「一隅を照らす」 - 自分の置かれた場所で精一杯輝き、周囲を照らす存在でありたい</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 応援しよう SECTION ========== */}
      <section id="support" class="support-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">湯川寛之を応援しよう</h2>
            <div class="section-subtitle">一緒に須磨区の未来を創りましょう</div>
          </div>
          <div class="support-grid">
            <div class="support-card">
              <div class="support-icon">💝</div>
              <h3>応援・寄付</h3>
              <p>活動へのご支援をお願いします</p>
              <a href="#" class="btn-primary">詳しく見る</a>
            </div>
            <div class="support-card">
              <div class="support-icon">🤝</div>
              <h3>ボランティア</h3>
              <p>一緒に活動しませんか</p>
              <a href="#" class="btn-primary">参加する</a>
            </div>
            <div class="support-card">
              <div class="support-icon">📧</div>
              <h3>メールマガジン</h3>
              <p>最新情報をお届けします</p>
              <a href="#" class="btn-primary">登録する</a>
            </div>
            <div class="support-card">
              <div class="support-icon">📱</div>
              <h3>SNSフォロー</h3>
              <p>日々の活動を発信中</p>
              <div class="sns-links">
                <a href="#" aria-label="X">X</a>
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer class="site-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <div class="footer-name">湯川寛之</div>
              <div class="footer-party">国民民主党 | 神戸市須磨区</div>
            </div>
            <nav class="footer-nav">
              <a href="#policy">5つの政策</a>
              <a href="#projects">10の重点プロジェクト</a>
              <a href="#report">須磨区レポート</a>
              <a href="#activity">活動報告</a>
              <a href="#profile">プロフィール</a>
              <a href="#support">応援する</a>
            </nav>
          </div>
          <div class="footer-bottom">
            <p class="footer-address">事務所: 神戸市須磨区（準備中）</p>
            <p class="footer-copyright">© 2024 湯川寛之 All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* JavaScript */}
      <script dangerouslySetInnerHTML={{__html: `
        // コンテンツ読み込み
        async function loadContent() {
          try {
            const response = await fetch('https://raw.githubusercontent.com/RyoA12341234/Yukawa/main/public/data/content.json');
            const data = await response.json();
            
            // TOPICSを表示
            renderTopics(data.topics);
            
            // 活動報告詳細を表示
            renderActivities(data.activities);
            
            // 統計情報を更新
            updateStats(data.stats);
          } catch (error) {
            console.error('コンテンツの読み込みに失敗しました:', error);
          }
        }
        
        // TOPICS表示
        function renderTopics(topics) {
          const grid = document.getElementById('topics-grid');
          if (!grid || !topics) return;
          
          grid.innerHTML = topics.slice(0, 3).map(topic => \`
            <article class="topic-item">
              <time class="topic-date">\${formatDate(topic.date)}</time>
              <span class="topic-category">\${topic.category}</span>
              <h3 class="topic-title">\${topic.title}</h3>
              <p class="topic-text">\${topic.content}</p>
              \${topic.image ? \`<img src="\${topic.image}" alt="\${topic.title}" class="topic-image" />\` : ''}
            </article>
          \`).join('');
        }
        
        // 活動報告詳細表示
        function renderActivities(activities) {
          const list = document.getElementById('activities-list');
          if (!list || !activities) return;
          
          list.innerHTML = activities.map(activity => \`
            <article class="activity-detail-card">
              <div class="activity-detail-header">
                <time class="activity-date">\${formatDate(activity.date)}</time>
                <span class="activity-category">\${activity.category}</span>
              </div>
              <h3 class="activity-detail-title">\${activity.title}</h3>
              <p class="activity-detail-description">\${activity.description}</p>
              \${activity.images && activity.images.length > 0 ? \`
                <div class="activity-images">
                  \${activity.images.map(img => \`
                    <img src="\${img}" alt="\${activity.title}" class="activity-image" />
                  \`).join('')}
                </div>
              \` : ''}
            </article>
          \`).join('');
        }
        
        // 統計情報更新
        function updateStats(stats) {
          if (!stats) return;
          
          const statCards = document.querySelectorAll('.stat-card');
          if (statCards.length >= 3) {
            statCards[0].querySelector('.stat-number').textContent = stats.visits + '+';
            statCards[1].querySelector('.stat-number').textContent = stats.voices + '+';
            statCards[2].querySelector('.stat-number').textContent = stats.events + '+';
          }
        }
        
        // 日付フォーマット
        function formatDate(dateStr) {
          const date = new Date(dateStr);
          return \`\${date.getFullYear()}.\${String(date.getMonth() + 1).padStart(2, '0')}.\${String(date.getDate()).padStart(2, '0')}\`;
        }
        
        // ページ読み込み時にコンテンツを取得
        document.addEventListener('DOMContentLoaded', loadContent);

        // メニュートグル
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (menuToggle && mobileMenu) {
          menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
          });
          
          // メニューリンククリックで閉じる
          document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
              mobileMenu.classList.remove('active');
              menuToggle.classList.remove('active');
            });
          });
        }

        // スムーススクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });

        // 画像アップロード機能
        function setupImageUpload(inputId, targetClass) {
          const input = document.getElementById(inputId);
          if (!input) return;
          
          input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onload = function(event) {
                let target;
                if (inputId === 'hero-image-upload') {
                  target = document.querySelector('.hero-image-wrapper');
                } else {
                  target = input.closest('.' + targetClass) || input.parentElement;
                }
                
                if (target) {
                  target.style.backgroundImage = 'url(' + event.target.result + ')';
                  target.style.backgroundSize = 'cover';
                  target.style.backgroundPosition = 'center';
                  const label = input.nextElementSibling;
                  if (label) label.style.display = 'none';
                }
              };
              reader.readAsDataURL(file);
            }
          });
        }

        // 各画像アップロードの設定
        setupImageUpload('hero-image-upload', 'hero-image-wrapper');
        setupImageUpload('vision-image-upload', 'vision-image');
        setupImageUpload('policy1-image-upload', 'policy-image');
        setupImageUpload('policy2-image-upload', 'policy-image');
        setupImageUpload('policy3-image-upload', 'policy-image');
        setupImageUpload('policy4-image-upload', 'policy-image');
        setupImageUpload('policy5-image-upload', 'policy-image');
        setupImageUpload('report-image-upload', 'report-image');
        setupImageUpload('profile-image-upload', 'profile-image');
      `}} />
    </div>
  )
})

export default app
