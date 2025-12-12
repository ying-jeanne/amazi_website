import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                        <img src="/assets/logo.png" alt="Amazi Moto" className="h-12 w-auto" />
                        <span className="hidden sm:inline"><span className={`font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>Amazi Moto</span></span>
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#about" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-900' : 'text-white'}`}>About</a>
                    <a href="#services" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-900' : 'text-white'}`}>Services</a>
                    <a href="#impact" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-900' : 'text-white'}`}>Impact</a>
                    <a href="#stations" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-900' : 'text-white'}`}>Network</a>
                    <a href="#contact" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-900' : 'text-white'}`}>Contact</a>
                    <a
                        href="#contact"
                        className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-sky-600 transition-colors shadow-sm hover:shadow-md"
                    >
                        Get Started
                    </a>
                </nav>

                {/* Mobile Menu Button Placeholder */}
                <button className={`md:hidden p-2 transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
