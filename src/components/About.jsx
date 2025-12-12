import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                            Built for Kigali. <br />
                            <span className="text-primary"><i>Powered by Innovation.</i></span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Established in 2023, Amazi Moto is dedicated to revolutionizing transportation in East Africa.
                            Located in the heart of Kimironko, Kigali, we understand the unique needs of our riders and the terrain they conquer every day.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our mission is simple: to provide accessible green mobility solutions that lower costs for drivers while protecting our environment.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">2023</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Founded</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">Kigali</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Based</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                        <img src="/assets/about.jpg" alt="Amazi Moto operations" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
