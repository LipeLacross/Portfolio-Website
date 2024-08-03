import './style.css'

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
    }
});


