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
