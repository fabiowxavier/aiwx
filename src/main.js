import './styles/tailwind.css';
import './styles/styles.css';  

// Fetch and load the header
fetch('/header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('navbar-container').innerHTML = html;
})
.catch(error => console.error('Failed to load header:', error));

// Fetch and load the footer
fetch('/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer-container').innerHTML = html;
})
.catch(error => console.error('Failed to load footer:', error));


document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#vanta-bg",  // Apply the background to the whole page
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x18528a,         // Custom color
        backgroundColor: 0x1B263B, // Background color
        points: 10,             // Density of points
        maxDistance: 20,        // Maximum connection distance
        spacing: 15,            // Spacing between points
        showDots: true         // Whether to show dots
    });
});

// carousel

document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    const indicators = document.querySelectorAll("[data-carousel-slide-to]");
    let activeIndex = 0;
    let interval; 

    function showSlide(index) {
        // Hide all slides
        carouselItems.forEach((slide) => slide.classList.add("hidden"));
        // Show the correct slide
        carouselItems[index].classList.remove("hidden");

        // Update indicators
        indicators.forEach((dot, i) => {
            dot.classList.toggle("bg-white", i === index);
            dot.classList.toggle("bg-gray-400", i !== index);
        });

        activeIndex = index;
    }

    function nextSlide() {
        activeIndex = (activeIndex + 1) % carouselItems.length;
        showSlide(activeIndex);
    }

    function prevSlide() {
        activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(activeIndex);
    }

    function startAutoSlide() {
        clearInterval(interval); 
        interval = setInterval(nextSlide, 4500); // Auto-slide every 5 seconds
    }

    // Event listeners for buttons
    document.querySelector("[data-carousel-next]").addEventListener("click", function () {
        nextSlide();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });

    document.querySelector("[data-carousel-prev]").addEventListener("click", function () {
        prevSlide();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });

    // Event listeners for indicators (clicking a dot)
    indicators.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            showSlide(i);
            startAutoSlide(); // Restart auto-slide when user clicks an indicator
        });
    });

    showSlide(activeIndex); // Initialize the first slide
    startAutoSlide(); // Start automatic sliding
});
