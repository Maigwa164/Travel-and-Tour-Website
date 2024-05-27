// For sticky navbar and changing background color on scroll
window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");

    // Function to add 'sticky' class to the header and change background color on scroll
    function toggleSticky() {
        header.classList.toggle('sticky', window.scrollY > 0);
    }

    // Initial call to set initial state
    toggleSticky();

    // Event listener for scroll
    window.addEventListener("scroll", function() {
        toggleSticky();
    });
});

// For highlighting the current page
// Add this to your existing JavaScript file or in a script tag
window.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.href.split('/').pop();
    var navLinks = document.querySelectorAll('.nav__link');

    // Function to highlight the current page in the navigation
    function highlightCurrentPage() {
        navLinks.forEach(function(navLink) {
            var linkPath = navLink.href.split('/').pop();
            navLink.classList.toggle('current-page', linkPath === currentPage);
        });
    }

    // Initial call to set initial state
    highlightCurrentPage();
});


//for logo
window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav__logo");
    header.classList.toggle('sticky', window.scrollY > 0);

    // Adjust logo size based on scroll position
    var maxLogoHeight = 50; // Max height for the logo
    var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    var newLogoHeight = maxLogoHeight - (maxLogoHeight * scrollPercentage);

    // Ensure the new height is not less than 0
    newLogoHeight = Math.max(newLogoHeight, 0);
    
    logo.style.maxHeight = newLogoHeight + "px";
});

/*
//for reactive navbar
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }


 showMenu('nav-toggle','nav-menu')

//SLIDING IMAGE
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "flex";
  setTimeout(carousel, 1500); // Change image every 1 seconds
}

//for gallery slide

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})
