"use strict";

document.querySelectorAll('.labels-colors').forEach(function (color) {
  color.addEventListener('click', function () {
    document.querySelectorAll('.labels-colors').forEach(function (col) {
      col.classList.remove('active');
    });
    this.classList.add('active');
  });
});