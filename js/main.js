
function moveWin() {
  window.scroll(0, 10000);
  setTimeout("moveWin();", 1000);
}
moveWin();

