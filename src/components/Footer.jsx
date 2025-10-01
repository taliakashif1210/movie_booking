import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
            {/* Company Logo + Intro */}
            <div>
                <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold">MovieBooking</h3>
                </div>
                <p className="text-sm text-gray-600">
                    Book your favorite movies anytime, anywhere. 
                    Enjoy the latest releases, exclusive offers, and a seamless booking experience.
                </p>
            </div>

            {/* Movie Booking Links */}
            <div className="px-10">
                <h3 className="text-lg font-bold mb-4">MOVIE BOOKING</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Now Showing</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Upcoming Movies</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Top Rated</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Special Offers</a></li>
                </ul>
            </div>

            {/* Resources */}
            <div className="px-10">
                <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Booking Guide</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                    <li><a href="#" className="htext-gray-600 hover:text-gray-800">My Account</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Gift Cards</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Promotions</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Download App</a></li>
                </ul>   
            </div>

            {/* Right Column: Social + Legal */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left mt-3">
                <p className="text-sm mb-4 text-gray-600">
                    © {new Date().getFullYear()} MovieBooking. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mb-4">
                    <a href="#" className="text-gray-600 hover:text-pink-500">
                    <FaInstagram size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                    <FaFacebookF size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-sky-500">
                    <FaTwitter size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                    <FaLinkedinIn size={18} />
                    </a>
                </div>

                {/* Legal Links */}
                <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-gray-800">Terms of Service</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-800">Privacy Policy</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-800">Cookie Settings</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
