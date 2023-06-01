const email = document.querySelector("#em");
const password = document.querySelector("#pass");
const btn = document.querySelector(".btn");
getmoving = function () {
  if (password.value.length < 8) {
    btn.classList.add("move");
  } else {
    btn.classList.remove("move");
  }
};
password.addEventListener("input", getmoving);
