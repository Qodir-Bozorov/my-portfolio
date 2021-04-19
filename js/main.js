var toggler = document.querySelector(".nav-list__toggler")
var navList = document.querySelector(".site-nav__nav-list")
var heroHeader = document.querySelector(".hero__heading")

toggler.addEventListener("click", function (e) {
  e.preventDefault()
  navList.classList.toggle("site-nav__nav-list--open")
})

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("siteHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     .innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }