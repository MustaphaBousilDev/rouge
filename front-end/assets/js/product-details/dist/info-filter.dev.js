"use strict";

var description = document.querySelector('.review-description-products .description');
var info = document.querySelector('.review-description-products .infos');
var reviews = document.querySelector('.review-description-products .reviews');
var description_content = document.querySelector('.description__product-details');
var info_content = document.querySelector('.info__product-details');
var review_content = document.querySelector('.rating__product-details');
description.addEventListener('click', function () {
  if (description.classList.contains('thisOpacity')) {
    description.classList.remove('thisOpacity');
  }

  if (!info.classList.contains('thisOpacity')) {
    info.classList.add('thisOpacity');
  }

  if (!reviews.classList.contains('thisOpacity')) {
    reviews.classList.add('thisOpacity');
  }

  if (description_content.classList.contains('hiddens')) {
    description_content.classList.remove('hiddens');
  }

  info_content.classList.add('hiddens');
  review_content.classList.add('hiddens');
});
info.addEventListener('click', function () {
  if (info.classList.contains('thisOpacity')) {
    info.classList.remove('thisOpacity');
  }

  if (!description.classList.contains('thisOpacity')) {
    description.classList.add('thisOpacity');
  }

  if (!reviews.classList.contains('thisOpacity')) {
    reviews.classList.add('thisOpacity');
  }

  info_content.classList.remove('hiddens');
  description_content.classList.add('hiddens');
  review_content.classList.add('hiddens');
});
reviews.addEventListener('click', function (e) {
  if (reviews.classList.contains('thisOpacity')) {
    reviews.classList.remove('thisOpacity');
  }

  if (!description.classList.contains('thisOpacity')) {
    description.classList.add('thisOpacity');
  }

  if (!info.classList.contains('thisOpacity')) {
    info.classList.add('thisOpacity');
  }

  if (review_content.classList.contains('hiddens')) {
    review_content.classList.remove('hiddens');
  }

  if (!description_content.classList.contains('hiddens')) {
    description_content.classList.add('hiddens');
  }

  if (!info_content.classList.contains('hiddens')) {
    info_content.classList.add('hiddens');
  }
});