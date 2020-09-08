var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.nav-mobile')

toggleButton.addEventListener('click', function () {
  var items = mobileNav.querySelector('.main-nav__items')
  $(mobileNav).slideToggle(500, function () {
    mobileNav.classList.add('open-parent')
    items.classList.add('open')
  })
})

// Testimonial Slider Mobile

var slideDT = document.querySelectorAll('.slide-desk-tab')
var slideMobile = document.querySelectorAll('.testimonial__box')
var circlesDT = document.querySelector('.circles.desk-tab')
var circlesMobile = document.querySelector('.circles.mobile')

function changeSlides(x) {
  if (x.matches) {
    slideDT.forEach((element) => {
      element.classList.remove('mySlides')
      element.classList.remove('fade')
    })
    var dotDT = circlesDT.querySelectorAll('.point')
    dotDT.forEach((element) => {
      element.classList.remove('dot')
    })
    slideMobile.forEach((element) => {
      element.classList.add('mySlides')
      element.classList.add('fade')
    })
    var dotM = circlesMobile.querySelectorAll('.point')
    dotM.forEach((element) => {
      element.classList.add('dot')
    })
  } else {
    slideDT.forEach((element) => {
      element.classList.add('mySlides')
      element.classList.add('fade')
    })
    var dotDT = circlesDT.querySelectorAll('.point')
    dotDT.forEach((element) => {
      element.classList.add('dot')
    })
    slideMobile.forEach((element) => {
      element.classList.remove('mySlides')
      element.classList.remove('fade')
    })
    var dotM = circlesMobile.querySelectorAll('.point')
    dotM.forEach((element) => {
      element.classList.remove('dot')
    })
  }
}

var x = window.matchMedia('(max-width: 576px)')
changeSlides(x)
x.addListener(changeSlides)

// Testimonial Slider

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'flex'
  var parent = slides[slideIndex - 1].parentElement
  parent.style.display = 'flex'
  var children = slides[slideIndex - 1].querySelectorAll('.testimonial__box')
  children.forEach((element) => {
    element.style.display = 'flex'
  })
  dots[slideIndex - 1].className += ' active'
}

//Drop down questions

var selectedQuestions = document.querySelectorAll('.section-div__question')

selectedQuestions.forEach((element) => {
  element.addEventListener('click', function () {
    CloseAll()
    var text = this.querySelector('.question-text')
    if ($(text).is(':visible')) {
      $(text).slideUp()
    } else {
      $(text).slideDown()
    }
  })
})

function CloseAll() {
  selectedQuestions.forEach((element) => {
    var text = element.querySelector('.question-text')
    $(text).slideUp()
  })
}

//header active sections

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: '100%' },
})

// build scenes
new ScrollMagic.Scene({ triggerElement: '#home' })
  .setClassToggle('#home-button', 'active__header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#about' })
  .setClassToggle('#about-button', 'active__header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#about-video' })
  .setClassToggle('#about-video-button', 'active__header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#team' })
  .setClassToggle('#team-button', 'active__header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#portfolio' })
  .setClassToggle('#portfolio-button', 'active__header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#blog' })
  .setClassToggle('#blog-button', 'active__header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#contact' })
  .setClassToggle('#contact-button', 'active__header') // add class toggle
  .addTo(controller)
