async function loadJSON(path){
  const res = await fetch(path, { cache: "no-store" });
  if(!res.ok) throw new Error(`Failed to load ${path}`);
  return await res.json();
}

function el(tag, attrs={}, children=[]){
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k === "class") n.className = v;
    else if(k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  });
  children.forEach(c=>{
    if(typeof c === "string") n.appendChild(document.createTextNode(c));
    else if(c) n.appendChild(c);
  });
  return n;
}

function youtubeEmbed(url){
  try{
    const u = new URL(url);
    let id = "";
    if(u.hostname.includes("youtu.be")) id = u.pathname.replace("/","");
    if(u.searchParams.get("v")) id = u.searchParams.get("v");
    if(u.pathname.includes("/embed/")) id = u.pathname.split("/embed/")[1];
    if(!id) return "";
    return `https://www.youtube.com/embed/${id}`;
  }catch(e){ return ""; }
}

(async function init(){
  document.getElementById("year").textContent = new Date().getFullYear();

  const site = await loadJSON("/content/site.json");
  const policies = await loadJSON("/content/policies.json");

  document.getElementById("noticeBar").textContent = site.noticeBar || "公式サイト";
  document.getElementById("heroTitle").textContent = site.heroTitle || "湯川寛之";
  document.getElementById("heroSub").textContent = site.heroSub || "";

  const heroPoints = document.getElementById("heroPoints");
  (site.heroPills || []).forEach(t=>{
    heroPoints.appendChild(el("div",{class:"pill"},[t]));
  });

  const meta = document.getElementById("heroMeta");
  meta.innerHTML = (site.heroMetaLines||[]).map(x=>`<div>${x}</div>`).join("");

  const videoCards = document.getElementById("videoCards");
  (site.videos || []).forEach(v=>{
    const embed = youtubeEmbed(v.url);
    const card = el("div",{class:"card"},[
      el("div",{class:"thumb"},[
        embed ? el("iframe",{
          src: embed,
          title: v.title || "YouTube video",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowfullscreen: "true"
        }) : el("div",{},["（YouTube URLを設定してください）"])
      ]),
      el("div",{class:"body"},[
        el("p",{class:"title"},[v.title || "動画タイトル"]),
        el("p",{class:"desc"},[v.desc || ""])
      ])
    ]);
    videoCards.appendChild(card);
  });

  const stack = document.getElementById("policyStack");
  (policies.items || []).forEach((p, idx)=>{
    const ul = el("ul",{}, (p.bullets||[]).map(b=>el("li",{},[b])));
    const card = el("div",{class:"policy"},[
      el("div",{class:"inner"},[
        el("div",{},[
          el("h3",{},[p.title || `政策${idx+1}`]),
          ul
        ]),
        el("div",{class:"tag"},[p.tag || `POLICY ${idx+1}`])
      ])
    ]);
    stack.appendChild(card);
  });

  const newsList = document.getElementById("newsList");
  (site.news || []).forEach(n=>{
    newsList.appendChild(
      el("div",{class:"list-item"},[
        el("div",{class:"left"},[
          el("span",{class:"badge"},[n.category || "お知らせ"]),
          el("div",{class:"t"},[n.title || "タイトル"])
        ]),
        el("div",{class:"date"},[n.date || ""])
      ])
    );
  });

  const activityGrid = document.getElementById("activityGrid");
  (site.activity || []).forEach(a=>{
    activityGrid.appendChild(
      el("div",{class:"activity"},[
        el("img",{src:a.image || "/images/hero.jpg", alt:a.title || "活動写真"}),
        el("div",{class:"body"},[
          el("p",{class:"title"},[a.title || "活動報告"]),
          el("p",{class:"desc"},[a.desc || ""])
        ])
      ])
    );
  });

  const iconNav = document.getElementById("iconNav");
  (site.iconNav || []).forEach(i=>{
    iconNav.appendChild(
      el("a",{class:"icon-item", href:i.href || "#"},[
        el("div",{class:"icon-dot"},[]),
        el("div",{},[i.label || "リンク"])
      ])
    );
  });

  document.getElementById("officeTel").textContent = site.office?.tel || "000-0000-0000";
  document.getElementById("officeAddr").textContent = site.office?.addr || "（住所を入力）";
  document.getElementById("officeHours").textContent = site.office?.hours || "（受付時間）";

  const sns = document.getElementById("snsLinks");
  (site.sns || []).forEach((s, idx)=>{
    const a = el("a",{href:s.url, target:"_blank", rel:"noopener"},[s.label]);
    sns.appendChild(a);
    if(idx < site.sns.length-1) sns.appendChild(document.createTextNode(" / "));
  });
})();
