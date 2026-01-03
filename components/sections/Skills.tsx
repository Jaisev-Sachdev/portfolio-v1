"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen relative flex flex-col justify-center py-24 bg-[#E5E5E5] snap-start overflow-hidden">

            {/* Blueprint Grid Background - Simple CSS Pattern */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "30px 30px" }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">TECHNICAL ARSENAL</h2>
                    <p className="font-mono text-xs tracking-[0.3em] uppercase text-black/50">Skills</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SkillGroup title="Frontend Architecture" skills={SITE_DATA.skills.frontend} delay={0} />
                    <SkillGroup title="Backend & Systems" skills={SITE_DATA.skills.backend} delay={0.2} />
                    <SkillGroup title="DevOps & Tools" skills={SITE_DATA.skills.tools} delay={0.4} />
                </div>
            </div>
        </section>
    );
}

const SkillGroup = ({ title, skills, delay }: { title: string, skills: string[], delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white border border-black/10 p-8 shadow-sm"
    >
        <div className="flex items-center gap-3 mb-6 border-b border-black/5 pb-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <h3 className="font-bold text-sm tracking-wide uppercase">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-black/5 text-xs font-mono font-medium text-black/70 rounded hover:border-black/20 hover:text-black transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
)
