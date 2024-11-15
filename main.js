/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== HOME SWIPER ===============*/
// let homeSwiper = new Swiper(".home-swiper", {
//     spaceBetween: 0,
//     // loop: 'true',
//     // autoplay:{
//     //           delay:6000,
//     //           disableOnInteraction: false,
//     //       },
      
//     // pagination: {
//     //     el: ".swiper-pagination",
//     //     clickable: true,
//     //   },
// })



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    autoplay:{
              delay:4000,
              disableOnInteraction: false,
          },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 500,
    delay: 150,
    reset: true
})

sr.reveal(`.home-swiper, .page, .newsletter__container, .tree, .res_but`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .page_cont_l, .form-container`,{origin: 'left'})
sr.reveal(`.about__img, .page_cont_r, .discount__data, .content`,{origin: 'right'})
sr.reveal(`.data`,{origin: 'bottom'})

/*============ SCROLL EFFECT=========*/
document.addEventListener("scroll", function () {
    const backgroundImage = document.getElementById("backgroundImage");
    const scrollPosition = window.scrollY;
    
    // Đặt độ mờ dựa trên vị trí cuộn
    // Giá trị 500 có thể điều chỉnh để thay đổi độ mờ nhanh hoặc chậm
    const opacity = 1 - scrollPosition / 500;
    
    // Đảm bảo giá trị nằm trong khoảng từ 0 đến 1
    backgroundImage.style.opacity = Math.max(opacity, 0);
  });
  


