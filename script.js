document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('nav-open');

            const icon = mobileNavToggle.querySelector('i');
            if (mainNav.classList.contains('nav-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Optional: Basic validation for newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (!emailInput.value || !emailInput.value.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                emailInput.focus();
            } else {
                e.preventDefault();
                alert('Thank you for subscribing!');
                emailInput.value = '';
            }
        });
    }

});