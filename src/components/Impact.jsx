import React from 'react';

const Impact = () => {
    return (
        <section id="impact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                        Driving East Africa's <br />
                        <span className="text-primary">Green Revolution</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        We are more than just a moto company. We are a sustainability partner for Rwanda.
                        By transitioning to electric mobility, we reduce carbon emissions and create a cleaner,
                        healthier environment for our communities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">0%</div>
                            <div className="text-gray-600 font-medium">Carbon Emissions</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Battery Availability</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-gray-600 font-medium">Commitment to Kigali</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
