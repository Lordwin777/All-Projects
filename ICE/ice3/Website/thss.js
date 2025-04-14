// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Animation duration
    easing: 'ease-in-out', // Animation easing
});

// Form submission handler
document.getElementById('research-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you soon.');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});