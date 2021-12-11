/*
const a = 9;
const b = 2;
let myName = "young";

console.log(a + 2);
console.log(a * 2);
console.log(a / 2);
console.log("hello " + myName);

myName = "inn";
console.log("your new name is " + myName);


const amIFat = null;
let something;
console.log(something, amIFat);

const dayofWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// 1126 (금)

console.log(dayofWeek);

const playername = "young";
const playerPoints = 4333;
const playerHandsome = true;
const playerFat = "little bit";

console.log(playername);

const player = {
    Name: "young",
    point: 142,
    playerHandsome: true
}
console.log(player.point);
console.log(player["Name "]);
player.fat = false;
console.log(player.fat);

function hi(nameOfPerson, age) {
    console.log("my name is " + nameOfPerson + "and i am" + age + " years old");
}
hi("young", 24);
hi("lybn", 32);
hi("park", 21);

const ab = {
    myname: "zea",
    age: 24,
};
console.log(ab);
ab.maybe = "soon";
console.log(ab);

const calcul = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b
    },
    power: function (a, b) {
        return a ** b;
    },
};

const addresult = calcul.add(2, 4);
const minusresult = calcul.minus(addresult, 8);
const divideresult = calcul.divide(minusresult, 2);
const powerresult = calcul.power(divideresult, minusresult);

console.log(powerresult);

//if조건문활용

const age = parseInt(prompt("how old are you"));
console.log(age);

if (isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if (age < 18) {
    console.log("you are too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you need to exercise");
} else if (age === 100) {
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("you can do whatever you want");
}

// and && 와 or ||의 차이 
// &&는 양쪽 값이 모두 true 일 경우에만 실행된다
// ||는 한쪽이라도 true라면 실행
// 자바스크립트는 작은 괄호부터 액션이 시작된다.

/* 
const h1 = document.querySelector(".his:first-child h1");

function handleTitleClick() {
    h1.style.color = "red";
}
function handleMouseEnter() {
    h1.innerText = "mouse is here"
}
function handleMouseLeave() {
    h1.innerText = "mouse is out"
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
===
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", hadleresize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleWindowOff);
window.addEventListener("online", handleWindowOn);

function hadleresize() {
    document.body.style.backgroundColor = "powderblue";
};
function handleCopy(){
    alert("don't copy")
};
function handleWindowOff(){
    alert("need to connect")
};
function handleWindowOn(){
    alert("we are safe now")
};

// 윈도우는 창이 변할때 나타나는 변화다.
// addEventListner의 영향을 받아 function을 실행하게 된다.

const h1 = document.querySelector(".his:first-child h1");

function hadleClick(){
    const currentColor = h1.style.color
    let newColor;
    if(currentColor === "powderblue"){
        newColor = "red";
    }else{
        newColor = "powderblue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", hadleClick);

이 과정에서 가장 중요한 점은 아래와 같다.

먼저 element의 값을 구해라
const h1 = document.querySelector(".his:first-child h1");

이후, Element를 listen해라
그 다음 listen에 반응해라
*/

/*
const h1 = document.querySelector(".his:first-child h1");

function hadleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", hadleClick);
*/ 
// 아래는 토글을 이용해, 굳이 5줄의 코드 없이도 같은 기능을 구현할 수 있게된다.
// 토글은 classlist를 확인해서, 없다면 추가하고, 있으면 지정한 클래스를 없애주는 역할을 한다.
// 반복 string을 사용할 필요가 없으니, 굳이 const를 지정할 필요 없이 바로 만들 수 있게 된다.

const h1 = document.querySelector(".his:first-child h1");

function hadleClick() {
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", hadleClick);