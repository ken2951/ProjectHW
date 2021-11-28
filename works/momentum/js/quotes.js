const quotes = [
  {
    quote: "人はそれぞれ事情をかかえ、平然と生きている",
    author: "伊集院静（作家）",
  },
  {
    quote: "ベストを尽くして失敗したら、ベストを尽くしたってことさ",
    author: "スティーブ・ジョブズ（アップル創業者）",
  },
  {
    quote: "ろくな晩じゃねぇや。寝ちまえ、寝ちまえ。寝て起きりゃ別の日だ",
    author: "マンガ「百日紅（さるすべり）」（杉浦日向子著）",
  },
  {
    quote: "世の中ってオレより頭のいい人のほうが多いんだ",
    author: "高田純次（タレント）",
  },
  {
    quote: "いつか、必ず、チャンスの順番が来ると信じなさい",
    author: "秋元康（プロデューサー）",
  },
  {
    quote:
      "前向きにもがき苦しむ経験は、すぐに結果に結びつかなくても、必ず自分の生きる力になっていく",
    author: "落合博満（元プロ野球監督）",
  },
  {
    quote: "「ゴールは遠いなぁ」と、がっかりするのも道のりです",
    author: "糸井重里（コピーライター）",
  },
  {
    quote: "「負けたことがある」というのが　いつか　大きな財産になる",
    author: "マンガ「SLAM　DUNK」（井上雄彦著）",
  },
  {
    quote: "反省することは反省する。でも一度寝たら忘れる",
    author: "古田敦也（元プロ野球選手）",
  },
  {
    quote:
      "きみはこれからも何度もつまづく。でもそのたびに立ち直る強さももってるんだよ",
    author: "マンガ「ドラえもん」（藤子・F・不二雄著）",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
