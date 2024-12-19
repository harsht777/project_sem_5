$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });

    function newDate() {
      return new Date().getFullYear();
    }
    $("#autodate").text(newDate());
});
// Get references to the form and popup elements
const form = document.getElementById('reservation-form');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Display the popup
  popup.style.display = 'flex';

  // Hide the popup after 5 seconds (5000 milliseconds)
  setTimeout(function() {
    popup.style.display = 'none';
  }, 5000);
});

// Event listener for closing the popup manually
popupClose.addEventListener('click', function() {
  popup.style.display = 'none';
});
