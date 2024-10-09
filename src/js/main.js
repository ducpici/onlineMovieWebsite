const slider =document.querySelector('.main-content-slider')
const item_slider =document.querySelector('.main-content-slider-item')
const items_slider=document.getElementsByClassName('main-content-slider-item')

window.onresize=function(){

}

const slider_show= document.querySelector('.main-content-slider-show')

const icon_left=document.querySelector('icon-left')
const icon_right=document.querySelector('icon-right')

const length=items_slider.length

// let index=0
// setInterval(function(){
//     if(index == length-1){
//         index=0
//         slider_show.style=`transform: translateX(${-1*slider.offsetWidth*index}px);`
//     }else{
//         index++
//         slider_show.style=`transform: translateX(${-1*slider.offsetWidth*index}px);`
//     }
// }, 3000)



