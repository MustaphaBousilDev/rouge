"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var category_slider_home = _toConsumableArray(document.querySelectorAll('.category__slider-product-home .content__categories .category-home'));

var next_Btn_category_home = _toConsumableArray(document.querySelectorAll('.category__slider-product-home  .arrow_right-categories-slider-home'));

var prev_Btn_category_home = _toConsumableArray(document.querySelectorAll('.category__slider-product-home  .arrow_left-categories-slider-home'));

console.log(category_slider_home);
category_slider_home.forEach(function (item, i) {
  console.log(item.scrollLeft);
  container_D = item.getBoundingClientRect();
  var container_width = container_D.width / 4;
  next_Btn_category_home[i].addEventListener('click', function () {
    console.log(item.scrollLeft);
    item.scrollLeft += container_width; //console.log(item.scrollLeft)

    if (item.scrollLeft >= 600) {
      item.scrollLeft = 0;
    }
  });
  prev_Btn_category_home[i].addEventListener('click', function () {
    item.scrollLeft -= container_width;
  });
});