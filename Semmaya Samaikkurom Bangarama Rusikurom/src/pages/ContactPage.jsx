// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-[#faf9fb] p-10 flex-1">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                
                <p className="text-lg mb-4">
                    We would love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us. Your thoughts and experiences are important to us, and we are always looking for ways to improve your experience with our recipe finder.
                </p>

                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-lg mb-4">
                    For any inquiries, you can contact us via the following methods:
                </p>

                <ul className="list-disc list-inside mb-4">
                    <li><strong>Email:</strong> eiedevilops@recipefinder.com</li>
                    <li><strong>Phone:</strong> +919842623963</li>
                    <li><strong>Social Media:</strong> Follow us on our social media platforms for the latest updates!</li>
                    <li><strong>Address:</strong>
                        <div className="ml-4">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22EIR022, 22EIR032, 22EIR036,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; III Year 'A' Section EIE Department,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kongu Engineering College,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perundurai - 638060.
                        </div>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
                <form className="bg-white p-4 rounded shadow-md mb-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="border rounded w-full p-2"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="border rounded w-full p-2"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="border rounded w-full p-2"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Send Message
                    </button>
                </form>

                <p className="text-lg">
                    Thank you for reaching out! We appreciate your interest in our recipe finder, and we will get back to you as soon as possible.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
