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
function navBar(){ // This function appends the 'responsive' class to navbar elements when the hamburger menu is clicked, to adjust menu styling
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

function currentSlide(n) { // This function enables control of slides through the slideshow dots
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
  "survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style["padding-bottom"]="unset")}});
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
  window.open("https://www.google.ca/maps/dir/"+x+","+y+"/CN%2BTower")
}
function MAPTIME2(position) {
  var x = position.coords.latitude
  var y = position.coords.longitude
  window.open("https://www.google.ca/maps/dir/"+x+","+y+"/Former%2BCraig%2BPumping%2BStation%2C%2B2000%2BAvenue%2BViger%2BE%2C%2BMontreal%2C%2BQuebec/%4045%2E4817221%2C%2D73%2E6295888%2C12540m")
}
document.getElementById("button2tor").addEventListener("click touchstart", MAPTIME());
document.getElementById("button2mtl").addEventListener("click touchstart", MAPTIME2());
// Javascript used to call linkedin pages of each person on teams page Owner: Kerstyne
function LinkedinKW(){
  window.open('https://www.linkedin.com/in/kerstyne%2Dwidmeyer%2D733010200');
}
function LinkedinJL(){
  window.open('https://www.linkedin.com/in/jade%2Dlacsamana%2Da7224b131/')
}
function LinkedinRS(){
  window.open('https://www.linkedin.com/in/ridley%2Dsoudack%2D1757081b4/')
}
function LinkedinVT(){
  window.open('https://www.linkedin.com/in/victor%2Dtoth%2Db750172b/')
}
function LinkedinZM(){
  window.open('https://www.linkedin.com/in/zachary%2Dmasson%2D495227198/%3ForiginalSubdomain%3Dca')
}

// Video player section - Victor Toth
//javascript used to define the functions of the button for video 1

function playPause() { 
  var myVideo=document.getElementById("video1"); 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
//javascript used to define the functions of the button for video 2

function playPause2() { 
  var myVideo2=document.getElementById("video2"); 
  if (myVideo2.paused) 
    myVideo2.play(); 
  else 
    myVideo2.pause(); 
} 
