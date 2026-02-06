// Typewriter effect for name on home page (only if element exists and not on home)
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

// Initialize typewriter on pages that have it (not home)
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

// Glass nav scroll effect for home page
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('solid');
        } else {
            header.classList.remove('solid');
        }
    }
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

// Smooth scrolling for navigation (only for same-page anchors)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // If href is a page (like index.html), let the browser handle navigation
    });
});

// Parallax effect for childhood page
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
    });
});

// FAB scroll to top functionality
const fab = document.querySelector('.fab');
if (fab) {
    fab.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Counter animation for education page
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the faster the animation

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;

            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        animate();
    });
}

// Trigger counter animation when mentorship section is in view
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}

// Set up intersection observer for mentorship section
document.addEventListener('DOMContentLoaded', function() {
    const mentorshipSection = document.querySelector('.mentorship-section');
    if (mentorshipSection) {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5
        });
        observer.observe(mentorshipSection);
    }
});