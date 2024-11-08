// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-[#faf9fb] p-10 flex-1">
            <div className="max-w-screen-lg mx-auto">
                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                    <img src="public/Screenshot 2024-10-23 204937.png" alt="Website Logo" className="h-30 w-28" />
                </div>

                <h1 className="text-4xl font-bold mb-4">About Recipe Finder</h1> {/* Main heading style */}
                
                <p className="text-lg mb-4">
                    Welcome to Semmaiya Samaikurom Bayangarama Rusikurom! At Semmaiya Samaikurom Bayangarama Rusikurom, we are passionate about connecting you with the vibrant world of Tamil cuisine through our innovative recipe finder. Our platform is designed to simplify your cooking experience, making it easier to discover and prepare authentic dishes that celebrate our rich culinary heritage.
                </p>

                <h2 className="text-3xl font-bold mb-2">Our Mission</h2> {/* Subheading style */}
                <p className="text-lg mb-4">
                    Our mission is to empower home cooks and food enthusiasts to explore a diverse array of recipes while embracing the flavors of Tamil Nadu. We aim to provide a user-friendly experience that helps you find recipes based on dietary preferences, ingredients, and cooking styles, ensuring that everyone can enjoy the joy of cooking.
                </p>

                <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Personalized Recipe Finder:</strong> Our intuitive search tool allows you to filter recipes by ingredients, dietary restrictions, and cuisine types, making it easy to find the perfect dish for any occasion.</li>
                    <li><strong>Cooking Inspiration:</strong> Discover new cooking techniques and ingredients with our helpful tips and tutorials, designed to enhance your culinary skills and confidence in the kitchen.</li>
                    <li><strong>Community Connection:</strong> Join our growing community of food lovers! Share your cooking experiences, exchange tips, and connect with fellow enthusiasts who are just as passionate about Tamil cuisine as you are.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
                <p className="text-lg mb-4">
                    At Semmaiya Samaikurom Bayangarama Rusikurom, we believe in the power of food to bring people together. Our commitment to quality, authenticity, and user experience sets us apart. We strive to provide a platform that inspires creativity and fosters a love for cooking in every home.
                </p>

                <h2 className="text-3xl font-bold mb-2">Join Us on This Culinary Journey</h2>
                <p className="text-lg mb-4">
                    We invite you to explore our recipe finder, discover delightful dishes, and embark on a culinary adventure with us. Thank you for being a part of Semmaiya Samaikurom Bayangarama Rusikurom! Let’s cook up something delicious together!
                </p>

                <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                <p>If you have any questions, feel free to reach out through our contact page!</p>
            </div>
        </div>
    );
};

export default AboutPage;
