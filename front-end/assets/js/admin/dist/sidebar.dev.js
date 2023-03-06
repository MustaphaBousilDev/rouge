"use strict";

var body = document.querySelector('.body__dashboard'),
    sidebar = body.querySelector('.side-bar__dashboard'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search__box-dashboard"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", function () {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", function () {
  sidebar.classList.remove("close");
});
modeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});