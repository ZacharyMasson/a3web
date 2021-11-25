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

//Survey123 Js for Iframe. Owner: Zachary Masson
var survey123webform = document.getElementsByName('survey123webform')[0];
window.addEventListener("message",e=>{if(e.data){var t=JSON.parse(e.data);
"survey123:onFormLoaded"===t.event&&t.contentHeight&&(survey123webform.parentNode.style.height=t.contentHeight+"px")&&(survey123webform.parentNode.style["padding-bottom"]="unset")}});