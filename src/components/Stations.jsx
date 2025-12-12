import React from 'react';

const Stations = () => {
    const stations = [
        { name: "Kimironko", count: 1 },
        { name: "Nyamirambo", count: 2 },
        { name: "Masaka", count: 1 },
        { name: "Kanombe", count: 1 },
        { name: "Gikondo", count: 1 },
        { name: "Kimisagara", count: 1 },
        { name: "Nyabugogo", count: 1 },
        { name: "Muhima", count: 1 },
        { name: "Kagugu", count: 2 },
    ];

    return (
        <section id="stations" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Swapping Network</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Amazi Moto Ltd operates a battery swap model supported by charging stations located across Kigali.
                        These stations ensure continuous accessibility and reduced downtime for all financed riders.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-12 max-w-4xl mx-auto">
                    {stations.map((station, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                            <span className="text-lg text-gray-800 font-medium">{station.name}</span>
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">{station.count}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-600 text-sm">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="font-semibold text-gray-900">11 Total Stations</span> across Kigali
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stations;
