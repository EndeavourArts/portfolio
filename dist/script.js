//navbar fixed
window.onscroll = function(){
const header = document.querySelector('header');
const fixedNav = header.offsetTop;

if (window.pageYOffset > fixedNav ) {
    header.classList.add('navbar-fixed');
}else {
    header.classList.remove('navbar-fixed');
}
}
//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#navMenu")

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

const instgram = document.querySelector('#instagram');

instagram.addEventListener('mouseover' ,function(){
instagram.classList.add('fill-funchsia-700');
})
