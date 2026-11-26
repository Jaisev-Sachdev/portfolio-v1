import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import { SITE } from "@/lib/data";
import "./globals.css";

const serif = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
    axes: ["opsz"],
    adjustFontFallback: false,
    variable: "--font-serif",
    display: "swap",
});

const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: `${SITE.name} — software engineer`,
    description: SITE.description,
    alternates: { canonical: "/" },
    openGraph: {
        title: `${SITE.name} — software engineer`,
        description: SITE.description,
        url: SITE.url,
        siteName: SITE.name,
        type: "website",
    },
    twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
    themeColor: "#ECEFE8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${serif.variable} ${mono.variable}`}>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
