let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}


window.onscroll = () =>{
   navbar.classList.remove('active');
}

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      320:{
         slidesPerView: 1.2,
      },
      640: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3.2,
      },
      991: {
        slidesPerView: 4.2,
      },
   },
});
