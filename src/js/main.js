const slider=document.querySelector('.main-content-slider')
const items_slider=document.querySelectorAll('.main-content-slider-item')
const slider_list=document.querySelector('.main-content-slider-list')
const dots=document.querySelectorAll('.dot')

const prev=document.querySelector('.btn-prev')
const next=document.querySelector('.btn-next')

const items_length=items_slider.length-1

let index=0

next.onclick=function(){
    if(index+1 > items_length){
        index=0
    }else{
       index+=1 
    }
    reloadSlider()
}
prev.onclick=function(){
    if(index-1 < 0){
        index=items_length
    }else{
       index-=1 
    }
    reloadSlider()
}

for(let i in dots){
    dots[i].onclick=function(){
        index=i
        reloadSlider()
    }
}

function reloadSlider(){
    var item=items_slider[index].offsetLeft
    slider_list.style.left=-item+'px'
    var lastDotActive=document.querySelector('.dot-active')
    lastDotActive.classList.remove('dot-active')
    dots[index].classList.add('dot-active')
    clearInterval(autoSlider)
    autoSlider=setInterval(()=>{next.onclick()}, 5000)
}

var autoSlider=setInterval(()=>{next.onclick()}, 5000)



