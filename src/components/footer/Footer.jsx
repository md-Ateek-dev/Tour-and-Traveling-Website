import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/logo/header-logo.png';
import weAccepts from '../../assets/we_assepts/cards.png';

const Footer = () => {
    // Discover Us links data
    const discoverLinks = [
        { path: "/guest-reviews", text: "Guests Reviews" },
        { path: "/about-us", text: "About Us" },
        { path: "/our-team", text: "Our Team" },
        { path: "/tour-managers", text: "Tour Managers" },
        { path: "/sales-partners", text: "Sales Partners" },
        { path: "/become-sales-partner", text: "Become a Sales Partner" },
        { path: "/careers", text: "Careers We're Hiring!" },
        { path: "/csr-policy", text: "CSR Policy" }
    ];

    // Support links data
    const supportLinks = [
        { path: "/contact-us", text: "Contact Us" },
        { path: "/feedback", text: "Leave Your Feedback" },
        { path: "/how-to-book", text: "How to Book" },
        { path: "/faq", text: "FAQ" },
        { path: "/travel-deals", text: "Travel Deals" },
        { path: "/covid-notice", text: "COVID-19 Public Notice" },
        { path: "/singapore-visa", text: "Singapore Visa" },
        { path: "/annual-return", text: "Annual Return" }
    ];

    return (
        <>
            <footer className="bg-[#e2ecf4] text-gray-800 py-8">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo & Description */}
                        <div className='me-10'>
                            <Link to="/">
                                <img src={headerLogo} alt="Simply India Logo" className="h-12 footer-logo" />
                            </Link>
                            <p className="text-sm text-justify">
                                Only Government Approved Guides Will Be Provided. Appointment Of Guide Is Based On Availability Of Legal Guides.
                            </p>
                            <h3 className="mt-3 font-semibold text-center">We Accept</h3>
                            <div className="flex items-center justify-center text-center mt-2">
                                <img src={weAccepts} alt="we accepts" className="h-8" />
                            </div>
                        </div>

                        {/* Discover Us */}
                        <div>
                            <h3 className="text-2xl font-extrabold mb-3 text-[#244e8a]">Discover Us</h3>
                            <ul className="space-y-2 text-sm">
                                {discoverLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.path} 
                                            className="hover:text-blue-500 cursor-pointer block"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-2xl font-extrabold mb-3 text-[#244e8a]">Support</h3>
                            <ul className="space-y-2 text-sm">
                                {supportLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.path} 
                                            className="hover:text-blue-500 cursor-pointer block"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-2xl font-extrabold mb-3 text-[#244e8a]">Contact</h3>
                            <div className="flex items-center space-x-2 mb-4">
                                <FaPhoneAlt className="text-white footer-icon p-2" />
                                <p className="text-sm">0522 – 4072275 <br/> +91-7379248409</p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2 mb-4">
                                <FaEnvelope className="text-white footer-icon p-2" />
                                <p className="text-sm">pravin@simplyindiaholidays.com <br/> info@simplyindiaholidays.com</p>
                            </div>
                            <div className="flex items-center space-x-2 mt-2 mb-4">
                                <FaMapMarkerAlt className="text-white footer-icon p-2" />
                                <p className="text-sm">First Floor, 647/044, 60 Feet Rd,<br/> Abhishekpuram, Jankipuram, <br/>Lucknow-226021, Uttar Pradesh</p>
                            </div>
                            <div className="flex space-x-3 items-center justify-center mt-1 mb-0">
                                <FaInstagram className="text-xl cursor-pointer bg-[#f14f3d] text-white icon-footer-social p-1 border-2 border-[#f14f3d]" />
                                <FaFacebookF className="text-xl cursor-pointer bg-blue-500 text-white icon-footer-social p-1 border-2 border-blue-500" />
                                <FaTwitter className="text-xl cursor-pointer bg-black text-white icon-footer-social p-1 border-2 border-black" />
                                <FaYoutube className="text-xl cursor-pointer bg-red-600 text-white icon-footer-social p-1 border-2 border-red-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-blue-200 mt-0'>
                <div className="container mx-auto px-6 md:px-12">
                    {/* Footer Bottom */}
                    <div className="text-center py-4 text-sm">
                        All Rights Copyright © 2025 Reserved By Simply India Holidays | Developed By <Link to='https://www.linkedin.com/in/mohd-ateek-80a949256' target='_blank' className="hover:underline">❤️Mohd Ateek</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;