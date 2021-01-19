const hamburger = document.getElementById('nav-icon4')
const navMobile = document.getElementById('nav-mobile')
const nav = document.getElementById('nav')

// hamburger.classList.add('open')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  navMobile.classList.toggle('open')
  nav.classList.toggle('fixed')
})
