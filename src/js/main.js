// const img_slide_element=document.querySelector('.main-content-slider-item-img')
// console.log(img_slide_element)
// window.onresize=function(){
//     const size_item_slider =document.querySelector('.main-content-slider-item').offsetWidth;
//     console.log(size_item_slider)
//     img_slide_element.style=`${size_item_slider}px`
// }
const slider= document.querySelector('.main-content-slider-show')
const items=document.getElementsByClassName('main-content-slider-item')
const length=items.length
let index=0
setInterval(function(){
    if(index == length-1){
        index=0
        slider.style=`transform: translateX(${-1380*index}px);`
    }else{
        index++
        slider.style=`transform: translateX(${-1380*index}px);`
    }
}, 3000)
