"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { ExternalLink, Github, Layers } from "lucide-react";
import { useState } from "react";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen relative flex flex-col justify-center py-24 bg-[#F0F0F2] snap-start overflow-hidden">

            {/* Watermark */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none">
                <span className="font-display font-bold text-[15vw] leading-none text-black/[0.02] tracking-tighter pl-10">
                    WORKS
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">Selected Projects</span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">FEATURED</h2>
                    </div>
                    <p className="max-w-md text-black/60 leading-relaxed text-sm">
                        A collection of digital products and experiments crafted with precision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SITE_DATA.projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white border border-black/[0.05] rounded-xl overflow-hidden shadow-sm hover:shadow-studio-hover hover:-translate-y-1 transition-all duration-500"
        >
            {/* Image Area - Minimal monochrome placeholder */}
            <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                {/* Simulated content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Layers size={48} className="text-black" />
                </div>

                {/* Chips */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="text-[10px] font-bold font-mono bg-white/90 text-black px-2 py-1 rounded-md border border-black/5 shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex gap-4 pt-4 border-t border-black/[0.05]">
                    <a href={project.links.github} target="_blank" className="text-xs font-bold uppercase tracking-wider text-black/40 hover:text-primary transition-colors flex items-center gap-1">
                        <Github size={14} /> Code
                    </a>
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" className="text-xs font-bold uppercase tracking-wider text-black/40 hover:text-primary transition-colors flex items-center gap-1">
                            <ExternalLink size={14} /> Live
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
