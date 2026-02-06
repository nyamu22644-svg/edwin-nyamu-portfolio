// Add fade-in animation to main sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

// Form validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}