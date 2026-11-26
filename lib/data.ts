// All site content lives here. Edit this file to update the page.

export type Mark =
    | { kind: "ticks" } // 120 ticks in twelve groups of ten
    | { kind: "dots-solid" } // 500 filled dots
    | { kind: "dots-one" } // 300 hollow dots, the five of us counted
    | { kind: "one-of-four"; index: number };

export type Link = { label: string; href: string };

export type Entry = {
    id: string;
    kind: "Internship" | "Project, live" | "Project" | "Award";
    when?: string;
    title: string;
    role: string;
    description: string;
    stack: string[];
    links?: Link[];
    // A screenshot, shown in place of a drawn mark.
    image?: { src: string; alt: string; href: string };
    result: { figure: string; unit: string; mark?: Mark; caption?: string[] };
};

export const SITE = {
    name: "Jaisev Sachdev",
    url: "https://jaisev.com",
    // Shown beside the name: the facts a recruiter filters on first.
    tagline: ["Computer Science, NUS", "Year 2, graduating 2029", "Singapore"],
    description:
        "Jaisev Sachdev is a second-year Computer Science student at NUS who builds software around AI. Full-stack intern at Venti Technologies, primary developer of a school portal used by about 500 people, and a track winner at the MIT Bitcoin Hackathon.",
    ask: "I’m a second-year at NUS, looking for a software engineering internship for summer 2027.",
    email: "jaisevsachdev06@gmail.com",
    resume: "/resume.pdf",
    github: "https://github.com/Jaisev-Sachdev",
    linkedin: "https://www.linkedin.com/in/jaisev",
    location: "Singapore",
    updated: "Nov 2026",
};

export const ENTRIES: Entry[] = [
    {
        id: "r1",
        kind: "Internship",
        when: "May – Aug 2026",
        title: "Venti Technologies",
        role: "Full-Stack Software Engineer Intern · 12 weeks",
        description:
            "Built an internal AI development platform on Kubernetes that moved coding-agent runtimes off engineers’ laptops and into isolated environments they open in a browser. I designed and delivered the control plane end to end, and put all LLM traffic behind one auditable proxy.",
        stack: ["Python", "TypeScript", "Kubernetes (GKE)", "LiteLLM", "Langfuse"],
        result: {
            figure: "120+",
            unit: "pull requests merged",
            mark: { kind: "ticks" },
            caption: ["~650 automated tests · 2 teams onboarded", "Calls to 7 models now logged in one place"],
        },
    },
    {
        id: "r2",
        kind: "Project, live",
        when: "Aug 2026 – now",
        title: "Ascot Connect",
        role: "Primary developer · Ascot International School, Bangkok",
        description:
            "The school’s production portal for attendance, safeguarding, medical and finance. Access is enforced in the database with row-level security and school-domain Google sign-in, unknown accounts are denied by default, and sensitive records are never hard-deleted.",
        stack: ["Next.js", "TypeScript", "Supabase / PostgreSQL", "GitHub Actions"],
        result: {
            figure: "~500",
            unit: "active students and staff",
            mark: { kind: "dots-solid" },
            caption: ["Access rules covered by automated tests"],
        },
    },
    {
        id: "r3",
        kind: "Award",
        when: "2024",
        title: "MIT Bitcoin Hackathon",
        role: "Team lead, “Soles” · theme “Scaling Up”",
        description:
            "Soles is a decentralised sneaker-verification platform to fight counterfeits. I led the team, built the mobile MVP and defined the product roadmap.",
        stack: ["TypeScript", "React Native", "Expo"],
        links: [{ label: "Devpost, with the result", href: "https://devpost.com/software/soles" }],
        result: {
            figure: "1st",
            unit: "in its track",
            mark: { kind: "dots-one" },
            caption: ["Our team of 5, among about 300 participants", "Track 2: Decentralized Applications"],
        },
    },
    {
        id: "r4",
        kind: "Internship",
        when: "May – Aug 2024",
        title: "Mega Pacific Land",
        role: "AI Solutions Intern",
        description:
            "Developed a TensorFlow engine to streamline a real-estate firm’s property listings, plus a deduplication pipeline that removed repeated listings from search.",
        stack: ["Python", "TensorFlow"],
        result: {
            figure: "−40%",
            unit: "manual data entry time",
            caption: ["Search result quality up ~25%"],
        },
    },
    {
        id: "r5",
        kind: "Project",
        when: "Nov 2026",
        title: "Tracklab",
        role: "Meta Global AI Developer Hackathon, indie track",
        description:
            "Film a physics experiment on a phone. A vision model tracks the moving objects frame by frame, physics fits I wrote turn the tracks into numbers, and an agent runs the whole lab: it picks what to track, recovers when tracking fails, and writes a report in which every number has to come from a tool.",
        stack: ["TypeScript", "Next.js", "SAM 3.1", "agent tooling"],
        links: [
            { label: "Demo video", href: "https://www.youtube.com/watch?v=ClpfEV7ujbk" },
            { label: "Live", href: "https://tracklab-olive.vercel.app" },
            { label: "Code", href: "https://github.com/Jaisev-Sachdev/tracklab" },
        ],
        image: {
            src: "/work/tracklab.jpg",
            alt: "Tracklab tracking a pendulum while its lab-partner agent lists each step it takes",
            href: "https://tracklab-olive.vercel.app",
        },
        result: {
            figure: "0.02%",
            unit: "error on g, in benchmark",
            caption: ["Six simulated pendulums of known length", "3.5% low on real footage, and it says why"],
        },
    },
    {
        id: "r6",
        kind: "Project",
        when: "May – Aug 2026",
        title: "Courseway",
        role: "Team project · NUS Orbital 2026, Apollo 11",
        description:
            "A degree planner for NUS students. It builds a four-year plan, recommends modules with an AI advisor that knows your goals, checks prerequisites with a recursive parser, and tracks graduation requirements.",
        stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        links: [
            { label: "Live", href: "https://courseway-frontend.vercel.app" },
            { label: "Code", href: "https://github.com/Jaisev-Sachdev/orbital" },
            {
                label: "Orbital certificate",
                href: "https://credentials.nus.edu.sg/9d981103-6760-4050-bee4-3a2017ebfcd0#acc.I63Ae5dC",
            },
        ],
        image: {
            src: "/work/courseway-advisor.jpg",
            alt: "Courseway suggesting modules, each with the reason it was recommended",
            href: "https://courseway-frontend.vercel.app",
        },
        result: {
            figure: "13",
            unit: "features shipped",
        },
    },
    {
        id: "r7",
        kind: "Project",
        when: "2026",
        title: "Polymarket trading bots",
        role: "Personal project",
        description:
            "Bots that tested four strategies on short-dated prediction markets: arbitrage, hedged positions, liquidity farming and crypto price-feed lag. I forecast outcomes with statistical models and Monte Carlo simulation, and backtested each strategy before putting capital in.",
        stack: ["Python", "Monte Carlo", "backtesting"],
        links: [
            {
                label: "Related code: live odds tracker",
                href: "https://github.com/Jaisev-Sachdev/polymarket-edge-tracker",
            },
        ],
        result: {
            figure: "1 of 4",
            unit: "strategies held up",
            mark: { kind: "one-of-four", index: 2 },
            caption: ["Only liquidity farming paid steadily once live."],
        },
    },
];

export type Other = {
    title: string;
    note: string;
    description: string;
    links: Link[];
};

// Smaller work, one line each.
export const ALSO_BUILT: Other[] = [
    {
        title: "Autonomous AI agent org",
        note: "2026 · self-hosted",
        description:
            "A multi-agent system I ran on a VPS. The agents erred confidently at scale, so I wrote approval rules that limit what they can do unsupervised.",
        links: [],
    },
    {
        title: "n8n personal assistant",
        note: "2025",
        description: "Manages calendar, tasks and notes over Telegram, using agents and vector memory.",
        links: [{ label: "Code", href: "https://github.com/Jaisev-Sachdev/n8n-workflows" }],
    },
];

export const EDUCATION: { school: string; detail: string; coursework?: string[] }[] = [
    {
        school: "National University of Singapore",
        detail: "Bachelor of Computing in Computer Science, Aug 2025 – May 2029. SoC Leadership Programme.",
        coursework: [
            "CS2030S Programming Methodology II",
            "CS2040S Data Structures and Algorithms",
            "CS2100 Computer Organisation",
            "CS1231S Discrete Structures",
            "IS2238 Economics of IT and AI",
            "IT2900 Technical Management and Leadership",
        ],
    },
    {
        school: "Nexus International School",
        detail: "IB Diploma, 41 / 45. Top grade in every Higher Level subject.",
    },
];

export const SKILLS: [string, string][] = [
    ["Languages", "Python, Java, TypeScript, C, SQL"],
    ["AI & ML", "TensorFlow, scikit-learn, LiteLLM, Langfuse"],
    ["Web", "React, Next.js, Node.js, Supabase, PostgreSQL"],
    ["Infra", "Kubernetes, Docker, GitHub Actions, GCP, AWS"],
];
