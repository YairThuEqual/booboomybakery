const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
     navList.classList.toggle('active');
});

          

// slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
     showSlides(slideIndex += n);
}

function currentSlides(n) {
     showSlides(slideIndex = n);
}

function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("slide");
     if(n > slides.length) {slideIndex = 1}

     if(n < 1) {slideIndex = slides.length}

     for(i = 0; i < slides.length; i++){
          slides[i].style.display = "none";
     }

     slides[slideIndex - 1].style.display = "block";
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
     // Get the elements with the fade-right class
     var elements = document.querySelectorAll(".fade-right");
     
     // Function to check if element is in view
     function isElementInView(el) {
         var rect = el.getBoundingClientRect();
         return (
             rect.top >= 0 &&
             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
         );
     }
     
     // Function to handle scroll event
     function handleScroll() {
         // Loop through each element
         elements.forEach(function(element) {
             // If the element is in view, add animation class
             if (isElementInView(element)) {
                 element.classList.add("fade-right-animation");
             }
         });
     }
     
     // Attach scroll event listener
     window.addEventListener("scroll", handleScroll);
     
     // Trigger initial check in case elements are already in view on page load
     handleScroll();
 });
 