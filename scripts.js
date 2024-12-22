
document.querySelectorAll('.animated-svg').forEach(svg => {
    svg.addEventListener('mouseenter', () => {
        svg.style.animation = 'float-hover 2s infinite ease-in-out';
    });
    svg.addEventListener('mouseleave', () => {
        svg.style.animation = 'float 5s infinite ease-in-out';
    });
});

@keyframes float-hover {
    0%, 100% {
        transform: translateY(0) scale(1.1);
    }
    50% {
        transform: translateY(-20px) scale(1.1);
    }
}
