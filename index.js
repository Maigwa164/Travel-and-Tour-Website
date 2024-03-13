// For sticky navbar and highlighting current page
window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var currentPage = window.location.href;

    // Function to add 'sticky' class to the header
    function toggleSticky() {
        header.classList.toggle('sticky', window.scrollY > 0);
    }

    // Function to highlight the current page in the navigation
    function highlightCurrentPage() {
        var navLinks = document.querySelectorAll('.menu a');

        navLinks.forEach(function(navLink) {
            navLink.classList.toggle('current-page', navLink.href === currentPage);
        });
    }

    // Initial call to set initial state
    toggleSticky();
    highlightCurrentPage();

    // Event listener for scroll
    window.addEventListener("scroll", function() {
        toggleSticky();
        highlightCurrentPage();
    });
});

//for logo
window.addEventListener("scroll", function () {
    var header = document.querySelector(".logo");
    header.classList.toggle('sticky', window.scrollY > 0);

    // Adjust logo size based on scroll position
    var maxLogoHeight = 50; // Max height for the logo
    var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    var newLogoHeight = maxLogoHeight - (maxLogoHeight * scrollPercentage);

    // Ensure the new height is not less than 0
    newLogoHeight = Math.max(newLogoHeight, 0);
    
    logo.style.maxHeight = newLogoHeight + "px";
});

//for reactive navbar
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click",()=>{
    menu.classList.add('active');
}); 
closeBtn.addEventListener("click",()=>{
    menu.classList.remove('active');
});
 
//drop down
function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

function closeDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.remove('show');
}


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
