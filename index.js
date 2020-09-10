let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.header-mobile');

function open_mobile_menu() {
  let items = mobileNav.querySelector('.header-items');
  $(mobileNav).slideToggle(500, () => {
    mobileNav.classList.add('open-parent');
    items.classList.add('open');
  });
}

// Testimonial Slider

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(currentIndex) {
  slideIndex = currentIndex;
  showSlides(slideIndex);
}

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

let selectedQuestions = document.querySelectorAll('.question');

function openQuestion(question) {
  closeAll();
  const text = question.querySelector('.question-text');
  if ($(text).is(':visible')) {
    $(text).slideUp();
  } else {
    $(text).slideDown();
  }
}

function closeAll() {
  selectedQuestions.forEach((element) => {
    $(element.querySelector('.question-text')).slideUp();
  });
}

//header active sections

// init controller
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

// build scenes
sections.forEach(function (element, index) {
  new ScrollMagic.Scene({ triggerElement: element })
    .setClassToggle(headerSections[index], 'active-header') // add class toggle
    .addTo(controller);
});
