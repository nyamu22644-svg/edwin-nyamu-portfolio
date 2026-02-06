// Index page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
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

    // Terminal typing effect
    function typeTerminalText() {
        const terminalBody = document.querySelector('.terminal-body');
        if (!terminalBody) return;

        const commands = [
            { text: '$ whoami', delay: 1000 },
            { text: 'edwin-nyamu', delay: 500 },
            { text: '$ cat /etc/edgait/vision', delay: 1000 },
            { text: 'Architecting secure systems for the digital age', delay: 500 },
            { text: 'Building fintech, healthtech, and agtech solutions', delay: 500 },
            { text: 'Empowering Kenya\'s digital transformation', delay: 500 },
            { text: '$ ls /projects/', delay: 1000 },
            { text: 'edgait-mdm/  sovereign-funding/  hati/  dukabook/  auxeris/', delay: 500 },
            { text: '$ ./status_check', delay: 1000 },
            { text: '<span style="color: #00ff41;">✓ All systems operational</span>', delay: 500 }
        ];

        let currentIndex = 0;
        let currentCharIndex = 0;
        let currentElement = null;

        function typeNextChar() {
            if (currentIndex >= commands.length) return;

            const command = commands[currentIndex];

            if (currentCharIndex === 0) {
                const p = document.createElement('p');
                if (command.text.includes('$')) {
                    p.innerHTML = command.text;
                } else {
                    p.innerHTML = command.text;
                }
                terminalBody.appendChild(p);
                terminalBody.scrollTop = terminalBody.scrollHeight;
                currentElement = p;
            }

            currentCharIndex++;

            if (currentCharIndex >= command.text.length) {
                currentIndex++;
                currentCharIndex = 0;
                setTimeout(typeNextChar, command.delay);
            } else {
                setTimeout(typeNextChar, 50);
            }
        }

        // Clear existing content and start typing
        terminalBody.innerHTML = '';
        setTimeout(typeNextChar, 1000);
    }

    // Add hover effects to system cards
    function addCardHoverEffects() {
        const systemCards = document.querySelectorAll('.system-card');
        systemCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.4)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });
    }

    // Add click effects to terminal buttons
    function addTerminalButtonEffects() {
        const terminalButtons = document.querySelectorAll('.terminal-button');
        terminalButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    // Add security clearance animation
    function animateSecurityClearance() {
        const clearance = document.querySelector('.security-clearance');
        if (clearance) {
            setTimeout(() => {
                clearance.style.animation = 'none';
                clearance.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    clearance.style.transform = 'scale(1)';
                }, 200);
            }, 2000);
        }
    }

    // Add system status pulse
    function addSystemStatusPulse() {
        const statusDot = document.querySelector('.status-dot');
        if (statusDot) {
            statusDot.style.animation = 'pulse 2s ease-in-out infinite';
        }
    }

    // Initialize all effects
    createMatrixRain();
    typeTerminalText();
    addCardHoverEffects();
    addTerminalButtonEffects();
    animateSecurityClearance();
    addSystemStatusPulse();

    // Resize canvas on window resize
    window.addEventListener('resize', function() {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all secure panels
    document.querySelectorAll('.secure-panel').forEach(panel => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(panel);
    });
});