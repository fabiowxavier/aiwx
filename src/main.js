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
        color: 0x1ac8db,         // Custom color
        backgroundColor: 0x1B263B, // Background color
        points: 10,             // Density of points
        maxDistance: 20,        // Maximum connection distance
        spacing: 15,            // Spacing between points
        showDots: false         // Whether to show dots
    });
});
