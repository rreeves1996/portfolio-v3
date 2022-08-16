var carousel = document.querySelector('.carousel');
const navBarButtons = [
    aboutButtonNav = document.getElementById("about-nav"),
    portfolioButtonNav = document.getElementById("portfolio-nav"),
    contactButtonNav = document.getElementById("contact-nav")];
const homeNavButtons = [
    aboutButtonHome = document.getElementById("about-home"),
    portfolioButtonHome = document.getElementById("portfolio-home"),
    contactButtonHome = document.getElementById("contact-home")];
const sections = [
    about = document.getElementById("about"),
    portfolio = document.getElementById("portfolio"),
    contact = document.getElementById("contact")];

for (let i = 0; i < sections.length; i++) {
    navBarButtons[i].addEventListener("click", function() {
        sections[i].scrollIntoView();
    });
    homeNavButtons[i].addEventListener("click", function() {
        sections[i].scrollIntoView();
    });
}

function navBarDisplay() {
    var navBar = document.getElementById("nav-bar");
    var scrollValue = window.scrollY;
    if(scrollValue < 800 && !navBar.classList.contains('hide') && !navBar.classList.contains('fade-out')) {
        hideNavBar();
    } else if(scrollValue > 800 && navBar.classList.contains('hide') || scrollValue > 800 && navBar.classList.contains('fade-out')) {
        
        showNavBar();
    } else {

    }
};

function showNavBar() {
    var navBar = document.getElementById("nav-bar");
    navBar.classList.remove('hide');
    navBar.classList.remove('fade-out');
};

function hideNavBar() {
    var navBar = document.getElementById("nav-bar");
    navBar.classList.add('fade-out');
    setTimeout(() => {
        navBar.classList.add('hide');
        navBar.classList.remove('fade-out');
    }, 1000);

};

window.addEventListener('scroll', navBarDisplay);

var flkty = new Flickity(carousel, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  contain: true
});
