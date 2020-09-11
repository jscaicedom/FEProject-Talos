import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'svgxuse';

let mobileNav = document.querySelector('.header-mobile');

var slideIndex = 1;

const maxWidth = window.matchMedia('(max-width: 576px)');

let selectedQuestions = document.querySelectorAll('.question');

let controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: '100%' },
});

let sections = [
  '#home',
  '#about',
  '#about-video',
  '#team',
  '#portfolio',
  '#blog',
  '#contact',
];

let headerSections = [
  '#home-button',
  '#about-button',
  '#about-video-button',
  '#team-button',
  '#portfolio-button',
  '#blog-button',
  '#contact-button',
];

function changeTestimonial(maxWidth) {
  if (maxWidth.matches) {
    // If media query matches
    slideIndex = 4;
    showSlides(slideIndex);
  } else {
    slideIndex = 1;
    showSlides(slideIndex);
  }
}

window.openMobileMenu = () => {
  let items = mobileNav.querySelector('.header-items');
  $(mobileNav).slideToggle(500, () => {
    mobileNav.classList.add('open-parent');
    items.classList.add('open');
  });
};

window.currentSlide = (currentIndex) => {
  slideIndex = currentIndex;
  showSlides(slideIndex);
};

function showSlides(index) {
  let slides = document.querySelectorAll('.mySlides');
  let dots = document.querySelectorAll('.dot');
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((element) => {
    element.classList.remove('slide-visible');
    element.classList.add('slide-ocult');
  });
  dots.forEach((element) => {
    element.className = element.className.replace(' active', '');
  });
  slides[slideIndex - 1].classList.remove('slide-ocult');
  slides[slideIndex - 1].classList.add('slide-visible');
}

//Drop down questions
window.openQuestion = (question) => {
  closeAll();
  const text = question.querySelector('.question-text');
  if ($(text).is(':visible')) {
    $(text).slideUp();
  } else {
    $(text).slideDown();
  }
};

function closeAll() {
  selectedQuestions.forEach((element) => {
    $(element.querySelector('.question-text')).slideUp();
  });
}
// Testimonial Slider

changeTestimonial(maxWidth);
maxWidth.addListener(changeTestimonial);

showSlides(slideIndex);

// build scenes
sections.forEach(function (element, index) {
  new ScrollMagic.Scene({ triggerElement: element })
    .setClassToggle(headerSections[index], 'active-header') // add class toggle
    .addTo(controller);
});

maxWidth.removeListener();
