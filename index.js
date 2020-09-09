var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.header-mobile')

function open_mobile_menu() {
  var items = mobileNav.querySelector('.header-items')
  $(mobileNav).slideToggle(500, () => {
    mobileNav.classList.add('open-parent')
    items.classList.add('open')
  })
}

// Testimonial Slider Mobile

var slideDT = document.querySelectorAll('.slide-desk-tab')
var slideMobile = document.querySelectorAll('.testimonial-box')
var circlesDT = document.querySelector('.circles.desk-tab')
var circlesMobile = document.querySelector('.circles.mobile')

function changeSlides(max_width) {
  if (max_width.matches) {
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

var max_width = window.matchMedia('(max-width: 576px)')
changeSlides(max_width)
max_width.addListener(changeSlides)

// Testimonial Slider

var slideIndex = 1
showSlides(slideIndex)

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
  var children = slides[slideIndex - 1].querySelectorAll('.testimonial-box')
  children.forEach((element) => {
    element.style.display = 'flex'
  })
  dots[slideIndex - 1].className += ' active'
}

//Drop down questions

var selectedQuestions = document.querySelectorAll('.question')

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
  .setClassToggle('#home-button', 'active-header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#about' })
  .setClassToggle('#about-button', 'active-header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#about-video' })
  .setClassToggle('#about-video-button', 'active-header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#team' })
  .setClassToggle('#team-button', 'active-header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#portfolio' })
  .setClassToggle('#portfolio-button', 'active-header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#blog' })
  .setClassToggle('#blog-button', 'active-header') // add class toggle
  .addTo(controller)
new ScrollMagic.Scene({ triggerElement: '#contact' })
  .setClassToggle('#contact-button', 'active-header') // add class toggle
  .addTo(controller)
