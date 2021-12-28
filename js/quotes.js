const quotes =[
    {
        quote : "해뜨기전이 가장 어둡다.",
        author : "송현범"
    },
    {
        quote : "우아함이란 거절이다",
        author : "아름다움"
    },
    {
        quote : " 생각은 자유다",
        author : "자유"
    },
    {
        quote : "기술의 진보는 마치 병적인 범죄자의 손에 든 도끼와 같다.",
        author : "과학"
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
        quote : "내일 출근?",
        author : "연차"
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
