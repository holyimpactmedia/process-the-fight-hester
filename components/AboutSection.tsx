"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Right Side Image with Fade */}
            {/* Desktop Background Image (Right Side) */}
            <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-full z-0">
                <Image
                    src="/images/bg-speaker.png"
                    alt="Apostle Marlon D. Hester Sr. speaking"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white to-transparent"></div>
            </div>

            {/* Mobile Background Image (Full) */}
            <div className="block lg:hidden absolute inset-0 z-0">
                <Image
                    src="/images/about-mobile.png"
                    alt="Apostle Marlon D. Hester Sr."
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="max-w-2xl lg:w-1/2 mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/95 p-8 rounded-2xl shadow-xl backdrop-blur-sm lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none text-center lg:text-left"
                    >
                        {/* Heading */}
                        <div className="mb-8 flex flex-col items-center lg:items-start">
                            <h3 className="text-3xl md:text-4xl font-black text-brand-yellow uppercase tracking-wide mb-1">
                                APOSTLE
                            </h3>
                            <h2 className="text-4xl md:text-6xl font-black text-brand-black uppercase leading-none tracking-tight">
                                MARLON D. HESTER S R
                            </h2>
                            <div className="w-24 h-1.5 bg-brand-yellow mt-4"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                            <p>
                                Author, Apostle Marlon D. Hester Sr. writes from personal experiences as a pastor, Entrepreneur, Husband & Father along with intense research.
                            </p>
                            <p>
                                Using his personal life as his backdrop, the author uses the gift of transparency in describing the keys to successful living & facing life&apos;s greatest challenges.
                            </p>
                            <p>
                                With many points of references in his life, he uses their experiences to help develop the principles and wisdom needed to succeed when facing challenges in life.
                            </p>
                            <p>
                                Biblical commentary and diligent study of the scripture is shared to give a broader expression for those looking to get victory before the fight of life starts.
                            </p>
                            <p>
                                He builds his case from his own successful moments in life which were personal nightmares before discovering the ability to not fight the process but rather processing the fight properly.
                            </p>
                            <p>
                                Hester reveals principles that will help you build a healthy life and shares his own personal victories to encourage all during their journey.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <a
                                href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-brand-yellow text-brand-black font-bold text-xl px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl relative group overflow-hidden"
                            >
                                <span className="relative z-10">ORDER NOW</span>
                                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
