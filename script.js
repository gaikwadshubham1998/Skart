// Scdocument.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});ript for navigation bar
