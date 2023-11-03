// script.js
const box = document.querySelector('.box');
const triggerPoint = 200; // Adjust this value as needed

function animateOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= triggerPoint) {
        box.classList.add('animate');
    } else {
        box.classList.remove('animate');
    }
}

// Add a scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Initial check to handle animations if the element is already in the viewport on page load
animateOnScroll();
