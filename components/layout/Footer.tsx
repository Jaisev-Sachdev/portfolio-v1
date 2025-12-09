import { SITE_DATA } from "@/lib/data";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h4 className="font-display font-bold text-lg">{SITE_DATA.name}</h4>
                    <p className="text-sm text-white/50">{SITE_DATA.role}</p>
                </div>

                <div className="flex gap-4">
                    <a href={SITE_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[rgb(var(--primary))] transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={SITE_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[rgb(var(--primary))] transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={SITE_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[rgb(var(--primary))] transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>

                <div className="text-sm text-white/30">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
