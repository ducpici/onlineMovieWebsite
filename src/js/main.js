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




//
const swiperWrapper = document.querySelector('.swiper-wrapper');

let isDown = false;
let startX;
let scrollLeft;

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

const swiper_wraper= document.querySelector('.swiper-wrapper')
const swiper_btn_prev=document.querySelector('.swiper-btn-prev')
const swiper_btn_next=document.querySelector('.swiper-btn-next')
const swiper_slide_width=document.querySelector('.swiper-slide').offsetWidth

let value_scrollLeft=0
swiper_btn_next.onclick=function(){
    value_scrollLeft=swiper_wraper.scrollLeft
    console.log(value_scrollLeft)
    loadSlide(swiper_slide_width)
}
swiper_btn_prev.onclick=function(){
    value_scrollLeft=swiper_wraper.scrollLeft
    loadSlide(-swiper_slide_width)
}

function loadSlide(value_px){
    swiper_wraper.scrollLeft+=value_px
}




