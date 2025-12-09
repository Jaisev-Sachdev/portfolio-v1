"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import { SITE_DATA } from "@/lib/data";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            // Check both window and main element for flexibility
            const main = document.querySelector('main');
            const scrollValues = [
                window.scrollY,
                main ? main.scrollTop : 0
            ];
            const currentScroll = Math.max(...scrollValues);
            setIsScrolled(currentScroll > 50);
        };

        window.addEventListener("scroll", handleScroll);
        // Also attach to main if it exists
        const main = document.querySelector('main');
        if (main) {
            main.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (main) {
                main.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent overflow-hidden",
                isScrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-black/[0.03]" : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* SVG Filter Definition */}
            {/* SVG Filter Definition - Must not be display:none for some browsers */}




            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
                <Link href="/" className="font-display font-bold text-xl tracking-tight text-primary mix-blend-exclusion">
                    {SITE_DATA.name.split(" ")[0]}<span className="text-accent">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-black/60 hover:text-black transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-4 border-r border-black/10 pr-6 mr-2">
                        <a href={SITE_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors hover:scale-110">
                            <Github size={18} strokeWidth={1.5} />
                        </a>
                        <a href={`https://${SITE_DATA.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors hover:scale-110">
                            <Linkedin size={18} strokeWidth={1.5} />
                        </a>
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1GlHIxM9Fakb2ceVWykeg2M623hM-7QTL/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-wide uppercase bg-primary text-white rounded-full hover:bg-accent transition-colors duration-300 shadow-lg shadow-black/5"
                    >
                        <span>Resume</span>
                        <Download size={14} />
                    </a>
                </div>
            </div>

            {/* Scroll Progress - Minimal & Accent Colored */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
                style={{ scaleX }}
            />
        </motion.nav >
    );
}
