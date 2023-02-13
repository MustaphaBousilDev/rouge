function toggle__dropdown(e){
    let value 
    let heading 
    let myTarget
    if(e.target.classList.contains('bx-chevron-down')){
        value=e.target.parentElement.parentElement.parentElement
        heading=value.querySelector('h2').value 
        value.querySelector('.details').classList.toggle('shows_removing')
        let height=document.querySelector('.details').height
    }
    console.log(value)
}