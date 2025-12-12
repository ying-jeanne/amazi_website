import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
            {/* Background Image Placeholder - to be replaced with optimized asset */}
            <div className="absolute inset-0 bg-gray-800">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img src="/assets/hero-bg.jpg" alt="Amazi Moto Fleet" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                    Green Transportation for East Africa
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                    Affordable electric motorcycle installments and reliable battery-as-a-service.
                    Driving Kigali forward, sustainably.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#services"
                        className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-full hover:bg-sky-600 transition-all shadow-lg hover:shadow-xl"
                    >
                        Our Services
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-full hover:bg-white/20 transition-all border border-white/20"
                    >
                        Find a Station
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
