import './style.css';

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.scroll-to-top');
    if (button) {
        button.addEventListener('click', scrollToTop);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                button.style.display = 'flex';
            } else {
                button.style.display = 'none';
            }
        });
    }
});
