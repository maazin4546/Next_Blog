// app/contact/page.js
'use client';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 dark:bg-gray-900">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your message"
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.02]"
                    >
                        Send Message
                    </button>
                </form>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Feel free to reach out to us using the contact form or through:</p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Email:</span>
                            <span>mazin@gmail.com</span>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Phone:</span>
                            <span>+91 9028104546</span>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Address:</span>
                            <span>123 Business Street, Malegaon, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}