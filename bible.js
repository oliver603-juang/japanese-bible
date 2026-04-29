/*
 * ═══════════════════════════════════════════════════════════
 *  日文聖經特訓班 — 經文資料庫 (bible.js)
 * ═══════════════════════════════════════════════════════════
 *  每個 unit 包含：
 *    id, book, chapter, verse  — 經文出處
 *    fullSentence              — 完整日文經文
 *    translation               — 繁體中文翻譯
 *    fullTts                   — 整句假名讀音
 *    chunks[]                  — 語句拆解（Phase 1 & 2）
 *    roleplay{}                — 情境開口（Phase 2）
 *    kanjiTask{}               — 漢字手寫（Phase 3）
 *    bonusLearning{}           — 延伸文法學習
 * ═══════════════════════════════════════════════════════════
 */

const BIBLE_DATA = {

// ┌─────────────────────────────────────────────────────────┐
// │  約翰福音 第一章                                         │
// └─────────────────────────────────────────────────────────┘
john_1: {
  title: "約翰福音 第一章",
  subtitle: "太初有道 — 光與生命",
  units: [
  {
    id:"john_1_1", book:"約翰福音", chapter:1, verse:1,
    fullSentence:"初めに言葉があった。", translation:"太初有道。", fullTts:"はじめにことばがあった",
    chunks:[
      {text:"初めに",tts:"はじめに",type:"noun",highlights:[{target:"初めに",cssClass:"color-noun-green",note:"📖 太初、起初。時間的起點。"}]},
      {text:"言葉",tts:"ことば",type:"noun",highlights:[{target:"言葉",cssClass:"color-noun-green",note:"✝️ 道、話語。希臘文 Logos。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[{target:"が",cssClass:"color-particle-red",note:"🔴 主語標記助詞。"}]},
      {text:"あった",tts:"あった",type:"verb",highlights:[{target:"あった",cssClass:"color-verb-blue",note:"🔵 存在（過去式）。「ある」的過去式。"}]}
    ],
    roleplay:{instruction:"請朗讀約翰福音開頭的宣告：「太初有道。」",acceptKeywords:["初めに","言葉","ことば","あった"]},
    kanjiTask:{target:"初",hint:"初",emoji:"🌅",title:"🌅 初（衣＋刀＝第一刀裁衣）",story:"左邊是「衤」(衣)，右邊是「刀」。做衣服的第一刀，就是「初」始。太初有道，萬物的第一刀！"},
    bonusLearning:{
      title:"が vs は：主語的微妙差異",
      content:"<p>📌 <b>が</b> 標記新資訊（第一次出場的主角）</p><p>📌 <b>は</b> 標記已知話題（大家都知道的）</p><p>➡️ 「言葉<b>が</b>あった」＝ 隆重介紹「道」第一次登場</p><p>➡️ 若用「言葉<b>は</b>あった」＝ 像在說「道嘛，本來就在」（語氣太輕）</p><p>🌳 <b>決策樹：</b><br>第一次提到？→ 用 が<br>已經知道的？→ 用 は</p>"
    }
  },
  {
    id:"john_1_1b", book:"約翰福音", chapter:1, verse:"1b",
    fullSentence:"言葉は神と共にあった。", translation:"道與神同在。", fullTts:"ことばはかみとともにあった",
    chunks:[
      {text:"言葉",tts:"ことば",type:"noun",highlights:[{target:"言葉",cssClass:"color-noun-green",note:"✝️ 道。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[{target:"は",cssClass:"color-particle-red",note:"🔴 助詞（唸 wa）。這裡「道」已被介紹過，用 は。"}]},
      {text:"神",tts:"かみ",type:"noun",highlights:[{target:"神",cssClass:"color-noun-green",note:"⛪ 神。"}]},
      {text:"と共に",tts:"とともに",type:"particle",highlights:[{target:"と共に",cssClass:"color-particle-red",note:"🔴 與～一起、同在。"}]},
      {text:"あった",tts:"あった",type:"verb",highlights:[{target:"あった",cssClass:"color-verb-blue",note:"🔵 存在（過去式）。"}]}
    ],
    roleplay:{instruction:"道不是獨自存在的，請宣告：「道與神同在。」",acceptKeywords:["言葉","神","かみ","共に"]},
    kanjiTask:{target:"神",hint:"神",emoji:"⛪",title:"⛪ 神（示＋申＝天降雷電）",story:"左邊「示」是祭壇，右邊「申」是閃電。祭壇上降下雷電，神的力量彰顯！"},
    bonusLearning:{
      title:"と共に（一起）的用法",
      content:"<p>📌 <b>と共に</b> = 與～一起（正式）</p><p>📌 <b>と一緒に</b> = 與～一起（口語）</p><p>➡️ 聖經用「と共に」更莊嚴</p><p>🌳 正式場合 → と共に<br>日常對話 → と一緒に</p>"
    }
  },
  {
    id:"john_1_1c", book:"約翰福音", chapter:1, verse:"1c",
    fullSentence:"言葉は神であった。", translation:"道就是神。", fullTts:"ことばはかみであった",
    chunks:[
      {text:"言葉",tts:"ことば",type:"noun",highlights:[]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"神",tts:"かみ",type:"noun",highlights:[{target:"神",cssClass:"color-noun-green",note:"⛪ 神。"}]},
      {text:"であった",tts:"であった",type:"verb",highlights:[{target:"であった",cssClass:"color-verb-blue",note:"🔵 是（過去式）。「である」的過去式，書面語。"}]}
    ],
    roleplay:{instruction:"這是約翰福音最震撼的宣告，請大聲說：「道就是神！」",acceptKeywords:["言葉","神","であった"]},
    kanjiTask:{target:"言葉",hint:"言葉",emoji:"📜",title:"📜 言葉（話語從口中生出葉子）",story:"「言」是從口說出的話，「葉」是樹葉般展開。話語像葉子一樣展開傳播，這就是道！"},
    bonusLearning:{
      title:"であった vs だった",
      content:"<p>📌 <b>であった</b> = 書面語「是」的過去式（莊嚴）</p><p>📌 <b>だった</b> = 口語「是」的過去式（日常）</p><p>➡️ 聖經、論文、歷史書 → であった</p><p>➡️ 朋友聊天 → だった</p>"
    }
  },
  {
    id:"john_1_3", book:"約翰福音", chapter:1, verse:3,
    fullSentence:"万物は言葉によって成った。", translation:"萬物是藉著祂造的。", fullTts:"ばんぶつはことばによってなった",
    chunks:[
      {text:"万物",tts:"ばんぶつ",type:"noun",highlights:[{target:"万物",cssClass:"color-noun-green",note:"🌍 萬物、一切事物。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"言葉",tts:"ことば",type:"noun",highlights:[]},
      {text:"によって",tts:"によって",type:"particle",highlights:[{target:"によって",cssClass:"color-particle-red",note:"🔴 藉由～、透過～。表示手段。"}]},
      {text:"成った",tts:"なった",type:"verb",highlights:[{target:"成った",cssClass:"color-verb-blue",note:"🔵 形成、造成。「成る」的過去式。"}]}
    ],
    roleplay:{instruction:"宣告神創造的大能：「萬物是藉著祂造的。」",acceptKeywords:["万物","ばんぶつ","言葉","成った"]},
    kanjiTask:{target:"万",hint:"万",emoji:"🌍",title:"🌍 万（一撇蓋千）",story:"「万」就像一把大傘蓋住所有數字。一萬、百萬，一切萬物都在神手中！"},
    bonusLearning:{
      title:"によって（藉由）的三種用法",
      content:"<p>📌 <b>手段：</b>言葉によって成った（藉由話語造成）</p><p>📌 <b>原因：</b>地震によって壊れた（因地震而壞）</p><p>📌 <b>被動施行者：</b>神によって造られた（被神所造）</p>"
    }
  },
  {
    id:"john_1_4", book:"約翰福音", chapter:1, verse:4,
    fullSentence:"言葉の内に命があった。", translation:"生命在祂裡頭。", fullTts:"ことばのうちにいのちがあった",
    chunks:[
      {text:"言葉",tts:"ことば",type:"noun",highlights:[]},
      {text:"の",tts:"の",type:"particle",highlights:[]},
      {text:"内に",tts:"うちに",type:"noun",highlights:[{target:"内に",cssClass:"color-noun-green",note:"📍 裡面、之中。"}]},
      {text:"命",tts:"いのち",type:"noun",highlights:[{target:"命",cssClass:"color-noun-green",note:"💖 生命。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[{target:"が",cssClass:"color-particle-red",note:"🔴 主語標記。「命」是新登場的主角。"}]},
      {text:"あった",tts:"あった",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"道裡面有什麼？請宣告：「生命在祂裡頭。」",acceptKeywords:["命","いのち","内","あった"]},
    kanjiTask:{target:"命",hint:"命",emoji:"💖",title:"💖 命（口中下達令）",story:"上面是「人」，中間是「一」，下面是「叩」。神用口下達命令，生命就誕生了！"},
    bonusLearning:{
      title:"の内に vs の中に",
      content:"<p>📌 <b>の内に</b> = 抽象的「裡面」（精神、本質）</p><p>📌 <b>の中に</b> = 具體的「裡面」（箱子、房間）</p><p>➡️ 生命在道「の内に」→ 抽象的存在</p><p>➡️ 猫が箱「の中に」いる → 具體的位置</p>"
    }
  },
  {
    id:"john_1_4b", book:"約翰福音", chapter:1, verse:"4b",
    fullSentence:"この命は人の光であった。", translation:"這生命就是人的光。", fullTts:"このいのちはひとのひかりであった",
    chunks:[
      {text:"この",tts:"この",type:"noun",highlights:[{target:"この",cssClass:"color-noun-green",note:"👆 這個。"}]},
      {text:"命",tts:"いのち",type:"noun",highlights:[]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"人",tts:"ひと",type:"noun",highlights:[{target:"人",cssClass:"color-noun-green",note:"👤 人。"}]},
      {text:"の",tts:"の",type:"particle",highlights:[]},
      {text:"光",tts:"ひかり",type:"noun",highlights:[{target:"光",cssClass:"color-noun-green",note:"✨ 光。"}]},
      {text:"であった",tts:"であった",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"生命帶來什麼？請宣告：「這生命就是人的光。」",acceptKeywords:["命","光","ひかり","人"]},
    kanjiTask:{target:"光",hint:"光",emoji:"✨",title:"✨ 光（火上有人舉手）",story:"上面是「⺌」(火焰)，下面是「儿」(人)。人舉著火把照亮黑暗，這就是光！"},
    bonusLearning:{
      title:"この / その / あの 的距離感",
      content:"<p>📌 <b>この</b> = 這個（靠近說話者）</p><p>📌 <b>その</b> = 那個（靠近聽者）</p><p>📌 <b>あの</b> = 那個（離兩人都遠）</p><p>➡️ 「この命」= 剛剛提到的、就在眼前的生命</p>"
    }
  },
  {
    id:"john_1_5", book:"約翰福音", chapter:1, verse:5,
    fullSentence:"光は闇の中に輝いている。", translation:"光照在黑暗裡。", fullTts:"ひかりはやみのなかにかがやいている",
    chunks:[
      {text:"光",tts:"ひかり",type:"noun",highlights:[{target:"光",cssClass:"color-noun-green",note:"✨ 光。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"闇",tts:"やみ",type:"noun",highlights:[{target:"闇",cssClass:"color-noun-green",note:"🌑 黑暗。門裡面的暗。"}]},
      {text:"の中に",tts:"のなかに",type:"particle",highlights:[]},
      {text:"輝いている",tts:"かがやいている",type:"verb",highlights:[{target:"輝いている",cssClass:"color-verb-blue",note:"🔵 正在閃耀。「輝く」的持續進行式。"}]}
    ],
    roleplay:{instruction:"這是永恆的應許！請宣告：「光照在黑暗裡。」",acceptKeywords:["光","闇","やみ","輝いて"]},
    kanjiTask:{target:"闇",hint:"闇",emoji:"🌑",title:"🌑 闇（門關上就暗了）",story:"「門」裡面放了「音」。把門關上，聲音消失，一片黑暗。但光會穿透闇！"},
    bonusLearning:{
      title:"～ている（正在～ / 持續～）",
      content:"<p>📌 <b>輝いている</b> = 正在持續閃耀</p><p>📌 動詞て形 ＋ いる = 進行式或持續狀態</p><p>➡️ 雨が降っている = 正在下雨</p><p>➡️ 光は輝いている = 光持續在閃耀（永恆的狀態）</p><p>🌳 一次動作 → 結果持續<br>持續動作 → 正在進行中</p>"
    }
  },
  {
    id:"john_1_5b", book:"約翰福音", chapter:1, verse:"5b",
    fullSentence:"闇は光に勝たなかった。", translation:"黑暗卻不接受光。", fullTts:"やみはひかりにかたなかった",
    chunks:[
      {text:"闇",tts:"やみ",type:"noun",highlights:[{target:"闇",cssClass:"color-noun-green",note:"🌑 黑暗。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"光",tts:"ひかり",type:"noun",highlights:[]},
      {text:"に",tts:"に",type:"particle",highlights:[{target:"に",cssClass:"color-particle-red",note:"🔴 對象助詞。對光～。"}]},
      {text:"勝たなかった",tts:"かたなかった",type:"verb",highlights:[{target:"勝たなかった",cssClass:"color-verb-blue",note:"🔵 沒有勝過。「勝つ」的否定過去式。"}]}
    ],
    roleplay:{instruction:"黑暗永遠無法勝過光！請宣告這個真理。",acceptKeywords:["闇","光","勝た","かたなかった"]},
    kanjiTask:{target:"勝",hint:"勝",emoji:"🏆",title:"🏆 勝（力量用在肉上）",story:"左邊有「月」(肉體)，右邊有「力」。用力量戰勝肉體的軟弱，光勝過闇！"},
    bonusLearning:{
      title:"〜なかった（否定過去式）",
      content:"<p>📌 動詞否定過去式的造法：</p><p>➡️ 勝つ → 勝た<b>ない</b> → 勝た<b>なかった</b></p><p>➡️ 食べる → 食べ<b>ない</b> → 食べ<b>なかった</b></p><p>🌳 現在否定 → ～ない<br>過去否定 → ～なかった</p>"
    }
  },
  {
    id:"john_1_9", book:"約翰福音", chapter:1, verse:9,
    fullSentence:"全ての人を照らすまことの光が来た。", translation:"那真光照亮一切生在世上的人。", fullTts:"すべてのひとをてらすまことのひかりがきた",
    chunks:[
      {text:"全ての",tts:"すべての",type:"noun",highlights:[{target:"全ての",cssClass:"color-noun-green",note:"🌍 全部的、所有的。"}]},
      {text:"人",tts:"ひと",type:"noun",highlights:[]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"照らす",tts:"てらす",type:"verb",highlights:[{target:"照らす",cssClass:"color-verb-blue",note:"🔵 照亮。光照射的動作。"}]},
      {text:"まことの",tts:"まことの",type:"noun",highlights:[{target:"まことの",cssClass:"color-noun-green",note:"✝️ 真實的。「誠」的和語讀法。"}]},
      {text:"光",tts:"ひかり",type:"noun",highlights:[]},
      {text:"が",tts:"が",type:"particle",highlights:[]},
      {text:"来た",tts:"きた",type:"verb",highlights:[{target:"来た",cssClass:"color-verb-blue",note:"🔵 來了。「来る」的過去式。"}]}
    ],
    roleplay:{instruction:"真光來到世上！請宣告：「真光來了，照亮一切的人。」",acceptKeywords:["光","まこと","照らす","来た","すべて"]},
    kanjiTask:{target:"照",hint:"照",emoji:"☀️",title:"☀️ 照（日＋刀＋口＋火）",story:"上面有「日」(太陽)，下面有「灬」(火)。太陽和火同時照耀，這就是最強的「照」亮！"},
    bonusLearning:{
      title:"連體修飾（修飾名詞的動詞）",
      content:"<p>📌 <b>照らす光</b> = 照亮（的）光</p><p>📌 動詞原形可以直接修飾名詞（像形容詞一樣）</p><p>➡️ 食べるパン = 要吃的麵包</p><p>➡️ 読む本 = 要讀的書</p><p>🌳 中文要加「的」，日文不用！動詞原形直接接名詞。</p>"
    }
  },
  {
    id:"john_1_12", book:"約翰福音", chapter:1, verse:12,
    fullSentence:"信じる者には神の子となる力を与えた。", translation:"凡接待祂的，就賜他們權柄作神的兒女。", fullTts:"しんじるものにはかみのことなるちからをあたえた",
    chunks:[
      {text:"信じる",tts:"しんじる",type:"verb",highlights:[{target:"信じる",cssClass:"color-verb-blue",note:"🔵 相信、信靠。"}]},
      {text:"者",tts:"もの",type:"noun",highlights:[{target:"者",cssClass:"color-noun-green",note:"👤 ～的人。"}]},
      {text:"には",tts:"には",type:"particle",highlights:[]},
      {text:"神の子",tts:"かみのこ",type:"noun",highlights:[{target:"神の子",cssClass:"color-noun-green",note:"✝️ 神的兒女。"}]},
      {text:"となる",tts:"となる",type:"verb",highlights:[{target:"となる",cssClass:"color-verb-blue",note:"🔵 成為。"}]},
      {text:"力",tts:"ちから",type:"noun",highlights:[{target:"力",cssClass:"color-noun-green",note:"💪 力量、權柄。"}]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"与えた",tts:"あたえた",type:"verb",highlights:[{target:"与えた",cssClass:"color-verb-blue",note:"🔵 賜予。「与える」的過去式。"}]}
    ],
    roleplay:{instruction:"這是福音的核心應許！請宣告：「信的人得到作神兒女的權柄。」",acceptKeywords:["信じる","しんじる","神の子","力","与えた"]},
    kanjiTask:{target:"信",hint:"信",emoji:"🙏",title:"🙏 信（人＋言＝人的話語）",story:"左邊「亻」是人，右邊「言」是話語。一個人說出的話可以信靠，就是「信」！信靠神的話語。"},
    bonusLearning:{
      title:"～者（～的人）",
      content:"<p>📌 <b>信じる者</b> = 相信的人</p><p>📌 「者」接在動詞後面 = ～的人</p><p>➡️ 学ぶ者 = 學習的人（學者）</p><p>➡️ 働く者 = 工作的人（勞動者）</p><p>➡️ 信じる者 = 相信的人（信徒）</p>"
    }
  }

  ] // end units
}

}; // end BIBLE_DATA
