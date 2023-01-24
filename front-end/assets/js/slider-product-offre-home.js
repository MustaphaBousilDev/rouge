let slider_product_offre_home=[...document.querySelectorAll('.products__offre-home .offre__body-home')]
const next_Btn_offre_home=[...document.querySelectorAll('.products__offre-home  .right-icon-offre-product-home')]
const prev_Btn_offre_home=[...document.querySelectorAll('.products__offre-home  .left-icon-offre-product-home')]


slider_product_offre_home.forEach((item,i)=>{
    console.log('fuck btich')
    console.log(item.scrollLeft)
    container_offre=item.getBoundingClientRect()
    let container_width_offre=(container_offre.width / 4);
        next_Btn_offre_home[i].addEventListener('click',()=>{
        console.log(item.scrollLeft)
        item.scrollLeft +=container_width_offre
        //console.log(item.scrollLeft)
        
    })
    prev_Btn_offre_home[i].addEventListener('click',()=>{
        item.scrollLeft -=container_width_offre
    })
})