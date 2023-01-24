"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var slider_product_offre_home = _toConsumableArray(document.querySelectorAll('.products__offre-home .offre__body-home'));

var next_Btn_offre_home = _toConsumableArray(document.querySelectorAll('.products__offre-home  .right-icon-offre-product-home'));

var prev_Btn_offre_home = _toConsumableArray(document.querySelectorAll('.products__offre-home  .left-icon-offre-product-home'));

slider_product_offre_home.forEach(function (item, i) {
  console.log('fuck btich');
  console.log(item.scrollLeft);
  container_offre = item.getBoundingClientRect();
  var container_width_offre = container_offre.width / 4;
  next_Btn_offre_home[i].addEventListener('click', function () {
    console.log(item.scrollLeft);
    item.scrollLeft += container_width_offre; //console.log(item.scrollLeft)
  });
  prev_Btn_offre_home[i].addEventListener('click', function () {
    item.scrollLeft -= container_width_offre;
  });
});