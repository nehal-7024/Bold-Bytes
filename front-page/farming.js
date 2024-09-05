let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let timer = null;

// Function to show the next slide
function showNextSlide() {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

// Function to start the slideshow
function startSlideshow() {
    timer = setInterval(showNextSlide, 2000); // Change the slide every 3 seconds
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(timer);
}

// Start the slideshow
startSlideshow();

// Add event listeners to the slideshow container
document.querySelector(".slideshow-container").addEventListener("mouseover", stopSlideshow);
document.querySelector(".slideshow-container").addEventListener("mouseout", startSlideshow);

// Show the first slide
slides[0].style.display = "block";
