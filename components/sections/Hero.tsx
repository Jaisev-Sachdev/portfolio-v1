"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/lib/data";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} id="hero" className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-background snap-start perspective-1000">

            {/* Background Graphic / Watermark - Fixed Position for Parallax feel */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
                <motion.span
                    style={{ y: textY, scale }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="font-display font-bold text-[20vw] leading-none text-black/[0.03] tracking-tighter"
                >
                    FUTURE
                </motion.span>
            </div>

            {/* Spline 3D Scene */}
            <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-10 w-full h-full">
                <iframe
                    src="https://my.spline.design/nexbotrobotcharacterconcept-Q58ShZue5nm7AgdQ85ZiwR7y/"
                    className="w-full h-full border-0 grayscale-[100%] contrast-[1.1] opacity-90 mix-blend-multiply"
                    title="3D Robot"
                />
            </motion.div>

            {/* Poster Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full pb-32 text-center pointer-events-none">
                <motion.div
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-6 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-mono tracking-widest text-black/60 uppercase">Available for work</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold text-[#4169E1] tracking-tighter mb-4">
                        {SITE_DATA.name.split(" ")[0]}
                    </h1>

                    <p className="mb-10 max-w-2xl mx-auto">
                        <span className="font-mono text-sm md:text-base tracking-[0.2em] text-[#4169E1] uppercase bg-white/80 backdrop-blur-sm border border-blue-100/50 px-6 py-3 rounded-full shadow-sm inline-block">
                            Computer Scientist & Aspiring Machine Learning Engineer
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="group relative px-8 py-3 bg-primary text-white rounded-full overflow-hidden shadow-studio hover:shadow-studio-hover transition-all duration-300"
                        >
                            <span className="relative z-10 font-bold text-sm tracking-wide group-hover:tracking-wider transition-all">
                                EXPLORE WORK
                            </span>
                            <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                        </a>

                        <a
                            href="#contact"
                            className="group relative px-8 py-3 bg-primary text-white rounded-full overflow-hidden shadow-studio hover:shadow-studio-hover transition-all duration-300"
                        >
                            <span className="relative z-10 font-bold text-sm tracking-wide group-hover:tracking-wider transition-all">
                                GET IN TOUCH
                            </span>
                            <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Side Indicators */}
            <div className="absolute bottom-12 left-12 hidden md:block z-20">
                <div className="flex flex-col gap-2 text-[10px] font-mono text-black/40">
                    <span>EST. 2025</span>
                    <span>BASED IN SINGAPORE</span>
                </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden md:block z-20">
                <div className="text-[10px] font-mono text-black/40 rotate-90 origin-right translate-x-2 animate-bounce">
                    SCROLL TO DISCOVER
                </div>
            </div>
        </section>
    );
}
