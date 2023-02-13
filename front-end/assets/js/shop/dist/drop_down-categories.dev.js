"use strict";

function toggle__dropdown(e) {
  var value;
  var heading;
  var myTarget;

  if (e.target.classList.contains('bx-chevron-down')) {
    value = e.target.parentElement.parentElement.parentElement;
    heading = value.querySelector('h2').value;
    value.querySelector('.details').classList.toggle('shows_removing');
    var height = document.querySelector('.details').height;
  }

  console.log(value);
}