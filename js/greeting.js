const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector("#greeting");
const logOutForm = document.querySelector("#logOut");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintingGretting(username) {
  gretting.innerText = `Hello ${username}`;
  gretting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogOutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logOutForm.classList.add(HIDDEN_CLASSNAME);
  gretting.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const yourName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, yourName);
  paintingGretting(yourName);
  logOutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  logOutForm.classList.add(HIDDEN_CLASSNAME);
} else {
  paintingGretting(savedUsername);
  logOutForm.classList.remove(HIDDEN_CLASSNAME);
};

logOutForm.addEventListener("click", onLogOutSubmit);

