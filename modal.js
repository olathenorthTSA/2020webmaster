// Get the modal
var modal = document.getElementById("myModal");

var modalPr = document.getElementById("ModalPrice");
var modalPer = document.getElementById("ModalPerform");
var modalRa = document.getElementById("ModalRange");
var modalUp = document.getElementById("ModalUpgrade");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var spanPr = document.getElementsByClassName("closePr")[0];
var spanPer = document.getElementsByClassName("closePer")[0];
var spanRa = document.getElementsByClassName("closeRa")[0];
var spanUp = document.getElementsByClassName("closeUp")[0];

// When the user clicks the button, open the modal 
function modl() {
  modal.style.display = "block";
}

function modlPr() {
  modalPr.style.display = "block";
}
function modlPer() {
  modalPer.style.display = "block";
}
function modlRa() {
  modalRa.style.display = "block";
}
function modlUp() {
  modalUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

spanPr.onclick = function () {
  modalPr.style.display = "none";
}

spanPer.onclick = function () {
  modalPer.style.display = "none";
}

spanRa.onclick = function () {
  modalRa.style.display = "none";
}

spanUp.onclick = function () {
  modalUp.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == modalPr) {
    modalPr.style.display = "none";
  }

  if (event.target == modalPer) {
    modalPer.style.display = "none";
  }

  if (event.target == modalRa) {
    modalRa.style.display = "none";
  }

  if (event.target == modalUp) {
    modalUp.style.display = "none";
  }
}

