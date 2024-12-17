const $header = document.querySelector('.js_header')
const $burgerBtn = document.querySelector('.js_header_nav_btn')
const headerOopenClass = 'header--nav-open'

$burgerBtn.addEventListener('click', () => {
    $header.classList.toggle('header--nav-open')
})