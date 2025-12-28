document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const logoText = document.querySelector('.logo-text');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Scroll Effect
    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-white', 'shadow-sm', 'py-3');
            header.classList.remove('bg-transparent', 'py-5');

            logoText.classList.add('text-gray-900');
            logoText.classList.remove('text-white');

            navLinks.forEach(link => {
                link.classList.add('text-gray-900');
                link.classList.remove('text-white');
            });

            if (mobileMenuBtn) {
                mobileMenuBtn.classList.add('text-gray-600');
                mobileMenuBtn.classList.remove('text-white');
            }
        } else {
            header.classList.add('bg-transparent', 'py-5');
            header.classList.remove('bg-white', 'shadow-sm', 'py-3');

            logoText.classList.add('text-white');
            logoText.classList.remove('text-gray-900');

            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-gray-900');
            });

            if (mobileMenuBtn) {
                mobileMenuBtn.classList.add('text-white');
                mobileMenuBtn.classList.remove('text-gray-600');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init check

    // Mobile Menu
    // (Simple implementation if needed, though React code had a placeholder)
});
