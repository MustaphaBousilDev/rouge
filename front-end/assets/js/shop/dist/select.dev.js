"use strict";

var selected = document.querySelector(".selected");
var optionsContainer = document.querySelector(".options-container");
var optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", function () {
  optionsContainer.classList.toggle("active");
});
optionsList.forEach(function (o) {
  o.addEventListener("click", function () {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});