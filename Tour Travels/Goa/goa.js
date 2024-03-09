window.addEventListener('DOMContentLoaded', function() {
    var currentImageIndex = 0;
    var images = document.querySelectorAll('#image-carousel img','#image-carousel1 img');
    var totalImages = images.length;

    // Function to show the next image
    function showNextImage() {
        images[currentImageIndex].style.display = 'none'; // Hide current image
        currentImageIndex = (currentImageIndex + 1) % totalImages; // Calculate index of next image
        images[currentImageIndex].style.display = 'block'; // Show next image
    }

    // Initially hide all images except the first one
    for (var i = 1; i < totalImages; i++) {
        images[i].style.display = 'none';
    }

    // Change image every 3 seconds
    setInterval(showNextImage, 1500);
});
document.querySelectorAll('a[href^="india.html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
// Example of dynamic content loading
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Process and display data on the webpage
    console.log(data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 1500); // Change image every 2 seconds
  }
  