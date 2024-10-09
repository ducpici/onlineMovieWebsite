var pass=document.querySelector('input[name="password"]')
var show=document.getElementById('show-pass')
var hidden=document.getElementById('hidden-pass')
show.onclick=function(){
    show.style='display:none'
    hidden.style='display:block'
    pass.type='text'
}
hidden.onclick=function(){
    hidden.style='display:none'
    show.style='display:block'
    pass.type='password'
}