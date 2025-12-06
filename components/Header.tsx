"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Topics", href: "#topics" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Order", href: "#order" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <Link href="/" className="text-2xl font-heading font-bold text-brand-black tracking-wide uppercase">
                    Process The Fight
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-brand-black font-medium hover:text-brand-red transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group overflow-hidden bg-brand-yellow text-brand-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-md"
                    >
                        <span className="relative z-10">Order Now</span>
                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-brand-black font-medium text-lg"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-full text-center w-full inline-block shadow-md"
                            >
                                <span className="relative z-10">Order Now</span>
                                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
