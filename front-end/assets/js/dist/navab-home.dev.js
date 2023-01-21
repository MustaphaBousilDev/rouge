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

var toggle__menu = document.querySelector('.cart-menu');
document.querySelector('.cart__parent').addEventListener('click', function () {
  toggle__menu.classList.toggle('active');
}); //search input version mobile

document.querySelector('.input-search-mobile').addEventListener('focus', function (e) {
  this.placeholder = "";
  this.style.border = "1px solid #fe7676";
  document.querySelector('.icon-search-mobile').style.color = "#fe7676";
});
document.querySelector('.input-search-mobile').addEventListener('blur', function () {
  this.placeholder = "Search for Products";
  this.style.border = "1px solid rgb(213, 212, 212)";
  document.querySelector('.icon-search-mobile').style.color = "rgb(213, 212, 212)";
});
document.querySelector('.departement_mode_phone').addEventListener('click', function () {
  document.querySelector('.list_categories_mode_phono').classList.toggle('active');
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('my-depart')) {
    document.querySelector('.departement-products').classList.toggle('toggle');
  }
});
document.querySelector('.account-link-mobile-li').addEventListener('click', function () {
  //console.debug('gogog')
  document.querySelector('.account-list-mobile').classList.toggle('expanded');
});
document.querySelector('.account-link-version-mobile').addEventListener('click', function () {
  document.querySelector('.child-one-account-version-mobile').classList.toggle('expanded-child');
});
document.querySelector('.vendor-dashboard-link-version-mobile').addEventListener('click', function () {
  document.querySelector('.child-two-account-version-mobile').classList.toggle('expanded-child');
});
document.querySelector('.menu-bar').addEventListener('click', function () {
  document.querySelector('.nav-links-bottom-phono').classList.toggle('show');
});