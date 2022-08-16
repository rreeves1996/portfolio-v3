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


// Loop to add scrolling function when hitting certain nav buttons
for (let i = 0; i < sections.length; i++) {
    navBarButtons[i].addEventListener("click", function() {
        sections[i].scrollIntoView();
    });
    homeNavButtons[i].addEventListener("click", function() {
        sections[i].scrollIntoView();
    });
}

// Function to hide navbar if user is on the header page
function navBarDisplay() {
    var navBar = document.getElementById("nav-bar");
    var scrollValue = window.scrollY;

    if(scrollValue < 700) {
        hideNavBar();
    } else if (scrollValue > 700 && !navBar.classList.contains('fade-out') && navBar.classList.contains('hide')) {
        // ^^ This prevents it from looping the fade-out animation as the user scrolls to a position where the nav bar should
        // be visible - navbar must not be going through fade-out animation in order for showNavBar() to be called. The fade-out
        // animation removes itself when finished and adds hide (which remains) 
        showNavBar();
    };
};

function showNavBar() {
    var navBar = document.getElementById("nav-bar");

    navBar.classList.remove('hide');
    navBar.classList.remove('fade-out');
};

function hideNavBar() {
    var navBar = document.getElementById("nav-bar");

    if (!navBar.classList.contains('hide') && !navBar.classList.contains('fade-out')) {
        navBar.classList.add('fade-out');
        setTimeout(() => {
            navBar.classList.remove('fade-out');
            navBar.classList.add('hide');
            console.log("1");
        }, 800);
    } else if (navBar.classList.contains('fade-out')) {
        console.log("2");
        return;
    } else if (navBar.classList.contains('hide')) {
        console.log("3");
        return;
    };
};

window.addEventListener('scroll', navBarDisplay);

var flkty = new Flickity(carousel, {
  // options
  cellAlign: 'left',
  wrapAround: true,
//   contain: true
});


function init() {
    var navBar = document.getElementById("nav-bar");
    var scrollValue = window.scrollY;
    if(scrollValue < 700) {
        hideNavBar();
    } else if (scrollValue > 700 && !navBar.classList.contains('fade-out') && navBar.classList.contains('hide')) {
        showNavBar();
    };
};