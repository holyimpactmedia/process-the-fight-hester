"use client";

import { motion } from "framer-motion";

export default function MediaLogos() {
    const logos = [
        "Fast Company",
        "The Huffington Post",
        "Entrepreneur"
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl text-center">
                <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-8 block">
                    As Seen In
                </span>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="px-8 py-3 bg-gray-100 rounded-full text-gray-500 font-bold text-lg hover:bg-brand-gray hover:text-brand-black transition-colors cursor-default"
                        >
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
