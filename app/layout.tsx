import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Using Syncopate for that futuristic header feel
const syncopate = Syncopate({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-syncopate"
});

export const metadata: Metadata = {
    title: "Jaisev Sachdev",
    description: "A personal portfolio website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${syncopate.variable} bg-background text-foreground relative min-h-screen selection:bg-accent selection:text-black`}>
                <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                    {/* Subtle top-left glow (Cool White/Silver) */}
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/[0.03] rounded-full blur-[150px]"></div>
                    {/* Subtle bottom-right glow (Accent/Ice) */}
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[rgb(var(--accent))] opacity-[0.05] rounded-full blur-[150px]"></div>
                    {/* Vignette overlay for focus */}
                    <div className="absolute inset-0 bg-vignette opacity-80"></div>
                </div>
                {children}
            </body>
        </html>
    );
}
