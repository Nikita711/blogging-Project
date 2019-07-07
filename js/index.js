// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("fonts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal1 = document.getElementById("myModal1");

// // Get the button that opens the modal
var btn1 = document.getElementById("subfont");

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// // When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal1.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}