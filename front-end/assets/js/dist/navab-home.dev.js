"use strict";

var form_search = document.querySelector('.form-search');
var input_search = form_search.querySelector('input');
input_search.addEventListener('focus', function (e) {
  this.placeholder = "search...";
  form_search.querySelector('i').style.color = "#ef4444";
  this.style.borderColor = "#ef4444";
});
input_search.addEventListener('blur', function (e) {
  this.placeholder = "search";
  form_search.querySelector('i').style.color = "#d4d4d8";
  this.style.borderColor = "#d4d4d8";
}); //function toggle menu language

function cart__Toggle() {
  var toggle__menu = document.querySelector('.cart-menu');
  toggle__menu.classList.toggle('active');
  console.log('fuck bitch ');
}