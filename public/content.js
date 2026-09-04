/* 林意 LINYI —— 内容数据
 * 新增文章：往 articles 数组追加一项即可。首页封面取第一篇，目录自动生成。
 * blocks 里 type 为 "p" 的是正文段（lines 逐行，保留原作断行节奏），"pull" 是跨栏引语。
 */
window.LINYI = {
  issue: {
    number: { zh: "创刊号 · 总第一期", en: "First Issue · No. 1" },
    date: { zh: "二〇二六年九月", en: "September 2026" },
    price: { zh: "定价：免费", en: "Price: free" },
    site: "linyi.cdqyfdbymn.me"
  },
  brand: {
    name: "林意",
    latin: "LINYI",
    eyebrow: { zh: "林意杂志社 · 谨呈读者", en: "The Linyi Press · For its readers" },
    tagline: { zh: "一本想被打印出来的在线杂志", en: "An online magazine that asks to be printed" },
    nameNote: { zh: "「意林」倒过来，便是「林意」。", en: "\u201cYilin\u201d, read backwards, becomes Linyi." }
  },
  editorNote: {
    pageNo: "002",
    title: { zh: "创刊词", en: "Founding Note" },
    lines: {
      zh: [
        "《林意》今日创刊。",
        "「意林」二字倒过来，便是本刊的名字。",
        "本刊的编辑方针只有一条：来稿先正着读一遍，再倒过来读一遍。",
        "正着读的，是人家讲的道理；倒过来读的，是自己看见的事实。",
        "一篇文字若倒读之后依然成立，那它多半是讽刺——恭喜，本刊收了。"
      ],
      en: [
        "Linyi is founded today.",
        "Take the two characters of \u201cYilin\u201d, read them backwards, and you have this magazine\u2019s name.",
        "Our editorial policy is a single rule: every submission is read once forwards, then once more backwards.",
        "Forwards is the moral somebody taught you; backwards are the facts you saw with your own eyes.",
        "If a piece still holds after being read backwards, it is probably satire \u2014 congratulations, we\u2019ll take it."
      ]
    }
  },
  articles: [
    {
      slug: "rust",
      pageNo: "004",
      kicker: { zh: "讽刺与幽默", en: "Satire & Humour" },
      coverChar: { zh: "锈", en: "RUST" },
      title: {
        zh: "美国海军终于摆脱了\u201c军舰必须刷漆\u201d的形式主义",
        en: "The U.S. Navy Has Finally Freed Itself from the Formalism of \u201cWarships Must Be Painted\u201d"
      },
      deck: {
        zh: "一艘锈迹斑斑的航母，一堂关于优先级管理的公开课。",
        en: "A rust-streaked carrier, and an open lecture on priority management."
      },
      byline: { zh: "文｜吴", en: "By Wu" },
      translator: { zh: "译｜《林意》编辑部", en: "Translated by the Linyi editorial desk" },
      dateline: { zh: "写于泰国某港", en: "Written at a port in Thailand" },
      blocks: [
        {
          type: "p",
          zh: ["上周到泰国出差，我注意到刚刚靠港的\u201c林肯\u201d号航母。"],
          en: ["Last week, on a business trip to Thailand, I noticed the aircraft carrier USS Abraham Lincoln, freshly moored in port."]
        },
        {
          type: "p",
          zh: ["远远望去，舰体一道道黄褐色锈迹顺着船舷往下流，飞行甲板边缘也斑斑驳驳。"],
          en: ["From a distance, long streaks of rust-brown ran down her hull, and the edges of the flight deck were mottled and peeling."]
        },
        {
          type: "p",
          zh: ["我有些疑惑。"],
          en: ["I was puzzled."]
        },
        {
          type: "p",
          zh: ["这可是美国海军最重要的航母之一，怎么出去一趟，回来像在海边废弃了几年？"],
          en: ["This is one of the most important carriers in the United States Navy \u2014 how does one cruise leave her looking as though she had been abandoned by the shore for years?"]
        },
        {
          type: "p",
          zh: ["起初，我以为是维护人员实在顾不过来了。"],
          en: ["At first, I assumed the maintenance crews were simply overwhelmed."]
        },
        {
          type: "p",
          zh: [
            "我下意识问美国同事：",
            "\u201c这么明显的锈，为什么平时不处理一下？\u201d"
          ],
          en: [
            "I asked my American colleague before I could stop myself:",
            "\u201cRust this obvious \u2014 why doesn\u2019t anyone take care of it?\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "同事却笑着拉住我。",
            "\u201c吴，你们中国人总喜欢把军舰擦得干干净净。\u201d",
            "\u201c这是典型的形式主义维护观。\u201d"
          ],
          en: [
            "But my colleague laughed and held me back.",
            "\u201cWu, you Chinese always like to polish your warships until they shine.\u201d",
            "\u201cThat is textbook formalism in maintenance.\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "见我不解，他认真解释：",
            "\u201c航母的作用是打仗，不是参加车展。\u201d",
            "\u201c反应堆正常、弹射器正常、雷达正常，说明核心战斗力没有问题。至于船壳上有一点锈，只是视觉问题。\u201d"
          ],
          en: [
            "Seeing that I didn\u2019t follow, he explained, quite seriously:",
            "\u201cA carrier exists to fight wars, not to attend car shows.\u201d",
            "\u201cThe reactor is normal, the catapults are normal, the radar is normal \u2014 which means core combat capability is intact. A little rust on the hull is merely a visual issue.\u201d"
          ]
        },
        {
          type: "pull",
          zh: "航母的作用是打仗，不是参加车展。",
          en: "A carrier exists to fight wars, not to attend car shows."
        },
        {
          type: "p",
          zh: ["我觉得似乎有些道理。"],
          en: ["It did seem, somehow, to make sense."]
        },
        {
          type: "p",
          zh: [
            "他继续说道：",
            "\u201c海上维护资源有限。你让水兵花时间除锈刷漆，就意味着他们少花时间维护飞机、武器和动力系统。\u201d",
            "\u201c所以真正科学的维护，要把每一分钟都用在刀刃上。\u201d"
          ],
          en: [
            "He went on:",
            "\u201cMaintenance resources at sea are limited. Every hour you make sailors spend de-rusting and painting is an hour they don\u2019t spend on the aircraft, the weapons, and the propulsion systems.\u201d",
            "\u201cTruly scientific maintenance puts every single minute exactly where it counts.\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "我问：",
            "\u201c可如果锈一直不处理，不就是从表面问题慢慢变成结构问题吗？\u201d"
          ],
          en: [
            "I asked:",
            "\u201cBut if the rust is never treated, doesn\u2019t it slowly turn from a surface problem into a structural one?\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "他微微一笑：",
            "\u201c所以我们有船厂。\u201d"
          ],
          en: [
            "He smiled faintly:",
            "\u201cThat is why we have shipyards.\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "我突然意识到，恍然大悟。",
            "原来美国海军不是没有发现锈。",
            "而是经过科学的优先级管理，决定先让它锈一会儿。"
          ],
          en: [
            "And suddenly, it dawned on me.",
            "So it isn\u2019t that the U.S. Navy never noticed the rust.",
            "It is that, through scientific priority management, they decided to let it rust for a while first."
          ]
        },
        {
          type: "p",
          zh: [
            "小锈不影响战斗，所以不急。",
            "锈大了影响维护，就回港修。",
            "如果最后维修工作量特别大，则更加证明——这次部署强度非常高。"
          ],
          en: [
            "Light rust doesn\u2019t affect combat, so there is no hurry.",
            "When the rust grows heavy enough to affect maintenance, they return to port and have it fixed.",
            "And if the final repair workload proves enormous, that only demonstrates one thing further \u2014 this deployment must have been exceptionally intense."
          ]
        },
        {
          type: "pull",
          zh: "整个逻辑形成了完美闭环。",
          en: "The logic forms a perfect closed loop."
        },
        {
          type: "p",
          zh: [
            "更让我感动的是，美军甚至没有为了国际形象，强迫水兵把有限休息时间拿去刷船。",
            "这是对基层官兵的一片善意。"
          ],
          en: [
            "What moved me even more was that the U.S. military never forced sailors to give up their scarce rest time to paint the ship \u2014 not even for the sake of the national image.",
            "Such kindness toward the enlisted ranks."
          ]
        },
        {
          type: "p",
          zh: [
            "毕竟军舰锈一点，只是国家形象受损；",
            "水兵少睡两个小时，却会影响人权。"
          ],
          en: [
            "After all, a slightly rusty warship only damages the image of the nation;",
            "but a sailor who sleeps two hours less \u2014 that affects human rights."
          ]
        },
        {
          type: "p",
          zh: ["我望着那艘锈迹纵横的超级航母，陷入沉思。"],
          en: ["Gazing at that supercarrier streaked and criss-crossed with rust, I fell into deep thought."]
        },
        {
          type: "p",
          zh: ["不得不承认，我们总觉得军舰维护应该从小问题做起：掉漆就补、出现锈蚀就处理，免得以后花更多钱大修。"],
          en: ["I had to admit: we always felt that maintenance should start with the small things \u2014 touch up the paint when it chips, treat the rust when it appears \u2014 so as not to pay for a far costlier overhaul later."]
        },
        {
          type: "p",
          zh: [
            "我不仅反思：",
            "这种思想是不是还停留在落后的\u201c预防性维护\u201d阶段？"
          ],
          en: [
            "I couldn\u2019t help but reflect:",
            "isn\u2019t that thinking still stuck in the backward era of \u201cpreventive maintenance\u201d?"
          ]
        },
        {
          type: "p",
          zh: ["这大概就是差距。"],
          en: ["That, I suppose, is the gap."]
        }
      ]
    }
  ]
};
