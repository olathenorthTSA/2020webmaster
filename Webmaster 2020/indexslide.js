var carSlideIndex = -1;
carShowSlides();

function carShowSlides() {
    var i;
    var slides = document.getElementsByClassName("carSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    carSlideIndex++;
    if (carSlideIndex > slides.length - 1) { carSlideIndex = 0 }
    slides[carSlideIndex].style.display = "block";
    setTimeout(carShowSlides, 10000);
}