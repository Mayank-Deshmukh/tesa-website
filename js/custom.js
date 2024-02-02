// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    items: 3, // Display three items at a time
    margin: 10, // Adjust margin between items as needed
    loop: true, // Enable loop for continuous sliding
    nav: false, // Enable navigation arrows
    dots: true, // Disable pagination dots (optional)
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1, // Display one item on small screens
      },
      768: {
        items: 2, // Display two items on medium screens
      },
      992: {
        items: 3, // Display three items on large screens
      }
    }
  });



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Toggle the display property on click
    navbarToggler.addEventListener('click', function () {
        navbarCollapse.style.display = (navbarCollapse.style.display === 'none' || navbarCollapse.style.display === '') ? 'block' : 'none';
    });
});

