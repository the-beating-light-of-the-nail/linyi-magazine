# 林意 LINYI

一本想被打印出来的在线杂志。中英双语。

- 线上地址：<https://linyi.cdqyfdbymn.me>
- 刊名：「意林」倒过来，便是「林意」。
- 技术形态：纯静态零构建（无框架、无打包），Cloudflare Workers 静态资源直传。
- 字体：Google Fonts 的 EB Garamond + Noto Serif SC，纸质杂志排版（双栏、首字下沉、跨栏引语、印章红）。

## 目录结构

```
public/
  index.html      封面 + 目录 + 创刊词（data-page="home"）
  article.html    文章阅读页（?slug=xxx，data-page="article"）
  404.html        错页
  content.js      全部内容数据（中英双语，按期组织）
  sitemap.xml     站点地图（新增文章时同步追加一条 <url>）
  robots.txt      指向 sitemap
  assets/
    style.css     纸质杂志样式
    app.js        双语渲染 + 语言切换（中/EN，localStorage 记忆）
    share.js      分享图：canvas 现场排印 3:4 卡片（下载 PNG / 长按保存）
wrangler.jsonc    Workers 配置（自定义域名 linyi.cdqyfdbymn.me）
```

## 新增文章

编辑 `public/content.js`，往 `articles` 数组追加一项：

```js
{
  slug: "my-piece",            // URL 用：article.html?slug=my-piece
  pageNo: "006",               // 目录里的装饰页码
  kicker: { zh: "观察", en: "Observations" },
  coverChar: { zh: "某", en: "WORD" },  // 封面大字（首页封面取第一篇的）
  title: { zh: "标题", en: "Title" },
  deck: { zh: "导语。", en: "Deck." },
  byline: { zh: "文｜作者", en: "By Author" },
  translator: { zh: "译｜《林意》编辑部", en: "Translated by the Linyi editorial desk" },
  dateline: { zh: "写于某地", en: "Written somewhere" },
  blocks: [
    { type: "p", zh: ["逐行文字，", "保留原作断行节奏。"], en: ["Line one", "line two"] },
    { type: "pull", zh: "跨栏引语。", en: "Pull quote." }
  ]
}
```

首页封面取 `articles[0]`，目录自动生成，无需改页面代码。
新文章记得同步在 `public/sitemap.xml` 追加一条 `<url><loc>…article?slug=…</loc></url>`。

## 分享图

文章页结尾有两个按钮，首页封面有单卡按钮；`assets/share.js` 用 canvas 现场排印
1080×1440（3:4）纸感卡片，无后端、无依赖：

- **生成分享图 / Make a share card**：单张金句卡——刊名印章、coverChar 大字、标题、
  一条金句、域名。金句默认取文章第一条 `pull`，可在文章数据里加 `share: { zh, en }` 指定。
- **全文卡片 / Full-text pages**：整篇正文排成多张杂志页——首页题头署名、续页页眉、
  双栏正文（自动分页、孤行控制）、跨栏引语带、页脚页码，适合逐页转发朋友圈。

保存分环境：普通浏览器直接下载 PNG（多页可「下载全部」）；微信内置浏览器提示
长按保存（域名即文字入口，不依赖二维码）。



## 部署

部署与 git 推送解耦（本机 wrangler 已登录 r3fbilgebasaran 账号）：

```bash
wrangler deploy
```

改完 `public/` 下任意文件，直接重新 deploy 即可。

## 约定

- 提交身份：the-beating-light-of-the-nail <2515297405@qq.com>（全局默认）。
- 新文章默认按「期」滚动追加，期号与日期改 `issue` 字段。
- **英文模式（EN）下品牌名一律用拉丁字 LINYI，不出现汉字**（报头、印章、页脚、favicon 都会切换）；「中」仅作为语言切换按钮上对中文选项的原生标注保留。新加内容时 en 字段不要夹带汉字。
