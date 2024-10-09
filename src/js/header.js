var theloai_dropdown=document.querySelector('#theloai-dropdown')
var quocgia_dropdown=document.querySelector('#quocgia-dropdown')
var list_theloai=document.querySelector('.list-theloai')
var list_quocgia=document.querySelector('.list-quocgia')
theloai_dropdown.onclick=function(e){
    e.preventDefault()
    theloai_dropdown.classList.add('header-menu-list-item-link__color-orrange')
    list_theloai.classList.toggle('dropdown-active')
    quocgia_dropdown.classList.remove('header-menu-list-item-link__color-orrange')
    list_quocgia.classList.remove('dropdown-active')
}
quocgia_dropdown.onclick=function(e){
    e.preventDefault()
    quocgia_dropdown.classList.add('header-menu-list-item-link__color-orrange')
    list_quocgia.classList.toggle('dropdown-active')
    theloai_dropdown.classList.remove('header-menu-list-item-link__color-orrange')
    list_theloai.classList.remove('dropdown-active')
}

var main=document.querySelector('.main')
var form_input=document.querySelector('.header-form_search-input')
var header_logo=document.querySelector('.header-logo')
var header_bar=document.querySelector('.header-navbar-bars')
var header_menu=document.querySelector('.header-menu')
var menu_list=document.querySelector('.menu-list')
var btn_header_bar=document.querySelector('#header-navbar-bars-icon')
var btn_header_search=document.querySelector('#header-form_search-click')
var header_form_search=document.querySelector('.header-form_search')

btn_header_bar.onclick=function(){   
    btn_header_bar.classList.toggle('fa-bars')
    btn_header_bar.classList.toggle('fa-xmark')
    header_menu.classList.toggle('active_navbar')
    main.classList.toggle('display-element')

}

btn_header_search.onclick=function(){
    btn_header_search.classList.toggle('fa-magnifying-glass')
    btn_header_search.classList.toggle('fa-xmark')
    header_form_search.classList.toggle('active-header-form_search')
    header_bar.classList.toggle('display-element');
    header_logo.classList.toggle('display-element')
    form_input.classList.toggle('active-form-search')
}

var avt=document.querySelector('.profile-avatar')
var user_dropdown=document.querySelector('.user-dropdown')
avt.onclick=function(){
    user_dropdown.classList.toggle('display-block')
}