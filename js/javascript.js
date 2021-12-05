// Modal box for maps on Location page, owner: Jade
// Code from https://www.w3schools.com/howto/howto_css_modals.asp & https://codepen.io/haydmills/pen/zLraGJ

// Get the modal
var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {
for (i = 0; i < modal_btn_multi.length; i++)
{
modal_btn_multi[i].setAttribute('data-index', i);
modalparent[i].setAttribute('data-index', i);
span_close_multi[i].setAttribute('data-index', i);
}
}

for (i = 0; i < modal_btn_multi.length; i++)
{
modal_btn_multi[i].onclick = function() {
var ElementIndex = this.getAttribute('data-index');
modalparent[ElementIndex].style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span_close_multi[i].onclick = function() {
var ElementIndex = this.getAttribute('data-index');
modalparent[ElementIndex].style.display = "none";
};
}
window.onload = function() {
setDataIndex();
};

window.onclick = function(event) {
if (event.target === modalparent[event.target.getAttribute('data-index')]) {
modalparent[event.target.getAttribute('data-index')].style.display = "none";
}

// OLD CODE
if (event.target === modal) {
modal.style.display = "none";
}
};

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
// Start Survey123 JS
var survey123webform = document.getElementsByName('survey123webform')[0];
window.addEventListener("message",e=>{if(e.data){var t=JSON.parse(e.data)
  "survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style.height=t.contentHeight+"px")&&(survey123webform.parentNode.style["padding-bottom"]="unset")}});


// Get users location and enter it in url to Google Maps directions - Owner: Zachary
// gets location from the user and if not allowed in browswer show error message
// first function is for toronto, second is montreal. 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(MAPTIME);
  } else { 
    x.innerHTML = "Geolocation is not supported :'( ";
  }
}
function getLocation2() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(MAPTIME2);
  } else { 
    x.innerHTML = "Geolocation is not supported :'( ";
  }
}
function MAPTIME(position) {
  var x = position.coords.latitude
  var y = position.coords.longitude
  window.open("https://www.google.ca/maps/dir/"+x+","+y+"/CN+Tower")
}
function MAPTIME2(position) {
  var x = position.coords.latitude
  var y = position.coords.longitude
  window.open("https://www.google.ca/maps/dir/"+x+","+y+"/Former+Craig+Pumping+Station,+2000+Avenue+Viger+E,+Montreal,+Quebec/@45.4817221,-73.6295888,12540m")
}
document.getElementById("button2tor").addEventListener("click touchstart", getLocation());
document.getElementById("button2mtl").addEventListener("click touchstart", getLocation2());

function LinkedinKW(){
  window.open('https://www.linkedin.com/in/kerstyne-widmeyer-733010200');
}
function LinkedinJL(){
  window.open('https://www.linkedin.com/in/jade-lacsamana-a7224b131/')
}
function LinkedinRS(){
  window.open('https://www.linkedin.com/in/ridley-soudack-1757081b4/')
}
function LinkedinVT(){
  window.open('https://www.linkedin.com/in/victor-toth-b750172b/')
}
function LinkedinZM(){
  window.open('https://www.linkedin.com/in/zachary-masson-495227198/?originalSubdomain=ca')
}