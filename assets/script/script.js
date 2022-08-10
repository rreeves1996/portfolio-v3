const buttons = [
    aboutButton = document.getElementById("about"),
    portfolioButton = document.getElementById("portfolio"),
    contactButton = document.getElementById("contact")];
const sections = [
    about = document.getElementById("about"),
    portfolio = document.getElementById("portfolio"),
    contact = document.getElementById("contact")];

for (let i = 0; i < sections.length; i++) {
    sideButton[i].addEventListener("click", function() {
        sections[i].scrollIntoView();
    });
}

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  contain: true
});
