const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintingGretting(username) {
  gretting.innerText = `Hello ${username}`;
  gretting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const yourName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, yourName);
  paintingGretting(yourName);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintingGretting(savedUsername);
};