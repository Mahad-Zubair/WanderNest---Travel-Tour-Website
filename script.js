// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu on Click
    const menuIcon = document.getElementById('menu-icon');
    const navlist = document.querySelector('.navlist');
    const topButton = document.querySelector('.top');

    menuIcon.addEventListener('click', () => {
        navlist.classList.toggle('open');
    });

    // Close menu when a link is clicked (for better UX on mobile)
    navlist.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navlist.classList.remove('open');
        }
    });

    // Sticky Header on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Show or hide the top button
        if (window.scrollY > 500) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    // Scroll to Top Button
    topButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
