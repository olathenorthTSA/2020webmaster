var intSlideIndex = -1;
var extSlideIndex = -1;
intShowSlides();
extShowSlides();

function intShowSlides() {
  var i;
  var slides = document.getElementsByClassName("iSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  intSlideIndex++;
  if (intSlideIndex > slides.length - 1) { intSlideIndex = 0 }
  slides[intSlideIndex].style.display = "block";
  setTimeout(intShowSlides, 10000);
}

function extShowSlides() {
  var i;
  var slides = document.getElementsByClassName("eSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  extSlideIndex++;
  if (extSlideIndex > slides.length - 1) { extSlideIndex = 0 }
  slides[extSlideIndex].style.display = "block";
  setTimeout(extShowSlides, 10000);
}

function currentSlide(n) {
  showSlides(slideIndex = n);

}