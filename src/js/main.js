//Auto slider
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
// var autoSlider=setInterval(()=>{next.onclick()}, 5000)
//End Auto slider


//Multi swiper and click
const swiperWrappers = document.querySelectorAll('.swiper-wrapper');
let isDown = false;
let startX;
let scrollLeft;
swiperWrappers.forEach(function(swiperWrapper){
    swiperWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        swiperWrapper.classList.add('active');
        startX = e.pageX - swiperWrapper.offsetLeft;
        scrollLeft = swiperWrapper.scrollLeft;
    });
    swiperWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        swiperWrapper.classList.remove('active');
    });
    swiperWrapper.addEventListener('mouseup', () => {
        isDown = false;
        swiperWrapper.classList.remove('active');
    });
    swiperWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return; 
        e.preventDefault();
        const x = e.pageX - swiperWrapper.offsetLeft;
        const walk = (x - startX) * 3; 
        swiperWrapper.scrollLeft = scrollLeft - walk;
    });
})

const swiper_wrapers= document.querySelectorAll('.swiper-wrapper')
const swiper_btn_prevs=document.querySelectorAll('.swiper-btn-prev')
const swiper_btn_nexts=document.querySelectorAll('.swiper-btn-next')
const swiper_slide_width=document.querySelector('.swiper-slide').offsetWidth
let value_scrollLeft=0


for(let i in swiper_btn_nexts){
    swiper_btn_nexts[i].onclick=function(){
        value_scrollLeft=swiper_wrapers[i].scrollLeft
        loadSlide(i, swiper_slide_width)
    }
}


for(let i in swiper_btn_prevs){
    swiper_btn_prevs[i].onclick=function(){
        value_scrollLeft=swiper_wrapers[i].scrollLeft
        loadSlide(i, -swiper_slide_width)
    }
}


function loadSlide(swiper_index, value_px){
    swiper_wrapers[swiper_index].scrollLeft+=value_px
}
//End Multi swiper and click



