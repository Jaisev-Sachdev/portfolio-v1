"use client";

import { motion } from "framer-motion";
import { Copy, Mail, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { SITE_DATA } from "@/lib/data";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(SITE_DATA.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!name.trim() || !email.trim()) {
            return;
        }

        setSubmitStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "ce585707-fb2d-458d-ba62-6104090f3383",
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim() || "(No message provided)",
                    subject: `Portfolio Contact: ${name.trim()}`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setName("");
                setEmail("");
                setMessage("");
                setTimeout(() => setSubmitStatus("idle"), 4000);
            } else {
                setSubmitStatus("error");
                setTimeout(() => setSubmitStatus("idle"), 4000);
            }
        } catch {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="min-h-screen relative flex items-center justify-center bg-background snap-start">
            <div className="container mx-auto px-4 relative z-10 max-w-xl">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white border border-black/10 p-8 md:p-12 shadow-studio text-center rounded-2xl relative overflow-hidden"
                >
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

                    <h2 className="font-display font-bold text-3xl mb-2">INITIATE CONTACT</h2>
                    <p className="text-black/60 mb-8 text-sm">Have a project in mind? Let's build something extraordinary.</p>

                    <div className="space-y-6">
                        <button
                            onClick={handleCopyEmail}
                            className="w-full group flex items-center justify-between p-4 bg-background border border-black/5 rounded-lg hover:border-black/20 transition-all active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded border border-black/5 group-hover:bg-accent/10 transition-colors">
                                    <Mail size={18} className="text-black/70 group-hover:text-accent" />
                                </div>
                                <span className="font-mono text-sm text-black/80">{SITE_DATA.email}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] uppercase font-bold tracking-wider transition-all ${copied ? "text-green-600" : "text-black/30 opacity-0 group-hover:opacity-100"}`}>
                                    {copied ? "Copied" : "Copy"}
                                </span>
                                <Copy size={14} className="text-black/40" />
                            </div>
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-black/5"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-black/40">Or Send Message</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4 text-left">
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="NAME" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full p-3 bg-background border border-black/5 rounded focus:outline-none focus:border-accent/50 text-sm font-mono transition-colors" 
                                />
                                <input 
                                    type="email" 
                                    placeholder="EMAIL" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full p-3 bg-background border border-black/5 rounded focus:outline-none focus:border-accent/50 text-sm font-mono transition-colors" 
                                />
                            </div>
                            <textarea 
                                rows={4} 
                                placeholder="MESSAGE OPTIONAL..." 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-3 bg-background border border-black/5 rounded focus:outline-none focus:border-accent/50 text-sm font-mono transition-colors resize-none"
                            ></textarea>

                            <button 
                                type="submit" 
                                disabled={submitStatus === "loading"}
                                className={`w-full py-4 font-bold text-sm tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-all ${
                                    submitStatus === "success" 
                                        ? "bg-green-600 text-white" 
                                        : submitStatus === "error"
                                        ? "bg-red-600 text-white"
                                        : "bg-primary text-white hover:bg-black"
                                } ${submitStatus === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {submitStatus === "loading" ? (
                                    <>
                                        <Loader2 size={14} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : submitStatus === "success" ? (
                                    <>
                                        <CheckCircle size={14} />
                                        <span>Message Sent!</span>
                                    </>
                                ) : submitStatus === "error" ? (
                                    <>
                                        <XCircle size={14} />
                                        <span>Failed - Try Again</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Transmit</span>
                                        <Send size={14} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Footer Minimal */}
                <div className="absolute -bottom-24 left-0 right-0 text-center">
                    <p className="text-[10px] text-black/30 font-mono uppercase">
                        © {new Date().getFullYear()} {SITE_DATA.name} / System v2.0
                    </p>
                </div>

            </div>
        </section>
    );
}
