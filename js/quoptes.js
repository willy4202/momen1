const quotes = [
    {
        quote: "사랑받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.",
        author: "- 벤저민 프랭클린",
    },
    {
        quote: "세상은 고난으로 가득하지만, 고난의 극복으로도 가득하다.",
        author: "- 헬렌 켈러",
    },
    {
        quote: "사람이 할 수 있는 가장 아름다운 것은 용서하는 것이다.",
        author: "- 엘리잘 벤 주다",
    },
    {
        quote: "인간은 스스로의 선택에 의해 자신의 모습을 만들어간다.",
        author: "- 사르트르",
    },
    {
        quote: "두려움에 맞서는 것, 그것이 용기다. 아무것도 두려워하지 않는 것, 그것은 어리석음이다.",
        author: "- 토드 벨메르",
    },
    {
        quote: "경험은 같은 실수를 되풀이할 때 그것을 깨닫게 해주는 놀라운 것이다.",
        author: "- 벤자민 프랭클린",
    },
    {
        quote: "남의 이야기를 하려면 그 사람의 신발을 신고 1주일은 걸어 다녀 보아야 한다.",
        author: "- 인디언의 격언",
    },
    {
        quote: "현명한 사람이 되려거든 사리에 맞게 묻고 조심스럽게 듣고, 침착하게 대답하라. 그리고 더 할 말이 없으면 침묵하기를 배워라.",
        author: "- 라파엘로",
    },
    {
        quote: "적당 주의자가 되지 말라. 그것은 세상에서 가장 위험한 것이다.",
        author: "- 휴그 왈폴",
    },
    {
        quote: "새로운 시간 속에서 새로운 마음을 담아야 한다.",
        author: "- 아우구스티누스",
    },
    {
        quote: "누구나 약속하기는 쉽다. 그러나 그 약속을 이행하기란 쉬운 일이 아니다.",
        author: "- 에머슨",
    },
    {
        quote: "패배보다는 승리 때문에 몰락하는 사람이 더 많다.",
        author: "- 엘리너 루스벨트",
    },
    {
        quote: "바람이 불지 않을 때 바람개비를 돌리는 방법은, 내가 앞으로 달려 나가는 것이다.",
        author: "- 데일 카네기",
    }
];
const quote = document.querySelector("#quote span:first-child");
const authors = document.querySelector("#quote span:last-child");

// Math.random() 이 코드는 0부터 1까지 랜덤한 수를 던져준다.
// Math.random() * 10 이렇게 만들어주면 0부터 10까지의 랜덤한 수를 던져준다.
// Math.round()는 반올림해준다, 괄호 사이에 1.4와 같은 수를 넣으면 1을 주고 1.5를 넣으면 2를 건낸다
// Math.ceil() 은 천장을 뜻하는데, 1.1을 넣으면 2를준다. 즉, 올림이다.
// Math.floor()은 내림을 뜻한다.1.999를 넣어도  1을 준다. 

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
authors.innerText = todaysQuote.author;