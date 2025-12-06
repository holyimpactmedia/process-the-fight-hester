"use client";

import { motion } from "framer-motion";

export default function Topics() {
    const topics = [
        {
            emoji: "🙏",
            title: "Pushing Through Pain",
            description: "Learn how to push through the pain and challenges that life throws at you. Discover the strength within to overcome any obstacle."
        },
        {
            emoji: "🏆",
            title: "Winning A Fixed Fight",
            description: "When it feels like everything is stacked against you, learn the principles to emerge victorious in battles that seem impossible to win."
        },
        {
            emoji: "🎯",
            title: "Championing Areas of Victory",
            description: "It's not just about making it through—it's about thriving. Learn to identify and champion the areas where you are destined to win."
        }
    ];

    return (
        <section id="topics" className="py-24 bg-brand-gray">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">
                        Take A Sneak Peak
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading text-brand-black">
                        Topics Covered In The Book
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-yellow/10 rounded-bl-full -mr-8 -mt-8"></div>

                            <div className="w-16 h-16 bg-brand-gray rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner">
                                {topic.emoji}
                            </div>

                            <h3 className="text-2xl font-heading text-brand-black mb-4">
                                {topic.title}
                            </h3>

                            <p className="text-gray-600 mb-8 flex-grow">
                                {topic.description}
                            </p>

                            <a
                                href="https://apostlehester.gumroad.com/l/rourc?layout=profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden inline-block bg-brand-yellow text-brand-black font-bold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md mt-auto"
                            >
                                <span className="relative z-10">ORDER NOW</span>
                                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
