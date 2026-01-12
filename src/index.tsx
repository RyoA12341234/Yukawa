import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ
app.get('/', (c) => {
  return c.render(
    <div>
      {/* ヘッダー部 */}
      <header id="header">
        <div class="header_wrap">
          <div class="header_inner pc">
            <div class="navi_wrap">
              <ul>
                <li class="navi_wrap_f"><a href="#top">T O P</a></li>
                <li><a href="#manifesto">5つの政策</a></li>
                <li><a href="#report">須磨区レポート</a></li>
                <li><a href="#profile">湯川寛之のあゆみ</a></li>
                <li><a href="#activity">活動報告</a></li>
                <li><a href="#projects">重点プロジェクト</a></li>
                <li><a href="#support">応援しよう</a></li>
              </ul>
            </div>

            <h1 class="header_name">
              <img src="/static/top_photo_name.png" alt="神戸市須磨区 湯川寛之 - 支えあう社会でまっとうな明日へ！" width="784" height="459" />
            </h1>
          </div>

          <div class="header_topics">
            <div class="header_topics_inner">
              <img src="/static/topics.png" alt="topics" />
              <p class="pc"><span id="target_01">須磨区のまちづくりを応援</span></p>
              <p class="pc"><span id="target_02">人間中心の経済</span></p>
              <div class="c_b"></div>
              
              <div class="topics_info_01">
                <div class="topics_info_close sp"></div>
                須磨区の未来のために全力で取り組みます
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ニュース部 */}
      <div id="news" class="clearfix">
        <div class="news_wrap">
          <div class="news_wrap_l">
            <img src="/static/yukawa_photo.png" alt="湯川寛之" class="pc" />
            <h1 class="name pc">湯川寛之</h1>
            <div class="c_b pc"></div>
          </div>

          <div class="news_wrap_r">
            <div class="news_wrap_r_Title_01">日常活動を動画で</div>
            <div class="news_youtube news_youtube_l">
              <div class="youtube">
                <div style="padding:177.78% 0 0 0;position:relative;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#666;">
                  準備中
                </div>
              </div>
            </div>
            <div class="c_b"></div>
          </div>
          <div class="c_b"></div>
        </div>
      </div>

      {/* 5つの基本政策部 */}
      <div id="manifesto" class="clearfix">
        <div class="manifesto_wrap">
          <div class="manifesto_inner">
            <div class="manifesto_inner_cell fade-up1">
              <a href="#manifesto"><img src="/static/manifesto_title.png" alt="須磨区への約束" border="0" /></a>
            </div>

            <div class="manifesto_inner_cell fade-up2 pc">
              <a href="#manifesto01"><img src="/static/manifesto_001.png" alt="1. 安全・安心のまちづくり" border="0" /></a>
            </div>
            <div class="manifesto_inner_cell fade-up1 sp">
              <a href="#manifesto01"><img src="/static/manifesto_001.png" alt="1. 安全・安心のまちづくり" border="0" /></a>
            </div>

            <div class="manifesto_inner_cell fade-up1">
              <a href="#manifesto02"><img src="/static/manifesto_002.png" alt="2. 子ども・若者が健やかに育つまちづくり" border="0" /></a>
            </div>

            <div class="manifesto_inner_cell fade-up2 pc">
              <a href="#manifesto03"><img src="/static/manifesto_003.png" alt="3. 健やかでいきいきと暮らせるまちづくり" border="0" /></a>
            </div>
            <div class="manifesto_inner_cell fade-up1 sp">
              <a href="#manifesto03"><img src="/static/manifesto_003.png" alt="3. 健やかでいきいきと暮らせるまちづくり" border="0" /></a>
            </div>

            <div class="manifesto_inner_cell fade-up1">
              <a href="#manifesto04"><img src="/static/manifesto_004.png" alt="4. 自然・歴史・文化・スポーツを楽しめるまちづくり" border="0" /></a>
            </div>

            <div class="manifesto_inner_cell fade-up2 pc">
              <a href="#manifesto05"><img src="/static/manifesto_005.png" alt="5. 交流・参画で活気あふれるまちづくり" border="0" /></a>
            </div>
            <div class="manifesto_inner_cell fade-up1 sp">
              <a href="#manifesto05"><img src="/static/manifesto_005.png" alt="5. 交流・参画で活気あふれるまちづくり" border="0" /></a>
            </div>

            <div class="c_b"></div>
          </div>

          <div class="manifesto_note">
            <h3>人間中心の経済</h3>
            わたしは徹底的に「人」に着目して「人」を支え、すべての「人」の能力を最大限に引き出す経済をつくります。<br />
            誰もが存分に力を発揮することができ、ゆとりある暮らしを営み、人生における選択の自由がある。そんな社会であってこそ、全体が発展できます。<br />
            知識集約型産業が基軸となる経済システムが前提となったいま、人間の多様で多面的な能力の開発・育成が、持続可能な成長のための必須条件です。<br />
            あわせて、社会保障・生活保障や社会制度、コミュニティのつながりを丹念に強化する「安心の立て直し」が、力強い経済の基盤であると考えています。<br />
            こうした視点から、わたしは、「人間中心の経済」に関連する5つの柱を設定して、政策の全体的な進捗を図ります。これらの政策を実現することで"すべての住民が個人として尊重され、健康で文化的な生活を営むことができる社会"をつくります。それこそが、新時代の須磨区の青写真です。
          </div>

          <div class="c_b"></div>
        </div>
      </div>

      {/* 須磨区レポート部 */}
      <div id="report" class="clearfix">
        <div class="report_wrap">
          <div class="report_inner">
            <h2>須磨区レポート</h2>
            <div class="report_inner_text">湯川寛之の最新活動レポートがこちらから確認できます!</div>
          </div>
          <div class="report_inner_contents">
            <div style="background:#f0f0f0;padding:100px 0;text-align:center;color:#666;">
              レポート準備中
            </div>
          </div>
        </div>
      </div>

      {/* あゆみ部 */}
      <div id="profile" class="clearfix">
        <div class="fade-up2">
          <div class="profile_wrap">
            <div class="profile_inner">
              <h2>湯川寛之のあゆみ</h2>
              <ul>
                <li>神戸市須磨区で生まれ育つ。地域の課題を肌で感じながら成長。</li>
                <li>地域コミュニティ活動に積極的に参加し、住民の声を聞く活動を続ける。</li>
                <li>すべての住民が安心して暮らせる須磨区を実現するため、政治の道を志す。</li>
              </ul>

              <div class="more_contents">
                <ul>
                  <li>人間中心の経済、地域の絆、子育て支援、高齢者福祉など、住民の生活に直結する政策に全力で取り組む決意を固める。</li>
                  <li>須磨区の未来のために、5つの基本政策と10の重点プロジェクトを策定。</li>
                  <li class="profile_last">
                    <span class="profile_dot">●</span> 現　在<br />
                    神戸市須磨区<br />
                    <br />
                    <span class="profile_dot">●</span> 家　族<br />
                    妻と子供<br />
                  </li>
                </ul>
              </div>
              <div class="c_b"></div>
            </div>
            <div class="c_b"></div>
          </div>
          <div class="more_btn_wrap">
            <div class="more_btn">もっと見る</div>
          </div>
        </div>
      </div>

      {/* 10の重点プロジェクト部 */}
      <div id="projects" class="clearfix">
        <div class="projects_wrap">
          <div class="projects_inner">
            <h2>10の重点プロジェクト</h2>
            
            <div class="project_item">
              <h3>1. 地域のつながり・防犯プロジェクト</h3>
              <ul>
                <li>自治会活動の支援</li>
                <li>防犯カメラの設置補助</li>
                <li>特殊詐欺防止啓発</li>
                <li>通学路の安全確保</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>2. 災害に強いまちづくりプロジェクト</h3>
              <ul>
                <li>木造住宅の耐震化促進</li>
                <li>土砂災害対策</li>
                <li>避難所環境の整備</li>
                <li>自主防災組織の訓練支援</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>3. 子どもの笑顔をはぐくむプロジェクト</h3>
              <ul>
                <li>保育所の整備による待機児童対策</li>
                <li>子ども家庭センターの充実</li>
                <li>中学校給食の自校調理方式推進</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>4. 地域で支えあう福祉プロジェクト</h3>
              <ul>
                <li>地域福祉センターの拠点化</li>
                <li>認知症サポーターの養成</li>
                <li>高齢者のフレイル予防活動</li>
                <li>移動支援サービスの確保</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>5. 歴史・文化を次世代へつなぐプロジェクト</h3>
              <ul>
                <li>須磨離宮公園の再整備</li>
                <li>伝統行事の継承支援</li>
                <li>歴史散策ルートの整備とPR</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>6. 魅力・活気あふれるまちづくりプロジェクト</h3>
              <ul>
                <li>須磨の観光ポータルの運営</li>
                <li>商店街のにぎわい支援</li>
                <li>若年世帯の住み替え支援事業</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>7. 参画と協働によるまちづくりプロジェクト</h3>
              <ul>
                <li>区民広報紙「すま」による情報発信</li>
                <li>区民まつりの開催</li>
                <li>ボランティア活動支援</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>8. 海と山を活かしたまちづくりプロジェクト</h3>
              <ul>
                <li>須磨海岸の通年利活用の促進</li>
                <li>里山の保全活動</li>
                <li>森林整備と自然体験イベント</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>9. 名谷リノベーションプロジェクト</h3>
              <ul>
                <li>名谷駅前の再開発</li>
                <li>名谷図書館の充実</li>
                <li>駅周辺の商業機能の更新</li>
                <li>北須磨団地等の住宅再生</li>
              </ul>
            </div>

            <div class="project_item">
              <h3>10. 須磨海浜公園・海辺のリノベーションプロジェクト</h3>
              <ul>
                <li>須磨海浜水族園の再整備</li>
                <li>海浜公園内への施設誘致</li>
                <li>海辺の歩行者空間の整備</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer id="footer">
        <div class="footer_wrap">
          <div class="footer_inner">
            <p>© 2024 湯川寛之 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
