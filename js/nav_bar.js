document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const dropdownButton = document.querySelector('.dropBtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownContainer = document.querySelector('.dropdown');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // Check the screen width and toggle the mobile-dropdown class
    function toggleMobileDropdown() {
        if (window.innerWidth <= 768) {
            dropdownContainer.classList.add('mobile-dropdown');
        } else {
            dropdownContainer.classList.remove('mobile-dropdown');
        }
    }

    // Initial check on page load
    toggleMobileDropdown();

    // Check on window resize
    window.addEventListener('resize', toggleMobileDropdown);
});
