import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-xl font-bold text-gray-800">
                            <span className="text-primary">Amazi</span> Moto
                        </span>
                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            Providing sustainable electric mobility solutions and battery-as-a-service in Kigali, Rwanda.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#about" className="hover:text-primary">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary">Services</a></li>
                            {/* <li><a href="#careers" className="hover:text-primary">Careers</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>1 KG 25 St</li>
                            <li>Kigali, Rwanda</li>
                            <li>amazimoto@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} Amazi Moto. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social icons placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
