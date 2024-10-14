var pass=document.querySelector('input[name="password"]')
var show=document.getElementById('show-pass')
var hidden=document.getElementById('hidden-pass')
// show.onclick=function(){
//     show.style='display:none'
//     hidden.style='display:block'
//     pass.type='text'
// }
// hidden.onclick=function(){
//     hidden.style='display:none'
//     show.style='display:block'
//     pass.type='password'
// }

show.onclick=function(){
    show.classList.add('d-none')
    hidden.classList.add('d-block')
    hidden.classList.toggle('d-none')
    pass.type='text'
}
hidden.onclick=function(){
    show.classList.toggle('d-none')
    show.classList.add('d-block')
    hidden.classList.toggle('d-none')
    pass.type='password'
}