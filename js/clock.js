const clock = document.querySelector("#clock");
const clockDate = document.querySelector("#clockDate")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    //const seconds = String(date.getSeconds()).padStart(2,"0");
    //:${seconds}
    
    clock.innerText = `${hours}:${minutes}`;
}

function getDate(){
    const date = new Date();
    const month = String(date.getMonth());
    const day = String(date.getDate()).padStart(2,"0");

    clockDate.innerText=`${month}월 ${day}일`;
}

getClock();
setInterval(getClock, 1000);

getDate();
setInterval(getDate, 1000);

