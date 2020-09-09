var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.header-mobile');

function open_mobile_menu() {
  var items = mobileNav.querySelector('.header-items');
  $(mobileNav).slideToggle(500, () => {
    mobileNav.classList.add('open-parent');
    items.classList.add('open');
  });
}

// Testimonial Slider Mobile

var slideDT = document.querySelectorAll('.slide-desk-tab');
var circlesDT = document.querySelector('.circles.desk-tab');
var dotDT = circlesDT.querySelectorAll('.point');

var slideMobile = document.querySelectorAll('.testimonial-box');
var circlesMobile = document.querySelector('.circles.mobile');
var dotM = circlesMobile.querySelectorAll('.point');

var styles = ['mySlides', 'fade'];

function changeSlides(max_width) {
  if (max_width.matches) {
    let i;
    for (i = 0; i < slideDT.length; i++) {
      styles.forEach((element) => {
        slideDT[i].classList.remove(element);
      });
      dotDT[i].classList.remove('dot');
    }
    let j;
    for (j = 0; j < slideMobile.length; j++) {
      styles.forEach((element) => {
        slideMobile[j].classList.add(element);
      });
      dotM[i].add('dot');
    }
  } else {
    let i;
    for (i = 0; i < slideDT.length; i++) {
      styles.forEach((element) => {
        slideDT[i].classList.add(element);
      });
      dotDT[i].classList.add('dot');
    }
    let j;
    for (j = 0; j < slideMobile.length; j++) {
      styles.forEach((element) => {
        slideMobile[j].classList.remove(element);
      });
      dotM[i].classList.remove('dot');
    }
  }
}

var max_width = window.matchMedia('(max-width: 576px)');
changeSlides(max_width);
max_width.addListener(changeSlides);

// Testimonial Slider

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(currentIndex) {
  slideIndex = currentIndex;
  showSlides(slideIndex);
}

function showSlides(index) {
  let i;
  var slides = document.querySelectorAll('.mySlides');
  var dots = document.querySelectorAll('.dot');
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

  var parent = slides[slideIndex - 1].parentElement;

  parent.classList.remove('slide-ocult');
  parent.classList.add('slide-visible');

  var children = slides[slideIndex - 1].querySelectorAll('.testimonial-box');

  children.forEach((element) => {
    element.classList.remove('slide-ocult');
    element.classList.add('slide-visible');
  });
  dots[slideIndex - 1].className += ' active';
}

//Drop down questions

var selectedQuestions = document.querySelectorAll('.question');

function openQuestion(question) {
  closeAll();
  var text = question.querySelector('.question-text');
  if ($(text).is(':visible')) {
    $(text).slideUp();
  } else {
    $(text).slideDown();
  }
}

function closeAll() {
  selectedQuestions.forEach((element) => {
    var text = element.querySelector('.question-text');
    $(text).slideUp();
  });
}

//header active sections

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: '100%' },
});

var sections = [
  '#home',
  '#about',
  '#about-video',
  '#team',
  '#portfolio',
  '#blog',
  '#contact',
];

var header_sections = [
  '#home-button',
  '#about-button',
  '#about-video-button',
  '#team-button',
  '#portfolio-button',
  '#blog-button',
  '#contact-button',
];

// build scenes
let i;
for (i = 0; i < sections.length; i++) {
  new ScrollMagic.Scene({ triggerElement: sections[i] })
    .setClassToggle(header_sections[i], 'active-header') // add class toggle
    .addTo(controller);
}
