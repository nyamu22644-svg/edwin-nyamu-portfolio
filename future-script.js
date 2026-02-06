// Future page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Revenue Projection Chart
    const ctx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036'],
            datasets: [{
                label: 'Revenue Projection ($)',
                data: [100000, 500000, 5000000, 15000000, 100000000, 300000000, 600000000, 800000000, 950000000, 1100000000, 1500000000],
                borderColor: '#d4af37',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#d4af37',
                pointBorderColor: '#1a1a1a',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    titleColor: '#d4af37',
                    bodyColor: '#ffffff',
                    borderColor: '#d4af37',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(212, 175, 55, 0.1)'
                    },
                    ticks: {
                        color: '#a8b2d1',
                        callback: function(value) {
                            return '$' + (value / 1000000) + 'M';
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(212, 175, 55, 0.1)'
                    },
                    ticks: {
                        color: '#a8b2d1'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Animate strategic web connections
    const connections = document.querySelector('.connections-svg path');
    if (connections) {
        connections.style.strokeDasharray = connections.getTotalLength();
        connections.style.strokeDashoffset = connections.getTotalLength();
        connections.style.animation = 'drawLine 3s ease-in-out forwards';
    }

    // Neural network animation
    const neuralNodes = document.querySelectorAll('.node');
    neuralNodes.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.5}s`;
        node.classList.add('pulse');
    });

    // Shield scanning animation
    const scanLine = document.querySelector('.scan-line');
    if (scanLine) {
        scanLine.style.animation = 'scan 2s ease-in-out infinite';
    }

    // Growth chart animation
    const growthBars = document.querySelectorAll('.growth-bar');
    growthBars.forEach((bar, index) => {
        bar.style.animationDelay = `${index * 0.3}s`;
        bar.classList.add('grow');
    });
});

// CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes drawLine {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes scan {
        0%, 100% {
            transform: translateY(-20px);
            opacity: 0;
        }
        50% {
            transform: translateY(20px);
            opacity: 1;
        }
    }

    @keyframes grow {
        from {
            height: 0%;
        }
        to {
            height: var(--target-height);
        }
    }

    .pulse {
        animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);