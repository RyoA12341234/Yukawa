import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ - モダンデザイン + 国民民主党カラー
app.get('/', (c) => {
  return c.render(
    <div>
      {/* ===== NAV ===== */}
      <header class="topbar">
        <div class="container">
          <nav class="nav" aria-label="グローバルナビゲーション">
            <a class="brand" href="#">
              <span class="brand__mark" aria-hidden="true"></span>
              <span class="brand__title">
                <strong>湯川寛之</strong>
                <span>国民民主党｜神戸市須磨区</span>
              </span>
            </a>
            <div class="navlinks" role="navigation">
              <a href="#policy">政策</a>
              <a href="#news">ニュース</a>
              <a href="#reports">須磨区レポート</a>
              <a href="#activity">活動報告</a>
              <a href="#support">応援する</a>
            </div>
            <div class="navactions">
              <a class="btn btn--ghost" href="#support">ボランティア</a>
              <a class="btn btn--primary" href="#support">応援・参加</a>
              <button class="hamburger" type="button" aria-label="メニューを開く" aria-expanded="false" aria-controls="drawer">
                <span aria-hidden="true"></span>
              </button>
            </div>
          </nav>
          
          {/* Mobile Drawer */}
          <div class="drawer" id="drawer" hidden>
            <div class="drawer__inner">
              <div class="drawer__links">
                <a href="#policy">政策</a>
                <a href="#news">ニュース</a>
                <a href="#reports">須磨区レポート</a>
                <a href="#activity">活動報告</a>
                <a href="#support">応援する</a>
              </div>
              <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <a class="btn btn--ghost" href="#support" style="flex:1;">ボランティア</a>
                <a class="btn btn--primary" href="#support" style="flex:1;">応援・参加</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section class="hero">
        <div class="container">
          <div class="hero__grid">
            <div>
              <div class="kicker"><i aria-hidden="true"></i> 国民民主党 神戸市須磨区</div>
              <h1><span class="name">湯川寛之</span><br/>すべての人が輝く須磨区へ</h1>
              <p class="sub">「支えあう社会でまっとうな明日を実現します」</p>
              <p class="lead">
                神戸市須磨区で生まれ育ち、この街を愛し、この街の未来を真剣に考えています。
                地域の皆様との対話を重ね、一人ひとりの声に耳を傾けながら、
                すべての住民が幸せに暮らせる須磨区を実現するため、日々活動しています。
              </p>
              <div class="hero__cta">
                <a class="btn btn--primary" href="#policy">政策を見る</a>
                <a class="btn btn--ghost" href="#news">最新ニュース</a>
              </div>
            </div>
            <div class="hero__media" aria-label="メインビジュアル">
              <div class="hero__badges" aria-hidden="true">
                <div class="badge">
                  <b>活動実績</b>
                  <span>500+ 地域訪問回数</span>
                </div>
                <div class="badge">
                  <b>住民の声</b>
                  <span>1,200+ 声を聴取</span>
                </div>
              </div>
              <div class="portrait" aria-hidden="true">
                <div class="silhouette">
                  <input type="file" id="hero-image-upload" accept="image/*" style="display:none;" />
                  <label for="hero-image-upload" class="upload-label">画像をアップロード</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS / TOPICS ===== */}
      <section id="news" class="section">
        <div class="container">
          <div class="section__head">
            <div>
              <h2>須磨区の未来のために</h2>
              <p>活動報告・トピックス・お知らせ</p>
            </div>
            <a class="link" href="#">
              一覧へ
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="grid-3">
            <article class="card">
              <div class="card__media" role="img" aria-label="トピックス画像">
                <input type="file" class="card-image-upload" accept="image/*" style="display:none;" id="card-1" />
                <label for="card-1" class="card-upload-label">画像をアップロード</label>
              </div>
              <div class="card__body">
                <span class="tag">TOPICS</span>
                <h3>地域懇談会を開催</h3>
                <p>月2回、各地域で懇談会を開催し、地域課題について意見交換しています。</p>
              </div>
              <div class="card__footer">
                <a class="link" href="#">詳しく見る
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
            <article class="card">
              <div class="card__media" role="img" aria-label="ニュース画像">
                <input type="file" class="card-image-upload" accept="image/*" style="display:none;" id="card-2" />
                <label for="card-2" class="card-upload-label">画像をアップロード</label>
              </div>
              <div class="card__body">
                <span class="tag">NEWS</span>
                <h3>政策提言活動</h3>
                <p>住民の声をまとめ、行政への政策提言を積極的に行っています。</p>
              </div>
              <div class="card__footer">
                <a class="link" href="#">詳しく見る
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
            <article class="card">
              <div class="card__media" role="img" aria-label="お知らせ画像">
                <input type="file" class="card-image-upload" accept="image/*" style="display:none;" id="card-3" />
                <label for="card-3" class="card-upload-label">画像をアップロード</label>
              </div>
              <div class="card__body">
                <span class="tag">INFO</span>
                <h3>街頭活動</h3>
                <p>毎週3回、駅前や商店街で住民の皆様と対話し、生の声を聴いています。</p>
              </div>
              <div class="card__footer">
                <a class="link" href="#">詳しく見る
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== POLICY (Blue diagonal tiles) ===== */}
      <section id="policy" class="section">
        <div class="container">
          <div class="policy">
            <div class="policy__inner">
              <div class="policy__top">
                <div>
                  <h2>5つの基本政策</h2>
                  <p>須磨区の未来を創る具体的な政策</p>
                </div>
                <a class="btn btn--ghost" href="#" style="border-color:rgba(255,255,255,.24); color:#fff; background:rgba(255,255,255,.08);">
                  政策詳細
                </a>
              </div>
              <div class="tiles">
                <div class="tile">
                  <b>安全・安心の<br/>まちづくり</b>
                  <span>防犯・防災体制の充実</span>
                  <div class="num">01</div>
                </div>
                <div class="tile">
                  <b>子ども・若者が<br/>育つまち</b>
                  <span>待機児童ゼロ・教育充実</span>
                  <div class="num">02</div>
                </div>
                <div class="tile">
                  <b>健やかに<br/>暮らせるまち</b>
                  <span>高齢者・障害者支援</span>
                  <div class="num">03</div>
                </div>
                <div class="tile">
                  <b>自然・歴史<br/>文化を楽しむ</b>
                  <span>須磨の資源活用</span>
                  <div class="num">04</div>
                </div>
                <div class="tile">
                  <b>交流・参画で<br/>活気あふれる</b>
                  <span>地域活性化・定住促進</span>
                  <div class="num">05</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10の重点プロジェクト ===== */}
      <section class="section">
        <div class="container">
          <div class="section__head">
            <div>
              <h2>10の重点プロジェクト</h2>
              <p>須磨区の未来を切り拓く優先施策</p>
            </div>
          </div>
          <div class="projects-grid">
            {[
              { num: "01", title: "地域のつながり・防犯", desc: "自治会活動支援、防犯カメラ設置補助、通学路安全確保" },
              { num: "02", title: "災害に強いまちづくり", desc: "木造住宅耐震化促進、避難所環境整備、防災訓練支援" },
              { num: "03", title: "子どもの笑顔をはぐくむ", desc: "保育所整備、待機児童対策、中学校給食改善" },
              { num: "04", title: "地域で支えあう福祉", desc: "地域福祉センター拠点化、認知症サポーター養成" },
              { num: "05", title: "歴史・文化を次世代へ", desc: "須磨離宮公園再整備、伝統行事継承支援" },
              { num: "06", title: "魅力・活気あふれるまち", desc: "観光ポータル運営、商店街にぎわい支援" },
              { num: "07", title: "参画と協働のまちづくり", desc: "区民広報紙発信、区民まつり開催" },
              { num: "08", title: "海と山を活かす", desc: "須磨海岸活用促進、里山保全活動" },
              { num: "09", title: "名谷リノベーション", desc: "名谷駅前再開発、図書館充実、住宅再生" },
              { num: "10", title: "須磨海浜公園・海辺再生", desc: "水族園再整備、施設誘致、歩行者空間整備" }
            ].map((project) => (
              <div class="project-card">
                <div class="project-num">{project.num}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REPORTS / ACTIVITY ===== */}
      <section class="section" id="reports">
        <div class="container">
          <div class="section__head">
            <div>
              <h2>須磨区レポート</h2>
              <p>地域の課題と解決策を定期的に発信</p>
            </div>
            <a class="link" href="#">
              一覧へ
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="split">
            <article class="paper">
              <div class="paper__head">
                <h3>最新レポート</h3>
                <span class="tag">REPORT</span>
              </div>
              <div class="paper__body">
                <div class="paper__mock" aria-label="レポートサムネイル">
                  <input type="file" id="report-upload" accept="image/*" style="display:none;" />
                  <label for="report-upload" class="upload-label-inline">画像をアップロード</label>
                </div>
                <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
                  <a class="btn btn--primary" href="#">PDFを開く</a>
                  <a class="btn btn--ghost" href="#">バックナンバー</a>
                </div>
              </div>
            </article>
            <article class="paper" id="activity">
              <div class="paper__head">
                <h3>活動報告（動画）</h3>
                <span class="tag">MOVIE</span>
              </div>
              <div class="paper__body">
                <div class="video" aria-label="動画プレースホルダー">
                  <div class="play" aria-hidden="true"></div>
                </div>
                <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
                  <a class="btn btn--primary" href="#">動画一覧</a>
                  <a class="btn btn--ghost" href="#">活動レポート</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SUPPORT / SNS ===== */}
      <section id="support" class="support">
        <div class="container">
          <div class="section__head" style="padding-top:18px; margin-bottom:10px;">
            <div>
              <h2>湯川寛之を応援しよう</h2>
              <p>SNS・メール・参加の導線</p>
            </div>
          </div>
          <div class="support__grid" role="list">
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>SNS</div><small>最新情報</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>メール</div><small>ニュースレター</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>応援</div><small>活動支援</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>ボランティア</div><small>参加する</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>サポーター</div><small>会員登録</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>街頭予定</div><small>日程</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>お問い合わせ</div><small>連絡</small></a>
            <a class="pill" role="listitem" href="#"><i aria-hidden="true"></i><div>後援会</div><small>加入</small></a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div class="container">
          <div class="footer__top">
            <div class="footer__col">
              <div class="brand" style="min-width:auto;">
                <span class="brand__mark" aria-hidden="true"></span>
                <span class="brand__title">
                  <strong>湯川寛之</strong>
                  <span>国民民主党｜神戸市須磨区</span>
                </span>
              </div>
              <p style="margin:10px 0 0; color:var(--muted); font-weight:700;">
                神戸市須磨区で生まれ育ち、この街を愛し、すべての住民が幸せに暮らせる須磨区を実現するため、日々活動しています。
              </p>
            </div>
            <div class="footer__col">
              <h4>メニュー</h4>
              <a href="#policy">政策</a>
              <a href="#news">ニュース</a>
              <a href="#reports">須磨区レポート</a>
              <a href="#activity">活動報告</a>
            </div>
            <div class="footer__col">
              <h4>参加</h4>
              <a href="#support">応援</a>
              <a href="#support">ボランティア</a>
              <a href="#support">サポーター</a>
              <a href="#support">お問い合わせ</a>
            </div>
            <div class="footer__col">
              <h4>SNS</h4>
              <a href="#">X（旧Twitter）</a>
              <a href="#">YouTube</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div class="footer__bottom">
            <span>© 2024 湯川寛之 All Rights Reserved.</span>
            <span>神戸市須磨区　すべての人が輝く須磨区へ</span>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{__html: `
        const btn = document.querySelector(".hamburger");
        const drawer = document.getElementById("drawer");
        
        btn?.addEventListener("click", () => {
          const opened = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", String(!opened));
          drawer.hidden = opened;
        });
        
        drawer?.addEventListener("click", (e) => {
          const a = e.target.closest("a");
          if (!a) return;
          btn.setAttribute("aria-expanded", "false");
          drawer.hidden = true;
        });

        // 画像アップロード機能
        function setupImageUpload(inputId, targetSelector) {
          const input = document.getElementById(inputId);
          if (!input) return;
          
          input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onload = function(event) {
                const target = document.querySelector(targetSelector);
                if (target) {
                  target.style.backgroundImage = 'url(' + event.target.result + ')';
                  target.style.backgroundSize = 'cover';
                  target.style.backgroundPosition = 'center';
                  const label = target.querySelector('.upload-label, .card-upload-label, .upload-label-inline');
                  if (label) label.style.display = 'none';
                }
              };
              reader.readAsDataURL(file);
            }
          });
        }

        // ヒーロー画像
        setupImageUpload('hero-image-upload', '.silhouette');
        
        // カード画像
        setupImageUpload('card-1', '#card-1 + .card-upload-label').parentElement;
        setupImageUpload('card-2', '#card-2 + .card-upload-label').parentElement;
        setupImageUpload('card-3', '#card-3 + .card-upload-label').parentElement;
        
        // レポート画像
        setupImageUpload('report-upload', '.paper__mock');
        
        // カード用の画像アップロード
        document.querySelectorAll('.card-image-upload').forEach(input => {
          input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onload = function(event) {
                const cardMedia = input.parentElement;
                cardMedia.style.backgroundImage = 'url(' + event.target.result + ')';
                cardMedia.style.backgroundSize = 'cover';
                cardMedia.style.backgroundPosition = 'center';
                const label = cardMedia.querySelector('.card-upload-label');
                if (label) label.style.display = 'none';
              };
              reader.readAsDataURL(file);
            }
          });
        });
      `}} />
    </div>
  )
})

export default app
