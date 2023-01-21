let offre_header=document.querySelectorAll('.offre p')
let length=offre_header.length;
const icon_right=document.querySelector('.icon-direction-right')
const icon_left=document.querySelector('.icon-direction-left')
let counter=0;

icon_right.addEventListener('click',()=>{
    offre_header.forEach((p)=>{p.classList.remove('active')})
    if(counter <(length-1)){
        counter++
        offre_header[counter].classList.add('active')
    }else{
        counter=0
        offre_header[counter].classList.add('active')
    }
})

icon_left.addEventListener('click',()=>{
    offre_header.forEach((p)=>{p.classList.remove('active')})
    if(counter > 0){
        counter--
        offre_header[counter].classList.add('active')
    }else{
        counter=length-1
        offre_header[counter].classList.add('active')
    }
})

setInterval(function(){icon_right.click()},2000);


//function toggle menu language
function menu__Toggle(){
    const toggle__menu=document.querySelector('.menu-language')
    toggle__menu.classList.toggle('active')
    //console.log('hohohohoh')
}
