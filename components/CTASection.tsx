"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section id="order" className="py-24 bg-gradient-to-br from-brand-red to-red-700 relative overflow-hidden flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Decorative Circle */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        className="relative order-last md:order-first"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto md:max-w-xl">
                            {/* Glow behind book */}
                            <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-3xl scale-75"></div>

                            <img
                                src="/images/book1.png"
                                alt="Don't Fight The Process Book"
                                className="relative z-10 object-contain w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-[0.9]"
                        >
                            DON'T FIGHT<br />
                            THE PROCESS,<br />
                            <span className="text-brand-yellow drop-shadow-lg">PROCESS<br />THE FIGHT</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-lg mx-auto md:mx-0"
                        >
                            Principles to help you process through life's changes and emerge victorious.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <a
                                href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-brand-yellow text-brand-black font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-transform shadow-2xl relative group overflow-hidden"
                            >
                                <span className="relative z-10">ORDER YOUR COPY NOW</span>
                                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                            <p className="mt-4 text-sm font-bold text-white/70 uppercase tracking-wider">
                                Instant access through Gumroad
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
