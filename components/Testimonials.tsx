"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "I am truly excited for the blessing this book brings. Apostle Hester has a unique way of breaking down complex spiritual truths into practical steps. This is a must-read for anyone looking to grow.",
            name: "Kilby Pipkins"
        },
        {
            quote: "This book is absolutely phenomenal! The principles shared are not just theory but life-lived wisdom. It has completely changed my perspective on how to handle life's battles.",
            name: "Ronald Ellis"
        },
        {
            quote: "I'm so grateful and thankful to God for the obedience of Apostle Marlon D Hester Sr. I cannot wait to read this book. I know it will definitely be life-changing not only for myself, but for everyone!",
            name: "Shirley Williams"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">
                        What Readers Are Saying
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading text-brand-black">
                        Testimonials
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Static Top Yellow Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow"></div>

                            <div className="mb-4 text-brand-yellow text-5xl font-serif leading-none opacity-80">“</div>

                            <div className="flex-grow">
                                <p className="text-gray-600 text-lg mb-8 italic leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            <div className="text-brand-black font-bold text-lg border-t border-gray-100 pt-6">
                                — {testimonial.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
