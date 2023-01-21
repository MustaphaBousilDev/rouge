let category_slider_home=[...document.querySelectorAll('.category__slider-product-home .content__categories .category-home')]
const next_Btn_category_home=[...document.querySelectorAll('.category__slider-product-home  .arrow_right-categories-slider-home')]
const prev_Btn_category_home=[...document.querySelectorAll('.category__slider-product-home  .arrow_left-categories-slider-home')]
console.log(category_slider_home)

category_slider_home.forEach((item,i)=>{
    console.log(item.scrollLeft)
    container_D=item.getBoundingClientRect()
    let container_width=(container_D.width /4);
    next_Btn_category_home[i].addEventListener('click',()=>{
        console.log(item.scrollLeft)
        item.scrollLeft +=container_width
        //console.log(item.scrollLeft)
        if(item.scrollLeft>=600){
            item.scrollLeft=0
        }
    })
    prev_Btn_category_home[i].addEventListener('click',()=>{
        item.scrollLeft -=container_width
    })
})