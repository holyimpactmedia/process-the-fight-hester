"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-brand-gray to-white overflow-hidden relative">
            {/* Background Speaker Image */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                    src="/images/bg-speaker.png"
                    alt="Background Texture"
                    fill
                    className="object-cover object-center opacity-15 mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left - Author Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/author.jpg"
                                alt="Apostle Marlon D. Hester Sr."
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-yellow rounded-full -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-brand-red rounded-full -z-10 opacity-20"></div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">
                            Meet The Author
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading text-brand-black mb-8">
                            Apostle Marlon D. Hester SR
                        </h2>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Author, Apostle Marlon D. Hester Sr. writes from personal experiences as a pastor, Entrepreneur, Husband & Father along with intense research.
                            </p>
                            <p>
                                Using his personal life as his backdrop, the author uses the gift of transparency in describing the keys to successful living & facing life's greatest challenges.
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

                        <div className="mt-10">
                            <a
                                href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden inline-block bg-brand-yellow text-brand-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
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
