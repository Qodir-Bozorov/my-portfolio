var toggler = document.querySelector(".nav-list__toggler")
var navList = document.querySelector(".site-nav__nav-list")

toggler.addEventListener("click", function (e) {
  e.preventDefault()
  navList.classList.toggle("site-nav__nav-list--open")
})