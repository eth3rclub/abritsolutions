const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const scroll1 = window.scrollY;

var parent = document.getElementById("body")

if (screenWidth <= 520) {
  document.getElementById("prog").href = "#programms-mobile";
  document.getElementById("prochee-button").href = "#prochee-mobile";
  parent.removeChild(document.getElementById("plus"))
  parent.removeChild(document.getElementById("programms"))
  parent.removeChild(document.getElementById("prochee"))
}
if (screenWidth > 520) {
  document.getElementById("prog").href = "#programms";
  document.getElementById("prochee-button").href = "#prochee";
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("programms-mobile"))
  parent.removeChild(document.getElementById("programms-mobile"))
  parent.removeChild(document.getElementById("prochee-mobile"))
  parent.removeChild(document.getElementById("prochee-mobile"))
  parent.removeChild(document.getElementById("prochee-mobile"))
}