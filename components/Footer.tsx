"use client";

import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">

                    {/* Left Side */}
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <h3 className="text-2xl font-heading font-bold tracking-wide uppercase mb-2">
                            Process The Fight
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Principles to help you process through life's challenges
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="text-center md:text-right">
                        <span className="text-brand-red font-bold text-xs uppercase tracking-widest mb-4 block">
                            Connect With Apostle Hester
                        </span>
                        <div className="flex justify-center md:justify-end space-x-6">
                            <a
                                href="https://www.facebook.com/ApostleMDH"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 transform hover:scale-110"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/apostlehester.sr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 transform hover:scale-110"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © Copyright 2025. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
