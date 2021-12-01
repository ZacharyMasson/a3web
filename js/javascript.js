// Mobile Navbar function, owner: Ridley
// Mobile Navbar function, owner: Ridley
function navBar(){
    var nav = document.getElementById("navbarmaster");
    if (nav.className === "navbar-menu") {
        nav.className += " responsive";
    } else{
        nav.className = "navbar-menu";
    }
    var bar = document.getElementById("headerbar");
    if (bar.className === "navbar-flex") {
        bar.className += " responsive";
    } else {
        bar.className = "navbar-flex";
    }
}

//Portfolio page slideshow, owner: Ridley
var slideIndex = 1; //Sets initial slide to slide 1 when user lands on page

function showSlides(n) { // This function controls which slide shows up as the variable slide index changes
  var i; //Set up variable for iteration
  var slides = document.getElementsByClassName("slide"); //Sets var slides, dots, and blurbs to relevant element classes
  var dots = document.getElementsByClassName("dot");
  var blurbs = document.getElementsByClassName("portfolio-blurb");
  if (n > slides.length) {slideIndex=1} //If n increases beyond slidelength, loop back to slideIndex 1
  if (n < 1) {slideIndex=slides.length} //If n decreases below 1, loop around to maximum slideIndex.
  for (i = 0; i < slides.length; i++) { // Set all slides to display = none
      slides[i].style.display = "none";
  }
  for (i = 0; i < blurbs.length; i++) { // Set all blurbs to display = none initially
    blurbs[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) { //For dots, currently not implemented
  dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block"; //Set slideIndex to display relevant slide and blurb, and set associated dot to 'active' class.
  blurbs[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex); // Execute showSlides function

// Next/previous controls
function plusSlides(n) { // This function enables control of slides through next and previous button
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

// Button to external application, owner: Ridley
function appLink() {
  var myWindow=window.open("https://arcg.is/1uDiH80");
}

//END Portfolio slideshow code

//Survey123 Js for Iframe. Owner: Zach
var survey123webform = document.getElementsByName('survey123webform')[0];
window.addEventListener("message",e=>{if(e.data){var t=JSON.parse(e.data);
"survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style.height=t.contentHeight+"px")&&(survey123webform.parentNode.style["padding-bottom"]="unset")}});

//Show pages (test) - owner: Zach
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

// Get users location and enter it in url to Google Maps directions - Owner: Zach WORK IN PROGRESS
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(MAPTIME);
  } else { 
    x.innerHTML = "Geolocation is not supported :'( ";
  }
}
// function that gets X and Y from user (if browser supports it) and enters
// variables into url
// NEXT - add the directions
function MAPTIME(position) {
  var x = position.coords.latitude
  var y = position.coords.longitude
  window.open("https://www.google.ca/maps/@"+x+","+y+"")
}