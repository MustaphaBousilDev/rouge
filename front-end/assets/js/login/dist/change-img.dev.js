"use strict";

var imgs_login = document.querySelector('.login .content-login .image-login img');
var photos = ['https://static.vecteezy.com/system/resources/previews/007/267/492/original/date-of-delivery-service-courier-and-truck-shipping-with-a-mobile-smartphone-on-blue-background-free-vector.jpg', 'https://4.imimg.com/data4/GX/EF/ANDROID-18345620/product-500x500.jpeg', 'https://co-well.vn/wp-content/uploads/2019/12/why-ecommerce-is-important-with-business.png', 'https://bangladeshpost.net/webroot/uploads/featureimage/2021-11/61814f2d78ae5.jpg'];
var i = 0;
setInterval(function () {
  if (i < photos.length - 1) {
    imgs_login.style.opacity = '1';
    imgs_login.src = photos[i];
    imgs_login.style.transition = '1s';
    i++;
  } else {
    i = 0;
    imgs_login.style.opacity = '1';
    imgs_login.src = photos[i];
    imgs_login.style.transition = '1s';
  }
}, 1000);