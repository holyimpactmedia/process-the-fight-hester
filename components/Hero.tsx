"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const scrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.querySelector("#about");
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Bottom Yellow Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-4 md:h-8 bg-gradient-to-r from-brand-yellow to-yellow-400 z-10"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-brand-red font-bold tracking-widest text-sm mb-4 uppercase bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-red-600">
                                New Book Release
                            </span>
                        </motion.div>

                        <h1 className="leading-[0.9] mb-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="font-script text-4xl md:text-6xl text-brand-black ml-2"
                            >
                                Don't
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="font-heading text-[5rem] md:text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-red-700 relative inline-block"
                            >
                                FIGHT
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="absolute -bottom-2 left-0 w-full h-4 text-brand-yellow"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </motion.svg>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="font-script text-4xl md:text-5xl text-brand-black -mt-2 mb-2 ml-12 relative z-10"
                            >
                                the process,
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="font-heading text-[5rem] md:text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-red-700"
                            >
                                PROCESS
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="font-heading text-4xl md:text-6xl text-brand-black mt-2"
                            >
                                THE FIGHT
                            </motion.div>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
                        >
                            Transform every struggle into a stepping stone. Discover powerful principles that will help you process through life’s greatest challenges and emerge victorious.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden bg-brand-yellow text-brand-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg text-center"
                            >
                                <span className="relative z-10">ORDER NOW</span>
                                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                            <button
                                onClick={scrollToAbout}
                                className="border-2 border-brand-black text-brand-black font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-black hover:text-white transition-colors text-center"
                            >
                                LEARN MORE
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Book Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="relative w-full max-w-[650px] aspect-square">
                            {/* Yellow Base Block */}
                            <div className="absolute bottom-10 right-10 w-3/4 h-3/4 bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>

                            <Image
                                src="/images/book2.png"
                                alt="Don't Fight The Process, Process The Fight Book Cover"
                                fill
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
