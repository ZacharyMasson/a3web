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