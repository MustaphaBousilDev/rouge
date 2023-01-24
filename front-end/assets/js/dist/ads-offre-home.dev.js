"use strict";

function toggle_class_hide() {
  document.querySelectorAll('.content-ads-home-offre').forEach(function (div) {
    div.querySelectorAll('a').forEach(function (a) {
      a.classList.toggle('ads-photo-hide');
    });
  });
}

setInterval(function () {
  toggle_class_hide();
}, 3000);