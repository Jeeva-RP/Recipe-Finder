// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-lg mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white hover:text-blue-400" size={20} />
                    </a>
                    <a href="https://www.instagram.com/jeeva._.19?igsh=eDRubXh6MWk3YmRm" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-pink-400" size={20} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-white hover:text-red-400" size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jeeva-r-p" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400" size={20} />
                    </a>
                </div>
                <p className="text-sm mt-4 text-center">
                    © {new Date().getFullYear()} All Rights Are Reserved * <br />by
                    <br />
                    Semmaiya Samaikurom Bayangarama Rusikurom! *
                </p>
                <p className="text-sm mt-2 text-center">
                    Contact Us: <span className="text-blue-400">+91 9842623963</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
