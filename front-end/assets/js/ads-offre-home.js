function toggle_class_hide(){
    document.querySelectorAll('.content-ads-home-offre').forEach((div)=>{
        div.querySelectorAll('a').forEach((a)=>{
            a.classList.toggle('ads-photo-hide')
        })
    })
 }


    
                setInterval(function(){
                    toggle_class_hide()
                },3000);
     

