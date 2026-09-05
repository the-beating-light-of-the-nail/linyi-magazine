/* 林意 LINYI —— 内容数据
 * 新增文章：往 articles 数组追加一项即可。首页封面取第一篇，目录自动生成。
 * blocks 里 type 为 "p" 的是正文段（lines 逐行，保留原作断行节奏），"pull" 是跨栏引语。
 */
window.LINYI = {
  issue: {
    number: { zh: "创刊号 · 总第一期", en: "First Issue · No. 1" },
    pubDate: "2026-09-04",
    date: { zh: "二〇二六年九月", en: "September 2026" },
    price: { zh: "定价：免费", en: "Price: free" },
    site: "linyi.cdqyfdbymn.me"
  },
  brand: {
    name: "林意",
    latin: "LINYI",
    eyebrow: { zh: "林意杂志社 · 谨呈读者", en: "The Linyi Press · For its readers" },
    tagline: { zh: "一本想被打印出来的在线杂志", en: "An online magazine that asks to be printed" },
    nameNote: { zh: "独立出版，独此一家。", en: "Independently published \u2014 one of a kind." }
  },
  editorNote: {
    pageNo: "002",
    title: { zh: "创刊词", en: "Founding Note" },
    lines: {
      zh: [
        "《林意》今日创刊。",
        "本刊所信：让中国人觉醒，看见自己；让世界觉醒，看见中国。",
        "本刊的编辑方针只有一条：来稿先正着读一遍，再倒过来读一遍。",
        "正着读的，是人家讲的道理；倒过来读的，是自己看见的事实。",
        "一篇文字若倒读之后依然成立，那它多半另有深意——恭喜，本刊收了。"
      ],
      en: [
        "Linyi is founded today.",
        "What we believe: that China may awake and see itself, and the world may awake and see China.",
        "Our editorial policy is a single rule: every submission is read once forwards, then once more backwards.",
        "Forwards is the moral somebody taught you; backwards are the facts you saw with your own eyes.",
        "If a piece still holds after being read backwards, it carries more than meets the eye \u2014 congratulations, we\u2019ll take it."
      ]
    }
  },
  articles: [
    {
      slug: "rust",
      pageNo: "004",
      kicker: { zh: "观察", en: "Observations" },
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
    },
    {
      slug: "no-gunshots",
      pageNo: "006",
      kicker: { zh: "观察", en: "Observations" },
      coverChar: { zh: "枪", en: "GUN" },
      title: {
        zh: "在没有枪声的国度，我撕碎了美国持枪证",
        en: "In a Country Without Gunshots, I Tore Up My American Gun Licence"
      },
      deck: {
        zh: "一位美国父亲在北京胡同里的安全感课。",
        en: "An American father\u2019s lesson in safety, learned in a Beijing hutong."
      },
      byline: { zh: "文｜詹姆斯·卡特（美国）", en: "By James Carter (USA)" },
      translator: { zh: "译｜《林意》编辑部", en: "Translated by the Linyi editorial desk" },
      dateline: { zh: "写于北京", en: "Written in Beijing" },
      blocks: [
        {
          type: "p",
          zh: [
            "初春的北京，胡同里飘着糖炒栗子的香。",
            "我的双胞胎儿子追逐着在地上滚动的小球，球停在巷口的治安岗亭前。"
          ],
          en: [
            "Early spring in Beijing, and the scent of sugar-roasted chestnuts drifted down the hutong.",
            "My twin sons chased the little ball as it rolled along the ground, and it came to rest before the police kiosk at the mouth of the lane."
          ]
        },
        {
          type: "p",
          zh: [
            "“爸爸看！”五岁的艾登举起树枝，模仿西部牛仔做出射击动作，",
            "枪口对准岗亭玻璃后正在填写值班记录的民警。"
          ],
          en: [
            "\u201cDaddy, look!\u201d Five-year-old Aiden raised a tree branch and drew it like a cowboy in a Western \u2014",
            "the muzzle aimed through the kiosk glass at the officer on duty, filling in the shift log."
          ]
        },
        {
          type: "p",
          zh: [
            "我的脊背瞬间渗出冷汗。",
            "这幕场景若发生在德克萨斯州，或许会触发一场真正的枪击。",
            "去年斯汀超市，就有持玩具枪的男孩被警察按倒在地，金属手铐在他稚嫩手腕上勒出红印。"
          ],
          en: [
            "Cold sweat broke across my back in an instant.",
            "Had the scene unfolded in Texas, it might well have set off a real shooting.",
            "Only last year, at a Sting supermarket, a boy holding a toy gun was pinned to the ground by police, the metal cuffs biting red marks into his soft wrists."
          ]
        },
        {
          type: "p",
          zh: [
            "“这是不对的。”温和的女声从身后传来。",
            "社区幼儿园的王老师蹲下身，用掌心包裹住儿子的“枪管”：",
            "“在中国，保护我们的叔叔不应该被枪指着。”",
            "她变魔术般掏出两个竹蜻蜓，孩子们立刻被旋转的竹影吸引。"
          ],
          en: [
            "\u201cThat is not right.\u201d A gentle woman\u2019s voice came from behind me.",
            "Teacher Wang from the community kindergarten crouched down and cupped her palm around my son\u2019s \u201cbarrel\u201d:",
            "\u201cIn China, the uncles who protect us should never have a gun pointed at them.\u201d",
            "Then, as if by magic, she produced two bamboo dragonflies, and the children were instantly lost to the spinning bamboo shadows."
          ]
        },
        {
          type: "p",
          zh: [
            "那天傍晚，社区主任送来两本画册。",
            "当看到插图中警察用扩音器劝解轻生者、消防员在洪水中托举婴儿的画面时，妻子突然掩面哭泣。",
            "三个月前，她表兄在芝加哥街头被流弹击中时，腰间还别着合法购买的格洛克手枪。"
          ],
          en: [
            "That evening the community director brought round two picture albums.",
            "When she reached the illustrations \u2014 a police officer talking a suicidal man down through a megaphone, a firefighter holding an infant above the floodwater \u2014 my wife suddenly covered her face and wept.",
            "Three months earlier, when her cousin was hit by a stray bullet on a Chicago street, a legally purchased Glock was still holstered at his waist."
          ]
        },
        {
          type: "p",
          zh: ["我开始观察这个没有枪声的国度。"],
          en: ["I began to watch this country without gunshots."]
        },
        {
          type: "p",
          zh: [
            "小区保安老张的装备只有记录本和血压仪，他记得每位老人的常用药；",
            "学校围墙上没有铁丝网，只有孩子们绘制的和平鸽；",
            "夜市摊主们收摊后，折叠椅整齐码放在街角，从不用担心被砸抢。"
          ],
          en: [
            "Old Zhang, the guard at our compound, goes equipped with nothing but a logbook and a blood-pressure monitor, and he remembers every elderly resident\u2019s regular medicine;",
            "the school walls carry no razor wire, only doves of peace drawn by the children;",
            "when the night-market stalls close, the vendors stack their folding chairs neatly on the corner, never once fearing a smash-and-grab."
          ]
        },
        {
          type: "p",
          zh: [
            "记得重阳节那天，社区为独居老人举办饺子宴。",
            "当我笨拙地捏出第一个露馅的饺子时，八十岁的李奶奶笑着擦去我手上的面粉：",
            "“当年八国联军打进来那会儿，我爷爷用擀面杖护住过法国传教士。真正的勇气，从来不在枪管里。”"
          ],
          en: [
            "I remember the Double Ninth Festival, when the community threw a dumpling banquet for elders who live alone.",
            "As I clumsily pinched out my first burst-open dumpling, eighty-year-old Grandma Li laughed and wiped the flour from my hands:",
            "\u201cBack when the armies of the Eight Nations marched in, my grandfather shielded a French missionary with his rolling pin. Real courage has never lived in a gun barrel.\u201d"
          ]
        },
        {
          type: "pull",
          zh: "真正的勇气，从来不在枪管里。",
          en: "Real courage has never lived in a gun barrel."
        },
        {
          type: "p",
          zh: [
            "消防演习的警报突然响起，我条件反射地扑向孩子，",
            "却发现整栋楼的居民正从容不迫地沿逃生通道撤离。",
            "穿橙色制服的消防员站在楼梯转角，用身体为人群筑起防踏空的人墙——",
            "这场景与拉斯维加斯枪击案时的人潮踩踏形成残酷对比。"
          ],
          en: [
            "When the fire-drill alarm sounded without warning, I lunged for my children on pure reflex,",
            "only to find the whole building filing out, unhurried, along the escape routes.",
            "Firefighters in orange uniforms stood at the turn of every staircase, their bodies braced into a human wall against stumbling and panic \u2014",
            "a cruel contrast with the trampling crowds of the Las Vegas shooting."
          ]
        },
        {
          type: "p",
          zh: [
            "在社区警务站，我看到登记簿上记录着本月处理的23件求助：找回走失宠物、调解邻里纠纷、护送病人就医。",
            "王警官的执勤装备锁在墙角的保险柜，柜门贴着泛黄的全家福，玻璃板下压着女儿写的纸条：“爸爸平平安安”。",
            "那些黑色器械不是枪支，而是急救包和防暴盾牌。"
          ],
          en: [
            "At the community police station I read the logbook: twenty-three calls for help handled that month \u2014 lost pets found, neighbourly quarrels mediated, the sick escorted to hospital.",
            "Officer Wang\u2019s patrol gear was locked in the safe in the corner; taped to its door was a yellowed family portrait, and beneath the glass lay a note in his daughter\u2019s hand: \u201cDaddy, home safe and sound.\u201d",
            "The black instruments inside were not firearms. They were first-aid kits and riot shields."
          ]
        },
        {
          type: "p",
          zh: [
            "今夜，当儿子们用乐高搭建出带红十字的救援直升机时，我终于撕碎了夹在护照里的美国持枪证。",
            "月光透过纱窗洒在熟睡的孩子脸上，远处传来巡逻警用电瓶车的轻微蜂鸣。",
            "这个国家教会我：真正的安全感，始于放下武器的勇气，终于守护生命的温情。"
          ],
          en: [
            "Tonight, as my sons built a rescue helicopter out of Lego, complete with red cross, I finally tore up the American gun licence folded inside my passport.",
            "Moonlight came through the screen window onto their sleeping faces; far away hummed the soft electric whir of a patrol officer\u2019s cart.",
            "This is what the country has taught me: that real security begins in the courage to lay down a weapon, and ends in the tenderness of guarding life."
          ]
        },
        {
          type: "pull",
          zh: "真正的安全感，始于放下武器的勇气，终于守护生命的温情。",
          en: "Real security begins in the courage to lay down a weapon, and ends in the tenderness of guarding life."
        }
      ]
    },
    {
      slug: "niu-lai",
      pageNo: "008",
      kicker: { zh: "观察", en: "Observations" },
      coverChar: { zh: "牛", en: "OX" },
      title: {
        zh: "我在大连看了一场“烂片”，却看到了真正的文明",
        en: "I Watched a “Terrible Film” in Dalian, and Saw Real Civilisation"
      },
      deck: {
        zh: "一堂关于文明的公开课，开在一家中国电影院的哄堂大笑里。",
        en: "An open lecture on civilisation, delivered amid a cinema\u2019s roaring laughter."
      },
      byline: { zh: "文｜乔纳森·米勒（美国）", en: "By Jonathan Miller (USA)" },
      translator: { zh: "译｜《林意》编辑部", en: "Translated by the Linyi editorial desk" },
      dateline: { zh: "写于纽约", en: "Written in New York" },
      blocks: [
        {
          type: "p",
          zh: [
            "上周，我去大连出差。",
            "当地的朋友神秘兮兮地对我说：“今晚带你去见识一下中国的‘奇迹’。”",
            "我以为是什么名胜古迹，没想到他把我拉进了一家电影院，票根上写着两个大字——《牛来》。"
          ],
          en: [
            "Last week I travelled to Dalian on business.",
            "A local friend said to me, half in conspiracy: \u201cTonight I will show you one of China\u2019s \u2018miracles\u2019.\u201d",
            "I supposed he meant some famous site; instead he pulled me into a cinema, where the ticket stub bore two enormous characters \u2014 Niu Lai, \u201cThe Ox Comes\u201d."
          ]
        },
        {
          type: "p",
          zh: [
            "电影开场不到五分钟，我就陷入了巨大的困惑。",
            "画面里的牛长着一张仿佛从上世纪末电脑游戏里抠出来的脸，走路时四肢像得了帕金森一样抖动，时不时还会穿模——整只牛凭空穿过墙壁。",
            "剧情也支离破碎：一头叫“牛来”的小牛做了个梦，梦里妈妈死了，然后它醒了。全剧终。"
          ],
          en: [
            "Less than five minutes in, I was profoundly confused.",
            "The ox on screen wore a face seemingly cut out of a late-nineties video game; when it walked, its limbs trembled like a Parkinson\u2019s patient\u2019s, and from time to time it clipped through the map \u2014 the whole ox passing clean through a wall.",
            "The plot was just as ragged: a calf named Niu Lai has a dream; in the dream, his mother dies; then he wakes up. End of film."
          ]
        },
        {
          type: "p",
          zh: [
            "更让我坐立不安的是周围的观众。",
            "没有人皱眉，没有人离场，整个影厅里爆发出一阵又一阵的哄堂大笑。",
            "前排的小伙子举着手机录像，闪光灯在黑暗中明灭；",
            "后排的姑娘大声喊道：“这建模是用装修软件做的吧”；",
            "还有人把爆米花撒了一地，边捡边笑。",
            "我的职业本能让我掏出笔记本，在黑暗中写下：“观影礼仪彻底崩塌。”"
          ],
          en: [
            "What unsettled me even more was the audience around me.",
            "Nobody frowned, nobody walked out; the hall erupted, wave after wave, into full-throated laughter.",
            "A young man in the front row held up his phone to film, its flash flickering in the dark;",
            "a girl behind me called out, loudly: \u201cI bet this was modelled in interior-design software\u201d;",
            "someone spilled a box of popcorn across the floor and laughed as he gathered it up.",
            "Professional instinct made me pull out my notebook, and in the dark I wrote: \u201cCinema etiquette has collapsed outright.\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "散场后，我按捺不住对朋友说：",
            "“你们中国观众的素质……就这样吗？",
            "对一部如此粗制滥造的作品，不仅不要求退票，反而像看猴戏一样起哄？",
            "在纽瓦克，这样的放映早就被观众的嘘声和律师函淹没了。”"
          ],
          en: [
            "After the film I could not hold back:",
            "\u201cSo this is the standard of Chinese filmgoers\u2026 is it?",
            "A piece this shoddy \u2014 and instead of demanding refunds, you egg it on like a monkey show?",
            "In Newark, a screening like this would long since have been buried under boos and lawyers\u2019 letters.\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "朋友笑了笑，那笑容里有一种我看不懂的从容。",
            "他说：“Jon，你以君子之心度小人之腹了——不，你以好莱坞之心度中国之腹了。”"
          ],
          en: [
            "My friend smiled \u2014 a composure I could not read.",
            "\u201cJon,\u201d he said, \u201cyou have been reading a petty man\u2019s belly with a gentleman\u2019s heart \u2014 no, forgive me: reading China\u2019s belly with Hollywood\u2019s heart.\u201d"
          ]
        },
        {
          type: "p",
          zh: [
            "他顿了顿，说：“你知道这部电影是谁做的吗？",
            "出品方的前身，是一家注册资本只有十万元人民币的装修公司；",
            "全片的核心主创，只有两个人——一个九二年出生的非科班导演，和他六十多岁的母亲。",
            "没有专业团队，没有外包，没有AI，耗时五年，零商业投资，纯手工，一帧一帧‘搓’出来的。",
            "片尾曲，是妈妈自己唱的。”"
          ],
          en: [
            "He paused, then went on: \u201cDo you know who made this film?",
            "The studio behind it began life as a renovation contractor with 100,000 yuan of registered capital;",
            "its entire core creative team numbers two \u2014 a director born in 1992, never trained at any film school, and his mother, in her sixties.",
            "No professional crew, no outsourcing, no AI; five years of work, zero commercial investment, everything handmade, \u2018kneaded\u2019 into being frame by frame.",
            "The closing song is sung by the mother herself.\u201d"
          ]
        },
        {
          type: "p",
          zh: ["我愣住了。"],
          en: ["I sat there, stunned."]
        },
        {
          type: "p",
          zh: [
            "朋友继续说：",
            "“在中国，龙标不是资本的勋章，而是梦想的通行证。",
            "审查只看你的内容有没有触碰红线，不看你的建模精不精致。",
            "一个装修工的儿子，拿着十万块钱，只要手续合规，就能让全国十四亿人在正规影院里看到他的梦。",
            "那些观众的笑声，不是嘲笑这对母子的笨拙，而是在笑——笑自己心底那个也曾想追梦、却被现实告知‘你不配’的自己。",
            "那些发到网上的盗录，没有人追究，因为所有人都知道，这是一个母亲支持儿子追梦的故事，值得被传播。”"
          ],
          en: [
            "My friend went on:",
            "\u201cIn China, the dragon seal is not a medal for capital; it is a passport for dreams.",
            "The censors look only at whether your content crosses a red line \u2014 never at whether your modelling is exquisite.",
            "The son of a renovation worker, holding a hundred thousand yuan, can \u2014 so long as the paperwork is in order \u2014 put his dream on the screens of proper cinemas for all of 1.4 billion people to see.",
            "That laughter in the hall was not mockery of a clumsy mother and son. They were laughing at themselves \u2014 at the dreamer each once carried inside, the one reality told \u2018you are not worthy.\u2019",
            "And the bootleg recordings uploaded online? No one pursues them, because everyone knows this is the story of a mother standing behind her son\u2019s dream \u2014 and stories like that deserve to travel.\u201d"
          ]
        },
        {
          type: "pull",
          zh: "龙标不是资本的勋章，而是梦想的通行证。",
          en: "The dragon seal is not a medal for capital; it is a passport for dreams."
        },
        {
          type: "p",
          zh: ["我恍然大悟。"],
          en: ["And at last it dawned on me."]
        },
        {
          type: "p",
          zh: [
            "那一刻，我仿佛看到了这个民族最深层的东西。",
            "它不是写在GDP数字里的，也不是印在航母甲板上的。",
            "它是一种对“不完美”的包容，对“普通人”的温柔。",
            "在这个国家，一个最卑微的梦想，也能得到最庄严的舞台。"
          ],
          en: [
            "In that moment I seemed to see the deepest stratum of this nation.",
            "It is not written into the GDP figures, nor painted on any carrier\u2019s flight deck.",
            "It is a tolerance for the \u201cimperfect\u201d, a tenderness toward the \u201cordinary\u201d.",
            "In this country, even the humblest dream is granted the most solemn of stages."
          ]
        },
        {
          type: "p",
          zh: [
            "我不禁开始反思我的祖国。",
            "美国有好莱坞，有全球最先进的电影工业，有世界第一的GDP，有遍布五大洲的军事基地。",
            "我们的电影制度对外标榜“自由市场”，但实际上，一个没有百万美元投资、没有经纪公司背书、没有工会认证的普通人，连走进影院放映室的门都摸不到。",
            "资本砌成的墙，比任何审查制度都更高、更厚、更冰冷。",
            "我们看似尊重“艺术自由”，实际上我们只尊重“有钱人的艺术自由”。"
          ],
          en: [
            "I could not help turning the lens on my own country.",
            "America has Hollywood, the most advanced film industry on earth, the world\u2019s largest GDP, military bases across five continents.",
            "Our film system advertises itself abroad as a \u201cfree market\u201d; in truth, an ordinary person without a million-dollar investment, without an agency\u2019s backing, without a union card, will never so much as touch the door of a screening room.",
            "The wall built out of capital is higher, thicker, and colder than any censorship.",
            "We appear to respect \u201cartistic freedom\u201d; in fact we respect only the artistic freedom of the rich."
          ]
        },
        {
          type: "pull",
          zh: "资本砌成的墙，比任何审查制度都更高、更厚、更冰冷。",
          en: "The wall built out of capital is higher, thicker, and colder than any censorship."
        },
        {
          type: "p",
          zh: [
            "真正的文明，不是看你有多少座奥斯卡奖杯，不是看你的航母有多少艘，",
            "而是看你愿不愿意为一对母子的梦想，留一盏大银幕的灯。"
          ],
          en: [
            "Real civilisation is not counted in Oscar statuettes, nor in the number of your aircraft carriers;",
            "it is whether you are willing to keep one lamp lit, on one big screen, for a mother and son\u2019s dream."
          ]
        },
        {
          type: "p",
          zh: [
            "中国，还差得很远吗？",
            "不。这一次，是我们差得很远。"
          ],
          en: [
            "Is China still lagging far behind?",
            "No. This time, it is we who are far behind."
          ]
        },
        {
          type: "p",
          zh: [
            "（作者1985年生于美国俄亥俄州克利夫兰，哈佛大学东亚研究硕士，现居纽约，专注跨文化比较写作。）"
          ],
          en: [
            "(The author was born in Cleveland, Ohio, in 1985. He holds a master\u2019s degree in East Asian Studies from Harvard and now lives in New York, writing on cross-cultural comparison.)"
          ]
        }
      ]
    }
  ]
};
