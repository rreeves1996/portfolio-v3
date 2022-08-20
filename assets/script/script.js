var carousel = document.querySelector('.carousel');
var exploreButton = document.getElementById("explore-button");

const navBarButtons = [
    aboutNav = document.getElementById("about-nav"),
    portfolioNav = document.getElementById("portfolio-nav"),
    contactNav = document.getElementById("contact-nav")];
const sections = [
    about = document.getElementById("about"),
    portfolio = document.getElementById("portfolio"),
    contact = document.getElementById("contact")];

exploreButton.addEventListener("click", function() {
    setTimeout(() =>{
        exploreButton.setAttribute('data-before', ':)');
    }, 100);
    setTimeout(() =>{
        sections[0].scrollIntoView();
    }, 1000);
    setTimeout(() =>{
        exploreButton.setAttribute('data-before', 'explore');
    }, 2000);
});
// Loop to add scrolling function when hitting certain nav buttons
for (let i = 0; i < sections.length; i++) {
    navBarButtons[i].addEventListener("click", function() {
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

    exploreButton.setAttribute('data-before', 'explore');
};
init();
window.addEventListener('scroll', navBarDisplay);