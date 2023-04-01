var menu=document.getElementById("menu");
    var sidenav=document.getElementById("sidenav");
    sidenav.style.width="0px";
    menu.onclick = function(){
       if(sidenav.style.width=="0px"){
         sidenav.style.width="250px";
       }
       else{
        sidenav.style.width="0px";
       }
    }


    const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');

let currentSlide = 1;
let slideWidth = slide[0].clientWidth;

slides.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';

next.addEventListener('click', () => {
  if (currentSlide >= slide.length - 1) return;
  currentSlide++;
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
});

prev.addEventListener('click', () => {
  if (currentSlide <= 0) return;
  currentSlide--;
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
});

slides.addEventListener('transitionend', () => {
  if (slide[currentSlide].classList.contains('last-clone')) {
    slides.style.transition = 'none';
    currentSlide = slide.length - 2;
    slides.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
  }
  if (slide[currentSlide].classList.contains('first-clone')) {
    slides.style.transition = 'none';
    currentSlide = slide.length - currentSlide;
    slides.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
  }
});
