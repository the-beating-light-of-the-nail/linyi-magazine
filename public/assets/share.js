/* 林意 LINYI —— 分享图（纯前端 canvas 排印一张 3:4 卡片，无后端、无依赖）
 * 入口：任意元素加 data-share="<slug>"；卡片复用刊物纸感版式与双语数据。
 * 保存：桌面/普通浏览器可直接下载 PNG；微信内置浏览器用「长按保存」。
 */
(function () {
  "use strict";

  var DATA = window.LINYI;
  if (!DATA) return;

  /* ---------- 常量：与 style.css 同源的纸墨印章色 ---------- */
  var C = {
    paper: "#f4eee0",
    sheet: "#f9f4e7",
    paperDeep: "#ece3cd",
    ink: "#221c12",
    inkSoft: "#5c5341",
    accent: "#9e2b25",
    accentDeep: "#7c1f1a",
    rule: "#c9bea2",
    ruleDark: "#7e7458",
    sealText: "#f7f0dd"
  };
  var W = 1080, H = 1440;          // 3:4，朋友圈 / 小红书通用
  var M = 84;                       // 左右边距
  var CW = W - M * 2;

  var UI = {
    rendering: { zh: "正在排印……", en: "Typesetting\u2026" },
    save: {
      zh: "长按或右键保存图片（微信内请长按）",
      en: "Long-press (or right-click) the image to save"
    },
    download: { zh: "下载 PNG", en: "Download PNG" },
    close: { zh: "关闭", en: "Close" },
    fail: { zh: "生成失败，请重试。", en: "Could not render the card, please try again." },
    cardFor: { zh: "分享图", en: "Share card" }
  };

  function currentLang() {
    try {
      var v = localStorage.getItem("linyi-lang");
      if (v === "en") return "en";
    } catch (e) { /* 隐私模式下默认中文 */ }
    return "zh";
  }
  function t(x) { return typeof x === "string" ? x : (x && x[currentLang()]) || (x && x.zh) || ""; }
  function isZh() { return currentLang() === "zh"; }

  function findArticle(slug) {
    for (var i = 0; i < DATA.articles.length; i++) {
      if (DATA.articles[i].slug === slug) return DATA.articles[i];
    }
    return null;
  }

  /* 分享金句：文章可用 share 字段指定，否则取第一条跨栏引语，再退回导语 */
  function pickQuote(a) {
    if (a.share) return t(a.share);
    for (var i = 0; i < a.blocks.length; i++) {
      if (a.blocks[i].type === "pull") return t(a.blocks[i]);
    }
    return t(a.deck);
  }

  /* ---------- 文本排版工具 ---------- */

  /* 手工字距：逐字绘制并整体居中（不依赖 ctx.letterSpacing 的兼容性） */
  function spacedText(ctx, text, cx, baseline, spacing) {
    var chars = String(text).split("");
    var total = -spacing;
    for (var i = 0; i < chars.length; i++) total += ctx.measureText(chars[i]).width + spacing;
    var x = cx - total / 2;
    var prevAlign = ctx.textAlign;
    ctx.textAlign = "left";
    for (var j = 0; j < chars.length; j++) {
      ctx.fillText(chars[j], x, baseline);
      x += ctx.measureText(chars[j]).width + spacing;
    }
    ctx.textAlign = prevAlign;
    return total;
  }
  function measureSpaced(ctx, text, spacing) {
    var chars = String(text).split("");
    var total = -spacing;
    for (var i = 0; i < chars.length; i++) total += ctx.measureText(chars[i]).width + spacing;
    return total;
  }

  /* 中英混排折行：CJK 逐字可断，拉丁按词断 */
  function wrapText(ctx, text, maxW) {
    var tokens = String(text).match(/[\u2E80-\u9FFF\uF900-\uFAFF\uFF01-\uFF60\u3000-\u303F]|[^\s\u2E80-\u9FFF\uF900-\uFAFF\uFF01-\uFF60\u3000-\u303F]+|\s+/g) || [];
    var lines = [], line = "", word = "";
    function widthOf(s) { return ctx.measureText(s).width; }
    for (var i = 0; i < tokens.length; i++) {
      var tk = tokens[i];
      if (/^\s+$/.test(tk)) { word += tk; continue; }
      if (widthOf(line + word + tk) <= maxW || (line + word) === "") {
        word += tk;
        if (/^[\u2E80-\u9FFF\uF900-\uFAFF\uFF01-\uFF60\u3000-\u303F]$/.test(tk)) {
          line += word; word = "";
        }
      } else {
        lines.push((line + word).trim());
        line = "";
        word = tk;
      }
    }
    if ((line + word).trim()) lines.push((line + word).trim());
    return lines;
  }

  /* ---------- 字体与纸纹 ---------- */

  function loadFonts(sampleText) {
    var jobs = [];
    if (document.fonts && document.fonts.load) {
      var specs = [
        '600 64px "Noto Serif SC"', '400 64px "Noto Serif SC"',
        '600 64px "EB Garamond"', '500 64px "EB Garamond"',
        'italic 500 64px "EB Garamond"', '400 64px "EB Garamond"'
      ];
      specs.forEach(function (spec) {
        jobs.push(document.fonts.load(spec, sampleText).catch(function () { /* 回退字体也要继续画 */ }));
      });
    }
    return Promise.all(jobs);
  }

  function loadNoise() {
    return new Promise(function (resolve) {
      var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>"
        + "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/></filter>"
        + "<rect width='100%' height='100%' filter='url(#n)' opacity='0.14'/></svg>";
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = "data:image/svg+xml," + encodeURIComponent(svg);
    });
  }

  /* ---------- 卡片绘制 ---------- */

  function drawSeal(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x + size / 2, y + size / 2);
    ctx.rotate(2.5 * Math.PI / 180);
    ctx.fillStyle = C.accent;
    var r = 4, s = size;
    ctx.beginPath();
    ctx.moveTo(-s / 2 + r, -s / 2);
    ctx.arcTo(s / 2, -s / 2, s / 2, s / 2, r);
    ctx.arcTo(s / 2, s / 2, -s / 2, s / 2, r);
    ctx.arcTo(-s / 2, s / 2, -s / 2, -s / 2, r);
    ctx.arcTo(-s / 2, -s / 2, s / 2, -s / 2, r);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(247,240,221,.28)";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(-s / 2 + 6, -s / 2 + 6, s - 12, s - 12);
    ctx.fillStyle = C.sealText;
    ctx.textAlign = "center";
    if (isZh()) {
      ctx.font = '600 36px "Noto Serif SC", serif';
      ctx.fillText("\u6797", 0, -8);
      ctx.fillText("\u610F", 0, 40);
    } else {
      ctx.font = '600 23px "EB Garamond", serif';
      ctx.fillText("LIN", 0, -10);
      ctx.fillText("YI", 0, 22);
    }
    ctx.restore();
  }

  function drawCard(a) {
    var zh = isZh();
    var glyph = t(a.coverChar);
    var glyphLatin = /^[\x00-\x7F]+$/.test(glyph);
    var title = t(a.title);
    var kicker = t(a.kicker).toUpperCase();
    var quote = pickQuote(a);
    var eyebrow = (t(DATA.brand.eyebrow) || "").toUpperCase();
    var charCap = zh ? "\u672C\u671F\u4E4B\u5B57" : "Character of the issue".toUpperCase();
    var issueLine = (t(DATA.issue.number) + " \u00b7 " + t(DATA.issue.date)).toUpperCase();
    var domain = DATA.issue.site.toUpperCase();

    var sample = [title, kicker, quote, eyebrow, charCap, issueLine, domain, glyph, "\u6797\u610FLINYI"].join("");
    return loadFonts(sample).then(function () {
      return loadNoise();
    }).then(function (noise) {
      var canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      var ctx = canvas.getContext("2d");

      /* 纸底 + 上下晕染（对应 body 的径向渐变） */
      ctx.fillStyle = C.paper;
      ctx.fillRect(0, 0, W, H);
      var gTop = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, 1400);
      gTop.addColorStop(0, "rgba(255,252,240,.55)");
      gTop.addColorStop(0.55, "rgba(255,252,240,0)");
      ctx.fillStyle = gTop;
      ctx.fillRect(0, 0, W, H);
      var gBot = ctx.createRadialGradient(W / 2, H + 160, 0, W / 2, H + 160, 1100);
      gBot.addColorStop(0, "rgba(120,96,52,.12)");
      gBot.addColorStop(0.6, "rgba(120,96,52,0)");
      ctx.fillStyle = gBot;
      ctx.fillRect(0, 0, W, H);

      /* 报头 eyebrow */
      ctx.fillStyle = C.accent;
      ctx.font = (zh ? '400 22px "Noto Serif SC"' : '500 22px "EB Garamond"') + ", serif";
      spacedText(ctx, eyebrow, W / 2, 96, 12);

      /* 刊名 + 印章（整组居中） */
      var sealSize = 96, gap = 42, brandY = 226;
      ctx.fillStyle = C.ink;
      if (zh) {
        ctx.font = '600 116px "Noto Serif SC", serif';
        var bw = measureSpaced(ctx, "\u6797\u610F", 12);
        var x0 = (W - (bw + gap + sealSize)) / 2;
        spacedText(ctx, "\u6797\u610F", x0 + bw / 2, brandY, 12);
        drawSeal(ctx, x0 + bw + gap, brandY - 92, sealSize);
      } else {
        ctx.font = '500 100px "EB Garamond", serif';
        var bw2 = measureSpaced(ctx, "LINYI", 16);
        var x02 = (W - (bw2 + gap + sealSize)) / 2;
        spacedText(ctx, "LINYI", x02 + bw2 / 2, brandY, 16);
        drawSeal(ctx, x02 + bw2 + gap, brandY - 80, sealSize);
      }

      /* 粗细双线 */
      ctx.fillStyle = C.ink;
      ctx.fillRect(M, 296, CW, 5);
      ctx.fillRect(M, 307, CW, 2);

      /* 封面大字画框（对应 .cover-art：外线 + 纸渐变 + 内线） */
      var fw = 600, fh = 516, fx = (W - fw) / 2, fy = 352;
      ctx.strokeStyle = C.ruleDark;
      ctx.lineWidth = 2;
      ctx.strokeRect(fx, fy, fw, fh);
      var gFrame = ctx.createLinearGradient(fx + 14, fy + 14, fx + fw - 14, fy + fh - 14);
      gFrame.addColorStop(0, C.sheet);
      gFrame.addColorStop(1, C.paperDeep);
      ctx.fillStyle = gFrame;
      ctx.fillRect(fx + 14, fy + 14, fw - 28, fh - 28);
      ctx.strokeStyle = C.rule;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(fx + 14, fy + 14, fw - 28, fh - 28);

      ctx.textAlign = "center";
      if (glyphLatin) {
        ctx.fillStyle = C.ink;
        ctx.font = '500 92px "EB Garamond", serif';
        spacedText(ctx, glyph, W / 2, fy + fh / 2 + 18, 30);
      } else {
        ctx.fillStyle = C.accent;
        ctx.font = '600 350px "Noto Serif SC", serif';
        ctx.fillText(glyph, W / 2, fy + fh / 2 + 128);
      }
      ctx.fillStyle = C.ruleDark;
      ctx.font = (zh ? '400 19px "Noto Serif SC"' : '500 19px "EB Garamond"') + ", serif";
      spacedText(ctx, charCap, W / 2, fy + fh - 36, 10);

      /* 动态区：栏目 + 标题 + 金句（放不下时整体缩字号，保底 72%） */
      var zoneTop = fy + fh + 44, zoneBottom = 1302;
      var layout = null, scale = 1;
      while (scale >= 0.7) {
        layout = computeLayout(scale);
        if (layout.h <= zoneBottom - zoneTop) break;
        scale -= 0.04;
      }
      var y = zoneTop + Math.max(0, (zoneBottom - zoneTop - layout.h) / 2);

      ctx.fillStyle = C.accent;
      ctx.font = (zh ? '600 24px "Noto Serif SC"' : '600 24px "EB Garamond"') + ", serif";
      spacedText(ctx, kicker, W / 2, y + 24, 12);
      y += 24 + layout.gap1;

      ctx.fillStyle = C.ink;
      ctx.font = layout.titleFont;
      ctx.textAlign = "center";
      for (var ti = 0; ti < layout.titleLines.length; ti++) {
        ctx.fillText(layout.titleLines[ti], W / 2, y + layout.titleSize);
        y += layout.titleSize * layout.titleLH;
      }
      y += layout.gap2;

      ctx.fillStyle = C.accentDeep;
      ctx.font = layout.quoteFont;
      var qLines = layout.quoteLines.slice();
      qLines[0] = (zh ? "\u300C" : "\u201C") + qLines[0];
      qLines[qLines.length - 1] = qLines[qLines.length - 1] + (zh ? "\u300D" : "\u201D");
      for (var qi = 0; qi < qLines.length; qi++) {
        ctx.fillText(qLines[qi], W / 2, y + layout.quoteSize);
        y += layout.quoteSize * layout.quoteLH;
      }

      /* 底部：细线 + 域名（无二维码环境里的文字入口）+ 期号 */
      ctx.fillStyle = C.ruleDark;
      ctx.fillRect(M, 1310, CW, 2);
      ctx.fillStyle = C.inkSoft;
      ctx.font = '500 30px "EB Garamond", serif';
      spacedText(ctx, domain, W / 2, 1358, 8);
      ctx.fillStyle = C.ruleDark;
      ctx.font = (zh ? '400 19px "Noto Serif SC"' : '500 19px "EB Garamond"') + ", serif";
      spacedText(ctx, issueLine, W / 2, 1392, 7);

      /* 纸纹噪点（multiply，同 body::before）与裁切框 */
      if (noise) {
        ctx.save();
        ctx.globalCompositeOperation = "multiply";
        ctx.globalAlpha = 0.3;
        for (var nx = 0; nx < W; nx += 300) {
          for (var ny = 0; ny < H; ny += 300) ctx.drawImage(noise, nx, ny);
        }
        ctx.restore();
      }
      ctx.strokeStyle = "rgba(34,28,18,.30)";
      ctx.lineWidth = 2;
      ctx.strokeRect(26, 26, W - 52, H - 52);

      return canvas;

      function computeLayout(s) {
        var titleSize = (zh ? 56 : 52) * s;
        var titleLH = zh ? 1.4 : 1.3;
        var titleFont = (zh ? '600 ' + titleSize + 'px "Noto Serif SC"' : '600 ' + titleSize + 'px "EB Garamond"') + ", serif";
        ctx.font = titleFont;
        var titleLines = wrapText(ctx, title, CW).slice(0, 3);

        var quoteSize = (zh ? 40 : 38) * s;
        var quoteLH = zh ? 1.62 : 1.55;
        var quoteFont = (zh ? '600 ' + quoteSize + 'px "Noto Serif SC"' : 'italic 500 ' + quoteSize + 'px "EB Garamond"') + ", serif";
        ctx.font = quoteFont;
        var quoteLines = wrapText(ctx, quote, CW - 120).slice(0, 4);

        var gap1 = 28 * s, gap2 = 34 * s;
        var h = 24 + gap1
          + titleLines.length * titleSize * titleLH
          + gap2
          + quoteLines.length * quoteSize * quoteLH;
        return {
          h: h, gap1: gap1, gap2: gap2,
          titleLines: titleLines, titleFont: titleFont, titleSize: titleSize, titleLH: titleLH,
          quoteLines: quoteLines, quoteFont: quoteFont, quoteSize: quoteSize, quoteLH: quoteLH
        };
      }
    });
  }

  /* ---------- 弹层 ---------- */

  var overlay = null, blobUrl = null;

  function closeModal() {
    if (overlay) {
      overlay.parentNode.removeChild(overlay);
      overlay = null;
    }
    if (blobUrl) {
      URL.revokeObjectURL(blobUrl);
      blobUrl = null;
    }
  }

  function open(slug) {
    var a = findArticle(slug);
    if (!a) return;
    if (overlay) closeModal();

    overlay = document.createElement("div");
    overlay.className = "share-modal";
    overlay.innerHTML =
      '<button type="button" class="share-x" aria-label="' + t(UI.close) + '">\u00d7</button>'
      + '<p class="share-cap share-wait">' + t(UI.rendering) + "</p>";
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    overlay.querySelector(".share-x").addEventListener("click", closeModal);
    document.body.appendChild(overlay);

    drawCard(a).then(function (canvas) {
      if (!overlay) return;
      canvas.toBlob(function (blob) {
        if (!overlay) return;
        var cap = overlay.querySelector(".share-cap");
        if (!blob) {
          if (cap) cap.textContent = t(UI.fail);
          return;
        }
        blobUrl = URL.createObjectURL(blob);
        var img = document.createElement("img");
        img.src = blobUrl;
        img.alt = t(UI.cardFor) + " \u00b7 " + t(a.title);
        cap.textContent = t(UI.save);
        cap.classList.remove("share-wait");

        var dl = document.createElement("a");
        dl.className = "share-dl";
        dl.textContent = t(UI.download);
        dl.href = blobUrl;
        dl.download = "linyi-" + a.slug + "-" + currentLang() + ".png";
        overlay.insertBefore(img, cap);
        overlay.appendChild(dl);
      }, "image/png");
    }).catch(function () {
      var cap = overlay && overlay.querySelector(".share-cap");
      if (cap) cap.textContent = t(UI.fail);
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-share]");
    if (btn) {
      e.preventDefault();
      open(btn.getAttribute("data-share"));
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay) closeModal();
  });
})();
