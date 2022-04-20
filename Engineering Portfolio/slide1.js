var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(nn) {
  showSlides1(slideIndex1 += nn);
}

// Thumbnail image controls
function currentSlide1(nn) {
  showSlides1(slideIndex1 = nn);
}

function showSlides1(nn) {
  var ii;
  var slides1 = document.getElementsByClassName("mySlides1");
  var handle1 = setTimeout(showSlides1, 0);
  if (nn > slides1.length) {slideIndex1 = 1}
  if (nn < 1) {slideIndex1 = slides1.length}
  for (ii = 0; ii < slides1.length; ii++) {
      slides1[ii].style.display = "none";
  }
  slides1[slideIndex1-1].style.display = "block";
}






