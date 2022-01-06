const quotes =[
    {
        quote : "산다는것 그것은 치열한 전투이다.",
        author : "로망로랑"
    },
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author : "사무엘존슨"
    },
    {
        quote : " 언제나 현재에 집중할수 있다면 행복할것이다.",
        author : "파울로 코엘료"
    },
    {
        quote : "피할수 없으면 즐겨라 .",
        author : "로버트 엘리엇"
    },
    {
        quote : "배추는 포기를셀때나 있는 말이다",
        author : "송현범"
    },
    {
        quote : "인도는 몇시?",
        author : "인도네시아"
    },
    {
        quote : "차가 제일 큰 연예인은?",
        author : "버스커버스커"
    },
    {
        quote : "사과가 웃으면?",
        author : "풋사과"
    },
    {
        quote : "산위에서 손녀가 산밑에 할아버지에게 한말은?",
        author : "산타할아버지"
    },
    {
        quote : "행복은 습관이다,그것을 몸에 지니라",
        author : "허버드"
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
