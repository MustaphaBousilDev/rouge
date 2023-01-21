"use strict";

var counters = 0;
var container_slider = document.querySelectorAll('.container-slide');
var btn_right = document.querySelector('.span-icons-slier-right');
var btn_left = document.querySelector('.span-icons-slier-left');
var arr_slide = Array.from(container_slider);
var ul_pagination = document.querySelector('.bullets-pagination'); //create bolluts li 

for (var i = 0; i < arr_slide.length; i++) {
  li_element = document.createElement('li');
  li_element.setAttribute('data-index', i);
  li_element.className = 'w-3 h-3 p-0   mx-1 border border-1 border-color-red-button rounded-full cursor-pointer bullets-pagination-li';
  ul_pagination.append(li_element);
}

ul_pagination.querySelectorAll('li')[0].classList.add('active');
arr_slide[0].classList.add('active');
btn_right.addEventListener('click', function () {
  if (counters < arr_slide.length - 1) {
    counters++;
    arr_slide.forEach(function (item) {
      item.classList.remove('active');
    });
    arr_slide[counters].classList.add('active');
    ul_pagination.querySelectorAll('li').forEach(function (li) {
      li.classList.remove('active');
    });
    ul_pagination.querySelectorAll('li')[counters].classList.add('active'); //console.log(counters)
  } else {
    counters = 0;
    arr_slide.forEach(function (item) {
      item.classList.remove('active');
    });
    arr_slide[counters].classList.add('active');
    ul_pagination.querySelectorAll('li').forEach(function (li) {
      li.classList.remove('active');
    });
    ul_pagination.querySelectorAll('li')[counters].classList.add('active');
    console.log(counters);
  }

  motion_info_slider();
});
btn_left.addEventListener('click', function () {
  if (counters > 0) {
    counters--;
    arr_slide.forEach(function (item) {
      item.classList.remove('active');
    });
    arr_slide[counters].classList.add('active');
    ul_pagination.querySelectorAll('li').forEach(function (li) {
      li.classList.remove('active');
    });
    ul_pagination.querySelectorAll('li')[counters].classList.add('active'); //console.log(counters)
  } else {
    counters = arr_slide.length - 1;
    arr_slide.forEach(function (item) {
      item.classList.remove('active');
    });
    arr_slide[counters].classList.add('active');
    ul_pagination.querySelectorAll('li').forEach(function (li) {
      li.classList.remove('active');
    });
    ul_pagination.querySelectorAll('li')[counters].classList.add('active');
    console.log('ttot');
    console.log(counters);
  }

  motion_info_slider();
});
var li_paginartion = document.querySelectorAll('.bullets-pagination .bullets-pagination-li'); //console.log('yow')
//console.log(li_paginartion)

li_paginartion.forEach(function (li) {
  li.addEventListener('click', function () {
    li_paginartion.forEach(function (item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
    var datas = this.dataset.index; //console.log(datas)

    counters = datas;
    arr_slide.forEach(function (item) {
      item.classList.remove('active');
    });
    arr_slide[counters].classList.add('active');
    motion_info_slider();
  });
});

if (counters == 0) {
  motion_info_slider();
}

function motion_info_slider() {
  arr_slide[counters].querySelector('.paragraph__slide').classList.add('active-emotion');
  arr_slide[counters].querySelector('.paragraph__slide').classList.remove('hidden-motion');
  arr_slide[counters].querySelector('.heading__slide').classList.add('active-emotion');
  arr_slide[counters].querySelector('.heading__slide').classList.remove('hidden-motion');
  arr_slide[counters].querySelector('.span__slide').classList.add('active-emotion');
  arr_slide[counters].querySelector('.span__slide').classList.remove('hidden-motion');
  arr_slide[counters].querySelector('.btn__slide-shop').classList.add('active-emotion');
  arr_slide[counters].querySelector('.btn__slide-shop').classList.remove('hidden-motion');
}