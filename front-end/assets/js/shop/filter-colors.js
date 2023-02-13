document.querySelectorAll('.labels-colors').forEach((color)=>{
    color.addEventListener('click',function(){
        document.querySelectorAll('.labels-colors').forEach((col)=>{
            col.classList.remove('active')
        })
        this.classList.add('active')
    })
})