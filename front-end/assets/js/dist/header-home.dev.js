"use strict";

var offre_header = document.querySelectorAll('.offre p');
var length = offre_header.length;
console.log(length);
var icon_right = document.querySelector('.icon-direction-right');
var icon_left = document.querySelector('.icon-direction-left');
var counter = 0;
icon_right.addEventListener('click', function () {
  offre_header.forEach(function (p) {
    p.classList.remove('active');
  });

  if (counter < length - 1) {
    counter++;
    offre_header[counter].classList.add('active');
  } else {
    counter = 0;
    offre_header[counter].classList.add('active');
  }
});
icon_left.addEventListener('click', function () {
  offre_header.forEach(function (p) {
    p.classList.remove('active');
  });

  if (counter > 0) {
    counter--;
    offre_header[counter].classList.add('active');
  } else {
    counter = length - 1;
    offre_header[counter].classList.add('active');
  }
});
setInterval(function () {
  icon_right.click();
}, 2000);