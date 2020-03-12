var intSlideIndex = -1;
var extSlideIndex = -1;
var carSlideIndex = -1;
intShowSlides();
extShowSlides();
carShowSlides();

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


function carShowSlides() {
  var i;
  var slides = document.getElementsByClassName("car");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  carSlideIndex++;
  if (carSlideIndex > slides.length - 1) { carSlideIndex = 0 }
  slides[carSlideIndex].style.display = "block";
  setTimeout(carShowSlides, 10000);
}