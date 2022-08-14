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


var flkty = new Flickity(carousel, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  contain: true
});
