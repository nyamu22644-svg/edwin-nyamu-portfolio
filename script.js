// Typewriter effect for name on home page
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typewriter on home page
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        typeWriter(typewriterElement, 'Edwin Nyamu');
    }

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

// Enhanced form validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
        let errors = [];

        if (name.length < 2) {
            isValid = false;
            errors.push('Name must be at least 2 characters long.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errors.push('Please enter a valid email address.');
        }

        if (message.length < 10) {
            isValid = false;
            errors.push('Message must be at least 10 characters long.');
        }

        if (isValid) {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        } else {
            alert('Please correct the following errors:\n' + errors.join('\n'));
        }
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});