const range_input=document.querySelectorAll('.range-price .range-input input')
const price_input=document.querySelectorAll('.range-price .price-input input')
const progress=document.querySelector('.range-price .slider .progress')
let price_gap=1000;
price_input.forEach(input=>{
    input.addEventListener('input',(e)=>{
        let min_value=parseInt(price_input[0].value);
        let max_value=parseInt(price_input[1].value);
        if((max_value - min_value>=price_gap) && max_value<=10000){
            if(e.target.className==="input-min"){
                range_input[0].value=min_value
                progress.style.left=(min_value / range_input[0].max)*100 + "%";
            }else{
                range_input[1].value=max_value;
                progress.style.right=100 - (max_value / range_input[1].max)*100 + "%";
            }
        }
    })
})
console.log(range_input[0].value)
console.log(range_input[1].value)
range_input.forEach(range=>{
    range.addEventListener('input',(e)=>{
        let min_value=parseInt(range_input[0].value)
        let max_value=parseInt(range_input[1].value)
        if(max_value - min_value <price_gap){
            if(e.target.className==='range-min'){range_input[0].value=max_value  - price_gap;}
            else{range_input[1].value=min_value  + price_gap;}
        }else{
            price_input[0].value=min_value;
            price_input[1].value=max_value;
            progress.style.left=(min_value / range_input[0].max)*100 + "%";
            progress.style.right=100 - (max_value / range_input[1].max)*100 + "%";
        }
        
    })
})
range_input.forEach(range=>{
        let min_value=parseInt(range_input[0].value)
        let max_value=parseInt(range_input[1].value)
        if(max_value - min_value <price_gap){
            range_input[0].value=max_value  - price_gap;
            range_input[1].value=min_value  + price_gap;
        }else{
            price_input[0].value=min_value;
            price_input[1].value=max_value;
            progress.style.left=(min_value / range_input[0].max)*100 + "%";
            progress.style.right=100 - (max_value / range_input[1].max)*100 + "%";
        }
    })