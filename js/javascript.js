// Mobile Navbar function, owner: Ridley
function navBar(){
    document.getElementByClass("dropblock").style.display = block;
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

//Survey123 Js for Iframe. Owner: Zach
var survey123webform = document.getElementsByName('survey123webform')[0];
window.addEventListener("message",e=>{if(e.data){var t=JSON.parse(e.data);
"survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style.height=t.contentHeight+"px")&&(survey123webform.parentNode.style["padding-bottom"]="unset")}});

<<<<<<< HEAD
//LinkeinButton on team page Owner:Kerstyne
document.getElementById("KerstyneSocial").onclick=function(){
    location.href="www.linkedin.com/in/kerstyne-widmeyer-733010200/";};
=======

//Show pages (test) - owner: Zach
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}
>>>>>>> 9bbe0585cb3c15d68d28d158666ca956b32cebe8
