document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Mobile Navigation
    const hamburgerButton = document.getElementById('hamburger-button');
    const navbarNav = document.getElementById('navbarNav');
    const navbar = document.querySelector('.navbar');

    hamburgerButton.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
        navbar.classList.toggle('is-active');
    });
});
