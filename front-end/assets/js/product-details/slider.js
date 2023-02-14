let right_icon_details=document.querySelector('.product__details-page .products__details .product__principalte-details .right-icon__product-details')
let left_icon_details=document.querySelector('.product__details-page .products__details .product__principalte-details .left-icon__product-details')
let img_principal_details=document.querySelector('.product__details-page .products__details .product__principalte-details img')
console.log(img_principal_details)
let imgs_all_details=document.querySelectorAll('.product__details-page .products__details .products__secondaires-details .product__secondary-detail img')
console.log(imgs_all_details)
console.log('fuck')
let counter_product_details=0;
imgs_all_details[counter_product_details].classList.add('active')

right_icon_details.addEventListener('click',function(){
    imgs_all_details.forEach((img)=>{
        img.classList.remove('active')
    })
    
    if(counter_product_details <imgs_all_details.length - 1){
        counter_product_details++
        imgs_all_details[counter_product_details].classList.add('active')
        img_principal_details.src=imgs_all_details[counter_product_details].src
    }else{
        counter_product_details=0
        imgs_all_details[counter_product_details].classList.add('active')
        img_principal_details.src=imgs_all_details[counter_product_details].src
    }
})



left_icon_details.addEventListener('click',function(){
    imgs_all_details.forEach((img)=>{
        img.classList.remove('active')
    })
    
    if(counter_product_details >0){
        counter_product_details--
        imgs_all_details[counter_product_details].classList.add('active')
        img_principal_details.src=imgs_all_details[counter_product_details].src
    }else{
        counter_product_details=imgs_all_details.length - 1
        imgs_all_details[counter_product_details].classList.add('active')
        img_principal_details.src=imgs_all_details[counter_product_details].src
    }
})