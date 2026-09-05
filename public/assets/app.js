/* 林意 LINYI —— 双语渲染脚本（零构建，数据在 /content.js） */
(function () {
  "use strict";

  var DATA = window.LINYI;
  var app = document.getElementById("app");
  var page = document.body.getAttribute("data-page") === "article" ? "article" : "home";

  var lang = "zh";
  try {
    var saved = localStorage.getItem("linyi-lang");
    if (saved === "zh" || saved === "en") lang = saved;
  } catch (e) { /* 隐私模式下忽略 */ }

  var UI = {
    contentsZh: "目录", contentsEn: "CONTENTS",
    coverStory: { zh: "本期头条 · Cover Story", en: "Cover Story" },
    read: { zh: "进入阅读 →", en: "Read the story →" },
    back: { zh: "← 返回目录", en: "← Back to contents" },
    charCap: { zh: "本期之字", en: "Character of the issue" },
    colophonNote: {
      zh: "本刊文章不设栏目之限，正着读是别人的道理，倒着读是自己的事实。",
      en: "No fixed departments here: forwards, these pieces are somebody else\u2019s morals; backwards, your own facts."
    },
    notFoundTitle: { zh: "本刊没有这一页", en: "This page is not in the issue" },
    notFoundBody: { zh: "它可能被编辑撤下了，或者从来没有排上版。", en: "It may have been pulled by the editors, or never set in type at all." },
    editors: { zh: "编辑部", en: "The editors" },
    homeTitle: { zh: "林意 LINYI · 创刊号", en: "LINYI · First Issue" },
    share: { zh: "生成分享图", en: "Make a share card" },
    shareFull: { zh: "全文卡片", en: "Full-text pages" }
  };

  function t(x) {
    if (x === null || x === undefined) return "";
    if (typeof x === "string") return x;
    if (x[lang] !== undefined && x[lang] !== null) return x[lang];
    return x.zh || "";
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function lines(arr) { return arr.map(esc).join("<br>"); }
  function isLatin(s) { return /^[\x00-\x7F]+$/.test(String(s)); }

  /* 英文模式下品牌名只用拉丁字：LINYI */
  function brandName() { return lang === "zh" ? DATA.brand.name : DATA.brand.latin; }
  function brandText() { return lang === "zh" ? DATA.brand.name + " " + DATA.brand.latin : DATA.brand.latin; }
  function sealHtml() {
    return lang === "zh"
      ? '<span class="seal" aria-hidden="true">' + esc(DATA.brand.name) + "</span>"
      : '<span class="seal latin" aria-hidden="true">LIN<br>YI</span>';
  }

  var FAVICON = {
    zh: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='7' fill='%239e2b25'/%3E%3Ctext x='32' y='45' font-family='serif' font-weight='700' font-size='36' fill='%23f7f0dd' text-anchor='middle'%3E%E6%9E%97%3C/text%3E%3C/svg%3E",
    en: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='7' fill='%239e2b25'/%3E%3Ctext x='32' y='46' font-family='Georgia,serif' font-weight='600' font-size='42' fill='%23f7f0dd' text-anchor='middle'%3EL%3C/text%3E%3C/svg%3E"
  };
  function syncFavicon() {
    var link = document.querySelector('link[rel="icon"]');
    if (link) link.setAttribute("href", FAVICON[lang]);
  }

  function toggleHtml() {
    return '<div class="lang-toggle" role="group" aria-label="Language / 语言">'
      + '<button type="button" data-lang-btn="zh" aria-pressed="' + (lang === "zh") + '">中</button>'
      + '<button type="button" data-lang-btn="en" aria-pressed="' + (lang === "en") + '">EN</button>'
      + "</div>";
  }

  function folioBar(midHtml, wordmark) {
    var left = wordmark
      ? '<a class="wordmark" href="/">' + esc(brandName()) + "</a>"
      : '<span>' + esc(t(DATA.issue.number)) + "</span>";
    return '<header class="folio-bar">' + left
      + (midHtml ? '<span class="folio-mid">' + midHtml + "</span>" : "")
      + toggleHtml() + "</header>";
  }

  function colophonHtml() {
    return '<footer class="colophon">'
      + "<p>" + esc(t(UI.colophonNote)) + "</p>"
      + '<p class="brandline">' + esc(brandText()) + " · "
      + esc(t(DATA.issue.number)) + " · " + esc(t(DATA.issue.date)) + " · "
      + esc(DATA.issue.site) + "</p>"
      + "</footer>";
  }

  /* ---------------- 首页（封面 + 目录 + 创刊词） ---------------- */

  function renderHome() {
    var a = DATA.articles[0];
    var ch = t(a.coverChar);
    var html = "";

    html += folioBar(esc(t(DATA.issue.date)));

    html += '<section class="masthead rise" style="--d:40ms">'
      + '<p class="mast-eyebrow">' + esc(t(DATA.brand.eyebrow)) + "</p>"
      + '<div class="mast-row"><h1 class="mast-title' + (lang === "en" ? " latin" : "") + '">'
      + esc(brandName()) + "</h1>"
      + sealHtml() + "</div>"
      + '<p class="mast-sub">' + esc(t(DATA.brand.tagline)) + "</p>"
      + '<p class="mast-note">' + esc(t(DATA.brand.nameNote)) + "</p>"
      + '<p class="mast-price">' + esc(t(DATA.issue.price)) + "</p>"
      + "</section>";

    html += '<div class="rule-thick-thin" aria-hidden="true"></div>';

    html += '<section class="cover rise" style="--d:120ms">'
      + '<figure class="cover-art" aria-hidden="true">'
      + '<div class="cover-art-inner">'
      + '<span class="glyph' + (isLatin(ch) ? " latin" : "") + '">' + esc(ch) + "</span>"
      + '<figcaption class="cover-art-cap">' + esc(t(UI.charCap)) + "</figcaption>"
      + "</div></figure>"
      + '<div class="cover-text">'
      + '<p class="cover-kicker">' + esc(t(UI.coverStory)) + "</p>"
      + '<h2 class="cover-title"><a href="article.html?slug=' + encodeURIComponent(a.slug) + '">' + esc(t(a.title)) + "</a></h2>"
      + '<p class="cover-deck">' + esc(t(a.deck)) + "</p>"
      + '<p class="cover-by">' + esc(t(a.byline)) + " · " + esc(t(a.kicker)) + "</p>"
      + '<a class="read-link" href="article.html?slug=' + encodeURIComponent(a.slug) + '">' + esc(t(UI.read)) + "</a>"
      + '<button type="button" class="share-btn cover-share" data-share="' + encodeURIComponent(a.slug) + '">' + esc(t(UI.share)) + "</button>"
      + "</div></section>";

    html += '<div class="rule-thin" aria-hidden="true"></div>';

    /* 目录 */
    var toc = '<a class="toc-entry" href="#note">'
      + '<span class="toc-no">' + esc(DATA.editorNote.pageNo) + "</span>"
      + '<span class="toc-main"><span class="toc-title">' + esc(t(DATA.editorNote.title)) + "</span>"
      + '<span class="toc-meta">' + esc(t(UI.editors)) + "</span></span>"
      + '<span class="leader" aria-hidden="true"></span>'
      + '<span class="toc-page">' + esc(DATA.editorNote.pageNo) + "</span></a>";
    DATA.articles.forEach(function (art) {
      toc += '<a class="toc-entry" href="article.html?slug=' + encodeURIComponent(art.slug) + '">'
        + '<span class="toc-no">' + esc(art.pageNo) + "</span>"
        + '<span class="toc-main"><span class="toc-title">' + esc(t(art.title)) + "</span>"
        + '<span class="toc-meta">' + esc(t(art.byline)) + " · " + esc(t(art.kicker)) + "</span></span>"
        + '<span class="leader" aria-hidden="true"></span>'
        + '<span class="toc-page">' + esc(art.pageNo) + "</span></a>";
    });
    html += '<section class="contents rise" style="--d:200ms">'
      + '<div class="contents-head"><h2>' + (lang === "zh" ? UI.contentsZh : UI.contentsEn) + "</h2>"
      + (lang === "zh" ? '<span class="en">' + UI.contentsEn + "</span>" : "")
      + "</div>"
      + toc + "</section>";

    /* 创刊词 */
    html += '<section class="note" id="note">'
      + '<div class="note-box">'
      + '<h3 class="note-title">' + esc(t(DATA.editorNote.title)) + "</h3>"
      + (lang === "zh" ? '<p class="note-en">FOUNDING NOTE</p>' : "")
      + '<div class="note-rule" aria-hidden="true"></div>'
      + '<p class="note-body">' + lines(t(DATA.editorNote.lines)) + "</p>"
      + "</div></section>";

    html += colophonHtml();
    app.innerHTML = html;
    document.title = t(UI.homeTitle);
  }

  /* ---------------- 文章页 ---------------- */

  function findArticle(slug) {
    for (var i = 0; i < DATA.articles.length; i++) {
      if (DATA.articles[i].slug === slug) return DATA.articles[i];
    }
    return null;
  }

  function renderArticle() {
    var slug = new URLSearchParams(location.search).get("slug");
    var a = findArticle(slug) || (slug ? null : DATA.articles[0]);

    if (!a) {
      app.innerHTML = folioBar(esc(t(DATA.issue.number)), true)
        + '<section class="missing">'
        + sealHtml()
        + "<h1>" + esc(t(UI.notFoundTitle)) + "</h1>"
        + "<p>" + esc(t(UI.notFoundBody)) + "</p>"
        + '<a class="read-link" href="/">' + esc(t(UI.back).replace(/^←\s*/, "")) + "</a>"
        + "</section>" + colophonHtml();
      document.title = t(UI.notFoundTitle) + " · " + DATA.brand.latin;
      return;
    }

    var body = "";
    a.blocks.forEach(function (b) {
      if (b.type === "pull") {
        var open = lang === "zh" ? "「" : "\u201c";
        var close = lang === "zh" ? "」" : "\u201d";
        body += '<blockquote class="pull' + (lang === "en" ? " en" : "") + '">'
          + open + esc(t(b)) + close + "</blockquote>";
      } else {
        body += "<p>" + lines(b[lang] || b.zh) + "</p>";
      }
    });

    app.innerHTML = folioBar(esc(t(DATA.issue.number)), true)
      + '<nav class="crumb"><a href="/">' + esc(t(UI.back)) + "</a></nav>"
      + '<article class="article">'
      + '<p class="art-kicker">' + esc(t(a.kicker)) + "</p>"
      + '<h1 class="art-title">' + esc(t(a.title)) + "</h1>"
      + '<p class="art-deck">' + esc(t(a.deck)) + "</p>"
      + '<div class="art-byline">'
      + "<span>" + esc(t(a.byline)) + "</span>"
      + "<span>" + esc(t(a.translator)) + "</span>"
      + "<span>" + esc(t(a.dateline)) + "</span>"
      + "</div>"
      + '<div class="art-body">' + body + "</div>"
      + '<div class="end-tomb" aria-hidden="true">■</div>'
      + '<div class="share-row">'
      + '<button type="button" class="share-btn" data-share="' + encodeURIComponent(a.slug) + '" data-mode="card">' + esc(t(UI.share)) + "</button>"
      + '<button type="button" class="share-btn" data-share="' + encodeURIComponent(a.slug) + '" data-mode="full">' + esc(t(UI.shareFull)) + "</button>"
      + "</div>"
      + "</article>"
      + '<div class="art-folio"><span>' + esc(brandText()) + " · " + esc(t(DATA.issue.number)) + "</span><span>" + esc(a.pageNo) + "</span></div>"
      + colophonHtml();

    document.title = t(a.title) + " · " + DATA.brand.latin;
  }

  /* ---------------- 渲染与语言切换 ---------------- */

  function render() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    syncFavicon();
    var ratio = 0;
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable > 0) ratio = window.pageYOffset / scrollable;
    if (page === "article") renderArticle(); else renderHome();
    scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable > 0) window.scrollTo(0, ratio * scrollable);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (!btn) return;
    var next = btn.getAttribute("data-lang-btn");
    if (next !== lang) {
      lang = next;
      try { localStorage.setItem("linyi-lang", lang); } catch (err) { /* 忽略 */ }
      render();
    }
  });

  render();
})();
