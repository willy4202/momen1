const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "toDos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const list = document.createElement("li");
    list.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.id="redButton"
    button.addEventListener("click", deleteToDo)
    list.appendChild(button);
    list.appendChild(span);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj)
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const storageToDos = localStorage.getItem(TODOS_KEY);
if (storageToDos !== null) {
    const parseToDo = JSON.parse(storageToDos);
    toDos = parseToDo;
    parseToDo.forEach(paintToDo);
    //(paintToDo) => parseToDo.forEach;
}

// forEach 코드를 실행할 경우 ,51번과 52번은 동일한 기능을 수행한다
// 다만 첫번째 코드는 따로 함수를 만들어줘야한다
// 두번째는 바로 적용가능해, 더 짧은 코드로 구현할 수 있다.

// 지금까진, 자바를 통해 로컬 스토리지 내에 있는 object, array 정보를 string 으로 변환하고
// 해당 string을 자바내에서 활용 가능한 array로 바꿀 수 있는 기능을 배웠다.
// 그리고 forEach를 통해, 각각의 array에 function을 적용시킬 수 있느 법을 배웠다.

