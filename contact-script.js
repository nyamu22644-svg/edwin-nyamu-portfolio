// Contact page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Terminal form validation and submission
    const terminalForm = document.getElementById('terminal-form');
    const senderNameInput = document.getElementById('sender-name');
    const senderEmailInput = document.getElementById('sender-email');
    const messageTextarea = document.getElementById('message');
    const terminalOutput = document.querySelector('.terminal-output');

    // Add typing effect to terminal output
    function addToTerminal(text, delay = 500) {
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerHTML = text;
            terminalOutput.appendChild(p);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }, delay);
    }

    // Form validation
    function validateForm() {
        const name = senderNameInput.value.trim();
        const email = senderEmailInput.value.trim();

        if (!name) {
            addToTerminal('<span class="terminal-prompt">$</span> <span style="color: #ff6b6b;">ERROR: Sender name required</span>');
            senderNameInput.focus();
            return false;
        }

        if (!email) {
            addToTerminal('<span class="terminal-prompt">$</span> <span style="color: #ff6b6b;">ERROR: Sender email required</span>');
            senderEmailInput.focus();
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            addToTerminal('<span class="terminal-prompt">$</span> <span style="color: #ff6b6b;">ERROR: Invalid email format</span>');
            senderEmailInput.focus();
            return false;
        }

        return true;
    }

    // Form submission handler
    terminalForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const name = senderNameInput.value.trim();
        const email = senderEmailInput.value.trim();
        const message = messageTextarea.value.trim();

        // Add transmission sequence to terminal
        addToTerminal('<span class="terminal-prompt">$</span> ./transmit_message --name="' + name + '" --email="' + email + '"');
        addToTerminal('<span style="color: #ffff00;">Initializing secure transmission...</span>', 1000);
        addToTerminal('<span style="color: #ffff00;">Encrypting message...</span>', 2000);
        addToTerminal('<span style="color: #ffff00;">Routing through secure gateway...</span>', 3000);
        addToTerminal('<span style="color: #00ff41;">✓ Message transmitted successfully!</span>', 4000);
        addToTerminal('<span style="color: #00ff41;">Response will be sent to: ' + email + '</span>', 4500);

        // Clear form
        setTimeout(() => {
            senderNameInput.value = '';
            senderEmailInput.value = '';
            messageTextarea.value = '';
        }, 5000);

        // Note: In a real implementation, you would send this data to a server
        // For now, we'll just simulate the transmission
        console.log('Message transmission simulated:', { name, email, message });
    });

    // Add some initial terminal animations
    setTimeout(() => {
        addToTerminal('<span class="terminal-prompt">$</span> <span style="color: #ffff00;">system_status</span>');
        addToTerminal('<span style="color: #00ff41;">Gateway online - All systems operational</span>', 1000);
    }, 2000);

    // Matrix rain effect for background
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const matrixArray = matrix.split("");

        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px JetBrains Mono';

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 35);
    }

    // Initialize matrix rain effect
    createMatrixRain();

    // Resize canvas on window resize
    window.addEventListener('resize', function() {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Add click effects to terminal buttons
    const terminalButtons = document.querySelectorAll('.terminal-button');
    terminalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});