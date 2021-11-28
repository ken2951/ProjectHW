const quotes = [
  {
    quote: "もう一押しこそ慎重になれ",
    author: "武田信玄",
  },
  {
    quote: "我、神仏を尊びて、神仏を頼らず",
    author: "スティーブ・ジョブズ（アップル創業者）",
  },
  {
    quote: "ろくな晩じゃねぇや。寝ちまえ、寝ちまえ。寝て起きりゃ別の日だ",
    author: "宮本武蔵",
  },
  {
    quote: "滅びる原因は、自らの内にある",
    author: "徳川家康",
  },
  {
    quote: "初心忘るるべからず",
    author: "宮本武蔵",
  },
  {
    quote: "生まれを問うな、行為を問え",
    author: "釈迦",
  },
  {
    quote: "必死に生きてこそ、その人生は光を放つ",
    author: "織田信長",
  },
  {
    quote: "人に媚びず、富貴を望まず",
    author: "黒田官兵衛",
  },
  {
    quote: "精神的に向上心のない者は馬鹿だ",
    author: "夏目漱石",
  },
  {
    quote: "夢なき者に成功なし",
    author: "吉田松陰",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
