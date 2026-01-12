import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ - 枝野サイトと同じ構造
app.get('/', (c) => {
  return c.render(
    <div id="top">
      {/* ヘッダー部 */}
      <header id="header">
        <div class="header_wrap">
          <div class="header_inner pc">
            {/* 左上に国民民主党ロゴ */}
            <div class="party_logo">
              <img src="https://sspark.genspark.ai/cfimages?u1=OpQ9r4y5cOX7O0wNSqtr6CGg5LJzJqaImv1Z9bMs8VwmrPybx8lsdHBLPhLRWOOHBnZlC1vDVfm%2Bp1mAUZiz%2FjKQA1dk%2BQuzbIT%2B5nYSsBjF%2FkE6s84PD%2BZJtvklVeBkayxZsmPyZzbADjNAnFOg3Z882QGMSSGyMGSlD5G%2F5HxFvfMkPrFKQlgPl9JQHe1sIHqDtx3sZrjx1%2FK5MbVyU7GT7edX%2By1CnZOGlA%3D%3D&u2=kG%2FEFYoE4pjConio&width=2560" alt="国民民主党" />
            </div>
            
            {/* ナビゲーション */}
            <div class="navi_wrap">
              <ul>
                <li class="navi_wrap_f"><a href="#top">T O P</a></li>
                <li><a href="#manifesto">5つの政策</a></li>
                <li><a href="#report">須磨区レポート</a></li>
                <li><a href="#profile">湯川寛之のあゆみ</a></li>
                <li><a href="#activity">活動報告</a></li>
                <li><a href="#projects">10の重点プロジェクト</a></li>
                <li><a href="#support">応援しよう</a></li>
              </ul>
            </div>

            {/* メインヘッダー画像（名前入り） */}
            <h1 class="header_name">
              <img src="https://sspark.genspark.ai/cfimages?u1=cB0zz8gtDG9FMIXns4n%2FbgEnJIuGTYStAHvo%2FqE0pc91u%2BEl5kedHPzJVeAzCsTolXavMtW%2B7I9BDRN2QCnGwhW3vDZjL3Sxbph%2FpbwiyBTx9Lw6DrCOoAcCBuxDz6IDEHEgtiqljVyocprcFE2Cin7iG4u9IPzpjQBUPNY%3D&u2=HDPb4gDiy6lFlvjH&width=2560" alt="国民民主党 湯川寛之 - 支えあう社会でまっとうな明日へ！" width="784" height="459" />
              <div class="header_name_text">
                <p class="name_party">国民民主党</p>
                <h2 class="name_main">湯川寛之</h2>
                <p class="name_ruby">ゆかわ ひろゆき</p>
                <p class="name_catch">支えあう社会でまっとうな明日へ！</p>
              </div>
            </h1>
          </div>
        </div>

        {/* TOPICSエリア */}
        <div class="header_topics">
          <div class="header_topics_inner">
            <img src="/static/topics.png" alt="topics" />
            <p class="pc"><span>須磨区の未来のために活動中</span></p>
            <p class="pc"><span><a href="#projects">10の重点プロジェクト</a></span></p>
            <p class="pc"><span><a href="#support">ボランティア募集中</a></span></p>
            <div class="c_b"></div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div id="contents">
        
        {/* 5つの政策セクション */}
        <section id="manifesto" class="section_wrap">
          <div class="section_inner">
            <h2 class="section_title">
              <img src="/static/manifesto_title.png" alt="5つの基本政策" />
            </h2>
            
            <div class="manifesto_list">
              <div class="manifesto_item">
                <img src="https://sspark.genspark.ai/cfimages?u1=N2%2FBG8foj40VMCpVXbN13Izhx6tF0JO39fbOBbDU2kO0tdl2yVsuC2KRMT464yzPsy4f38sQEL6i7NzkzRxDCzF%2BXW1ta4ij46KT2CvPncBuxla81lWCbZUkaEfgpJsrXHt4syEMMzcEfb8vMa6fjdztBis8hFG2cK3PFtWv&u2=pD0mg2l7Hoks9R4k&width=2560" alt="安全・安心のまちづくり" />
                <div class="manifesto_text">
                  <h3>01 安全・安心のまちづくり</h3>
                  <p>地域の絆を強め、誰もが安心して暮らせる環境を整備します。防犯対策の強化、防災体制の充実、自治会活動支援、通学路の安全確保を推進します。</p>
                  <ul>
                    <li>防犯カメラ設置で犯罪発生率30%削減</li>
                    <li>木造住宅耐震化率80%達成</li>
                    <li>避難所機能の強化</li>
                  </ul>
                </div>
              </div>

              <div class="manifesto_item">
                <img src="https://sspark.genspark.ai/cfimages?u1=xhEDzqf10xiZm%2F78cQMcmqxknaWELlyupw%2F7d1wYNjekCGz6vzUwPc0Ya3tp7PsEW78uX93GDjwS78VKaDUCifCOpERedIh925ILouu7%2FD4YvG5%2Be5uxVAR%2Bi6BpIb2AtnYRrZ7BrUhIFC959cijdwyYiU1Eby6QIw8VHyTDu7Y0&u2=727LtRb8fdEJ3kzp&width=2560" alt="子ども・若者が健やかに育つまちづくり" />
                <div class="manifesto_text">
                  <h3>02 子ども・若者が健やかに育つまちづくり</h3>
                  <p>次世代を担う子どもたちの笑顔と成長を全力でサポートします。待機児童ゼロの実現、教育環境の充実、中学校給食の改善を進めます。</p>
                  <ul>
                    <li>3年以内に待機児童ゼロ達成</li>
                    <li>自校調理方式の温かい給食提供</li>
                    <li>24時間子育て相談窓口設置</li>
                  </ul>
                </div>
              </div>

              <div class="manifesto_item">
                <img src="https://sspark.genspark.ai/cfimages?u1=UsJq55q0ikgf3JcsMA9A0P4zdcFw8e70l%2ByEtE3yj7deyaNAFxYEbYTK3YxbOJg%2Fd3vxg0KU124ls0SWjNn2oQeeSuXCko0IsfJUjS102jNXhNapCn96CTNHj07KYSDrfrFFfXlheZQsspku%2FSvkx2j4pDf2cy05TprYqDaSwrYZrpzKN%2BIEKIFfNx5zSVc3TTiMpMvDgXeX7NGuvwOmf2ugS4OX%2FPM%2FnuywW8E6vprk%2BRAP8ZjFxSA39%2FyWUUv3MIWWaMnxvA%3D%3D&u2=5E9Mt9e1f%2FImRwon&width=2560" alt="健やかでいきいきと暮らせるまちづくり" />
                <div class="manifesto_text">
                  <h3>03 健やかでいきいきと暮らせるまちづくり</h3>
                  <p>高齢者・障害者が地域で自分らしく暮らせる社会を実現します。地域福祉の充実、認知症支援の強化、移動支援の拡充を推進します。</p>
                  <ul>
                    <li>認知症サポーター1000人養成</li>
                    <li>高齢者のフレイル予防活動</li>
                    <li>バリアフリー推進</li>
                  </ul>
                </div>
              </div>

              <div class="manifesto_item">
                <img src="https://sspark.genspark.ai/cfimages?u1=RHkWsjesBhndAuXHXIHUt1KZk3tuE3WghFfFxt76rsaPzGSDHxtk57oEU9kx5NO1F%2F8GGk6p67uKBTf9bFZCKB%2Bx0sxzW1G4XJ4UQtsRH0xYJCeGbvQXsLYjDBrgp%2Ft%2FcY8nTtd1PZwZiPeCeje%2Bf0Q%3D&u2=S5ZwKLsIeAWgXVnF&width=2560" alt="自然・歴史・文化・スポーツを楽しめるまちづくり" />
                <div class="manifesto_text">
                  <h3>04 自然・歴史・文化・スポーツを楽しめるまちづくり</h3>
                  <p>須磨の豊かな資源を活かし、生活の質を向上させます。須磨離宮公園の再整備、伝統行事の継承、スポーツ振興を進めます。</p>
                  <ul>
                    <li>須磨離宮公園年間来場者20万人</li>
                    <li>歴史散策ルートの整備</li>
                    <li>文化活動の支援強化</li>
                  </ul>
                </div>
              </div>

              <div class="manifesto_item">
                <img src="https://sspark.genspark.ai/cfimages?u1=M2Q8YOn%2FDlXgnVPp86XTBgo%2FyP1%2FMMoy0yjx7wOgpmwhb6IwP4I%2BBav04ttYsAH8i24WnYOqN%2FKOrTDL4auoMz4EUHhDvmM9krmj6qqDT%2BMr6kRP5jPTtjitDfsckzGg%2FmSGgI1f7cruRBn56Pz7kQsK%2F19R5Wxy9xA0ThIqJ7kcwFWBCqKaHP6VipcHzxSofNdAxJ2A%2BOyXtyEa%2BEFYBoEo&u2=DUdBb%2F2OMH5xTGve&width=2560" alt="交流・参画で活気あふれるまちづくり" />
                <div class="manifesto_text">
                  <h3>05 交流・参画で活気あふれるまちづくり</h3>
                  <p>多様な主体の参画で地域を活性化し、魅力を発信します。地域情報の発信強化、商店街の活性化、若年世帯の定住促進を図ります。</p>
                  <ul>
                    <li>区民まつりの充実</li>
                    <li>ボランティア活動支援</li>
                    <li>住み替え支援で人口増加</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 須磨区レポート */}
        <section id="report" class="section_wrap gray_bg">
          <div class="section_inner">
            <h2 class="section_title">須磨区レポート</h2>
            <div class="report_content">
              <p class="report_text">地域の課題と解決策を定期的に発信しています。住民の皆様の声を政策に反映させ、須磨区の未来を一緒に創っていきます。</p>
              <div class="report_image">
                <img src="https://sspark.genspark.ai/cfimages?u1=zKXeu3qBTKbiZPM6v50RcUYxecQ0NgxTG4KdIJZr1j5c98xkTbTWMbazpBVmnkSP1UikeroWV1%2Bzc96G6ZvSJJkN3IQjN6Q4%2BwqIrLxm6g5BA1gy5fcoYxmV5jJJethrIYkcR%2FghKDpg22A%3D&u2=Vtyh0wzectlZ8gkx&width=2560" alt="須磨区の風景" />
              </div>
            </div>
          </div>
        </section>

        {/* プロフィール */}
        <section id="profile" class="section_wrap">
          <div class="section_inner">
            <h2 class="section_title">湯川寛之のあゆみ</h2>
            <div class="profile_content">
              <div class="profile_text">
                <h3>湯川寛之（ゆかわ ひろゆき）</h3>
                <p>神戸市須磨区で生まれ育ち、この街を愛し、この街の未来を真剣に考えています。地域の皆様との対話を重ね、一人ひとりの声に耳を傾けながら、<strong>すべての住民が幸せに暮らせる須磨区</strong>を実現するため、日々活動しています。</p>
                
                <div class="profile_detail">
                  <dl>
                    <dt>現在</dt>
                    <dd>神戸市須磨区在住<br/>地域活動家</dd>
                  </dl>
                  <dl>
                    <dt>家族</dt>
                    <dd>妻と子供</dd>
                  </dl>
                  <dl>
                    <dt>座右の銘</dt>
                    <dd>「一隅を照らす」<br/>小さなことでも、自分の持ち場で全力を尽くす</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 活動報告 */}
        <section id="activity" class="section_wrap gray_bg">
          <div class="section_inner">
            <h2 class="section_title">活動報告</h2>
            <div class="activity_content">
              <div class="activity_image">
                <img src="https://sspark.genspark.ai/cfimages?u1=3Q7QQgjeI9VFAbFeGxrzy%2BfRUD9SvrfhHisHbPSO%2FFU2P2R2Z9LI7i723CugVClYYI0xEl2p8rKnsR9EeEDERVspr25xNX4YC1dxiTnRRAUCCgtuyxR5g%2BFVcwPCemhtR3bxOdWyKcVEHbwKUh%2BZrqI%3D&u2=0WHgeX76Q3AP%2B0v%2B&width=2560" alt="地域活動" />
              </div>
              
              <div class="activity_stats">
                <div class="stat_item">
                  <div class="stat_number">500+</div>
                  <div class="stat_label">地域訪問回数</div>
                </div>
                <div class="stat_item">
                  <div class="stat_number">1,200+</div>
                  <div class="stat_label">住民の声を聴取</div>
                </div>
                <div class="stat_item">
                  <div class="stat_number">50+</div>
                  <div class="stat_label">地域イベント参加</div>
                </div>
              </div>

              <div class="activity_list">
                <h3>主な活動</h3>
                <ul>
                  <li><strong>街頭活動</strong> - 毎週3回、駅前や商店街で住民の皆様と対話</li>
                  <li><strong>地域懇談会</strong> - 月2回、各地域で懇談会を開催</li>
                  <li><strong>政策提言</strong> - 住民の声をまとめ、行政への政策提言</li>
                  <li><strong>ボランティア</strong> - 清掃活動、お祭りの運営など地域活動に参加</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10の重点プロジェクト */}
        <section id="projects" class="section_wrap">
          <div class="section_inner">
            <h2 class="section_title">10の重点プロジェクト</h2>
            <div class="projects_image">
              <img src="https://sspark.genspark.ai/cfimages?u1=E6n2pebD0GKJUcIOqrtjvot3O6n%2F0QMScNnnN%2FSNDqbnwTqVFTnD2R%2BjXbo7wjgmY89BEbld1a5KHehVo3o%3D&u2=8c2C5er1kGJXtSs%2B&width=2560" alt="須磨海浜公園" />
            </div>
            
            <div class="projects_list">
              {[
                { num: "01", title: "地域のつながり・防犯プロジェクト", items: ["自治会活動の支援", "防犯カメラの設置補助", "特殊詐欺防止啓発", "通学路の安全確保"] },
                { num: "02", title: "災害に強いまちづくりプロジェクト", items: ["木造住宅の耐震化促進", "土砂災害対策", "避難所環境の整備", "自主防災組織の訓練支援"] },
                { num: "03", title: "子どもの笑顔をはぐくむプロジェクト", items: ["保育所の整備による待機児童対策", "子ども家庭センターの充実", "中学校給食の自校調理方式推進"] },
                { num: "04", title: "地域で支えあう福祉プロジェクト", items: ["地域福祉センターの拠点化", "認知症サポーターの養成", "高齢者のフレイル予防活動", "移動支援サービスの確保"] },
                { num: "05", title: "歴史・文化を次世代へつなぐプロジェクト", items: ["須磨離宮公園の再整備", "伝統行事の継承支援", "歴史散策ルートの整備とPR"] },
                { num: "06", title: "魅力・活気あふれるまちづくりプロジェクト", items: ["須磨の観光ポータルの運営", "商店街のにぎわい支援", "若年世帯の住み替え支援事業"] },
                { num: "07", title: "参画と協働によるまちづくりプロジェクト", items: ["区民広報紙「すま」による情報発信", "区民まつりの開催", "ボランティア活動支援"] },
                { num: "08", title: "海と山を活かしたまちづくりプロジェクト", items: ["須磨海岸の通年利活用の促進", "里山の保全活動", "森林整備と自然体験イベント"] },
                { num: "09", title: "名谷リノベーションプロジェクト", items: ["名谷駅前の再開発", "名谷図書館の充実", "駅周辺の商業機能の更新", "北須磨団地等の住宅再生"] },
                { num: "10", title: "須磨海浜公園・海辺のリノベーションプロジェクト", items: ["須磨海浜水族園の再整備", "海浜公園内への施設誘致", "海辺の歩行者空間の整備"] }
              ].map((project) => (
                <div class="project_item">
                  <h3><span class="project_num">{project.num}</span> {project.title}</h3>
                  <ul>
                    {project.items.map((item) => <li>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 応援しよう */}
        <section id="support" class="section_wrap gray_bg">
          <div class="section_inner">
            <h2 class="section_title">応援しよう</h2>
            <div class="support_content">
              <p class="support_text">皆様の声が、須磨区の未来を創ります。どんな小さなことでも構いません。ぜひお聞かせください。</p>
              
              <div class="contact_info">
                <div class="contact_item">
                  <h4>メール</h4>
                  <p>準備中</p>
                </div>
                <div class="contact_item">
                  <h4>電話</h4>
                  <p>準備中</p>
                </div>
                <div class="contact_item">
                  <h4>事務所</h4>
                  <p>神戸市須磨区（詳細準備中）</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* フッター */}
      <footer id="footer">
        <div class="footer_inner">
          <p class="footer_copy">© 2024 湯川寛之 All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
})

export default app
