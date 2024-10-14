
//Auto slider
const slider=document.querySelector('.main-content-slider')
var items_slider=document.querySelectorAll('.main-content-slider-item')
const slider_list=document.querySelector('.main-content-slider-list')
const dots=document.querySelectorAll('.dot')
const prev=document.querySelector('.btn-prev')
const next=document.querySelector('.btn-next')
var items_length=items_slider.length-1
let index=0
const dots_wraper= document.querySelector('.dots-wraper')
const newFilm=document.getElementById('newFilm')
const filmBoHot=document.getElementById('filmBoHot')
const tvShow=document.getElementById('tvShow')
const filmAnime=document.getElementById('filmAnime')
const filmAnime_small=document.getElementById('filmAnime-small')
const filmLeHot=document.getElementById('filmLeHot')
// const list=document.querySelector('.main-content-slider-list')

const api_phimLe='https://phimapi.com/v1/api/danh-sach/phim-le?page=2'
const api_phimAnime='https://phimapi.com/v1/api/danh-sach/hoat-hinh?page=2'
const api_phimBo='https://phimapi.com/v1/api/danh-sach/phim-bo?page=2'
const api_tvShow='https://phimapi.com/v1/api/danh-sach/tv-shows?page=2'
function getData(url_api, e_target){
    fetch(url_api)
    .then(function(res){
        return res.json()
    })
    .then(function(datas){
        renderData(datas.data, e_target)
    })
}

function renderData(datas, element){
    var html=''
    datas.items.map(function(data){
        html += `<div class="main-content-slider-item" style="background-image: url(${datas.APP_DOMAIN_CDN_IMAGE+'/'+data.thumb_url})">
                            <div class="main-content-slider-item-infoFilm">           
                                <h1 class="movie-detail-headingFilm text-2xl text-white fw-semibold">${data.name}</h1>
                                <ul class="d-flex p-0">
                                    <li class="movie-detail-item text-white list-unstyled">Mới</li>
                                    <li class="movie-detail-item text-white">${data.year}</li>
                                    <li class="movie-detail-item text-white">${data.time}</li>
                                    <li class="movie-detail-item text-white">${data.category[0].name}</li>
                                </ul>
                                <div class="movie_banner_actions">
                                    <a class="banner_action_watch" href=""><i class="fa-solid fa-play"></i> Xem ngay</a>
                                    <div class="movie_banner_action">
                                        <i class='icon-left movie_banner_action-icon bx bx-heart bx-flip-horizontal' ></i>
                                    </div>
                                    <div class="movie_banner_action">
                                        <i class='icon-right movie_banner_action-icon bx bx-share bx-flip-horizontal' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>`
    })
    element.innerHTML=html
    items_slider=document.querySelectorAll('.main-content-slider-item')
    items_length = items_slider.length - 1
}

function getDataFilmLarge(url_api, e_target){
    fetch(url_api)
    .then(function(res){
        return res.json()
    })
    .then(function(datas){
        renderDataFilmLarge(datas.data, e_target)
    })
}
function renderDataFilmLarge(datas, element){
    var html=''
    datas.items.map(function(data){
        html += `<div class="swiper-slide swiper-slide_large">
                                <div class="swiper-slide-img film_large" style="background-image: url(${datas.APP_DOMAIN_CDN_IMAGE+'/'+data.thumb_url});"><a class="swiper-slide-img-link" href="" draggable="false"></a><i class="icon-play fa-solid fa-play fa-2xl"></i></div>
                                <div class="swiper-slide-title"><h3 class="swiper-slide-title-name"><span class="">${data.name}</span></h3></div>
                            </div>`
    })
    element.innerHTML=html
}

function getDataFilmMedium(url_api, e_target){
    fetch(url_api)
    .then(function(res){
        return res.json()
    })
    .then(function(datas){
        renderDataFilmMedium(datas.data, e_target)
    })
}
function renderDataFilmMedium(datas, element){
    var html=''
    datas.items.map(function(data){
        html += `<div class="swiper-slide swiper-slide_medium">
                                <div class="swiper-slide-img film_medium" style="background-image: url(${datas.APP_DOMAIN_CDN_IMAGE+'/'+data.poster_url});"><a class="swiper-slide-img-link" href="" draggable="false"></a><i class="icon-play fa-solid fa-play fa-2xl"></i></div>
                                <div class="swiper-slide-title"><h3 class="swiper-slide-title-name"><span class="">${data.name}</span></h3></div>
                            </div>`
    })
    element.innerHTML=html
}

function getDataFilmSmall(url_api, e_target){
    fetch(url_api)
    .then(function(res){
        return res.json()
    })
    .then(function(datas){
        renderDataFilmSmall(datas.data, e_target)
    })
}
function renderDataFilmSmall(datas, element){
    var html=''
    datas.items.map(function(data){
        html += `<div class="swiper-slide swiper-slide_small">
                                <div class="swiper-slide-img film_small" style="background-image: url(${datas.APP_DOMAIN_CDN_IMAGE+'/'+data.thumb_url});"><a class="swiper-slide-img-link" href="" draggable="false"></a><i class="icon-play fa-solid fa-play fa-2xl"></i></div>
                                <div class="swiper-slide-title"><h3 class="swiper-slide-title-name"><span class="">${data.name}</span></h3></div>
                            </div>`
    })
    element.innerHTML=html
}


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

getData(api_phimLe, slider_list)
getDataFilmLarge(api_phimAnime, newFilm)
getDataFilmMedium(api_phimLe, hotFilm)
getDataFilmMedium(api_phimBo, filmBoHot)
getDataFilmLarge(api_tvShow, tvShow)
getDataFilmMedium(api_phimAnime, filmAnime)
getDataFilmSmall(api_phimAnime, filmAnime_small)
