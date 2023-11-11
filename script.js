const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const scroll1 = window.scrollY;
var parent = document.getElementById("body")

if (screenWidth <= 520) {
  document.getElementById("prog").href = "#programms-mobile";
  parent.removeChild(document.getElementById("plus"))
  parent.removeChild(document.getElementById("programms"))
}
if (screenWidth > 520) {
  document.getElementById("prog").href = "#programms";
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("programms-mobile"))
  parent.removeChild(document.getElementById("programms-mobile"))
}