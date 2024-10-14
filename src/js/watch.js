show()
swiper()

function show(){
    var content=document.querySelector('.movie-detail-content-para')
    var more_open=document.querySelector('.movie-detail-content-more')
    var more_close=document.querySelector('.movie-detail-content-hidden')
    more_open.onclick=function(){
        Object.assign(content.style,{
            height: 'fit-content'
        })
        more_open.style='display: none'
        more_close.style='display: block'
    }
    more_close.onclick=function(){
        more_open.style='display: block'
        Object.assign(content.style,{
            height: '100%'
        })
        more_close.style='display: none'
    }
}


function swiper(){
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
}

