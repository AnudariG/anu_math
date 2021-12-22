function on() {
  document.getElementById("lightBulb").src = "./assets/img/on.png";
  document.getElementById("me-off").style.display = "none";
  document.getElementById("me-on").style.display = "block";
}

function off() {
  document.getElementById("lightBulb").src = "./assets/img/off.png";
  document.getElementById("me-off").style.display = "block";
  document.getElementById("me-on").style.display = "none";
}

