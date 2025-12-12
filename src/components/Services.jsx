import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Electric Moto Installment",
            description: "Own your electric motorcycle with our affordable, flexible installment plans designed for taxi drivers and businesses.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Battery as a Service (BaaS)",
            description: "Never worry about charging time. Swap your depleted battery for a fully charged one in minutes at our stations.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-24 bg-google-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive solutions for the modern moto taxi driver.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#contact" className="text-primary font-medium hover:text-sky-700 inline-flex items-center">
                                Learn more
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
