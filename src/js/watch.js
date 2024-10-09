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