"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_DATA } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="min-h-screen relative flex items-center py-24 bg-background snap-start">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 relative aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-black/5 group max-w-xs md:max-w-sm mx-auto"
                >
                    <Image
                        src={SITE_DATA.aboutImage}
                        alt="Profile"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 280px, 384px"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-primary">
                        ABOUT <br /> THE AGENT
                    </h2>
                    <div className="space-y-6 text-xl text-black/60 leading-relaxed max-w-lg">
                        {(Array.isArray(SITE_DATA.about) ? SITE_DATA.about : [SITE_DATA.about]).map((paragraph, index) => (
                            <p key={index} className={index === 0 ? "text-xl font-medium text-black/80" : "text-base text-black/70"}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Watermark */}
            <div className="absolute right-0 bottom-20 opacity-[0.03] pointer-events-none select-none">
                <span className="font-display font-bold text-[15vw] leading-none">PROFILE</span>
            </div>
        </section>
    );
}
