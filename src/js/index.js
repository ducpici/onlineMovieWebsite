// const list=document.querySelector('.main-content-slider-list')


// function getData(){
//     fetch('https://phimapi.com/v1/api/danh-sach/phim-le')
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(datas){
//         renderData(datas.data.items)
//     })
// }

// function renderData(datas){
//     var html=''
//     datas.map(function(item){
//         html += `<div class="main-content-slider-item" style="background-image: url()">
//                             <div class="main-content-slider-item-infoFilm">           
//                                 <h1 class="movie-detail-headingFilm text-2xl text-white fw-semibold">${item.name}</h1>
//                                 <ul class="d-flex p-0">
//                                     <li class="movie-detail-item text-white list-unstyled">Mới</li>
//                                     <li class="movie-detail-item text-white">${item.year}</li>
//                                     <li class="movie-detail-item text-white">${item.time}</li>
//                                     <li class="movie-detail-item text-white">${item.category.name}</li>
//                                 </ul>
//                                 <div class="movie_banner_actions">
//                                     <a class="banner_action_watch" href=""><i class="fa-solid fa-play"></i> Xem ngay</a>
//                                     <div class="movie_banner_action">
//                                         <i class='icon-left movie_banner_action-icon bx bx-heart bx-flip-horizontal' ></i>
//                                     </div>
//                                     <div class="movie_banner_action">
//                                         <i class='icon-right movie_banner_action-icon bx bx-share bx-flip-horizontal' ></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>`
//     })
//     list.innerHTML=html
//     console.log(html)
// }


// getData()
