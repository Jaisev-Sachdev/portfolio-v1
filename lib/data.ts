export const SITE_DATA = {
    name: "JAISEV",
    role: "{COMPUTER SCIENCE STUDENT @ NUS}",
    aboutImage: "/profile.jpg",
    about: [
        "I am currently pursuing an undergraduate degree in Computer Science at the National University of Singapore (NUS).",
        "I recently completed the International Baccalaureate Diploma Programme (IBDP), scoring 41 points, placing me in the top 5% of students worldwide. My passion for technology started early: I topped my 80-student cohort in IGCSE Computer Science and achieved a 7 in IB Higher Level Computer Science.",
        "I'm particularly interested in cryptocurrency investing, fascinated by the potential of blockchain technology. I also have a strong interest in AI and cybersecurity, and enjoy learning about new security challenges and solutions and the potential for AI to address these challenges."
    ],
    location: "SINGAPORE",
    email: "JAISEVSACHDEV06@GMAIL.COM",
    resumeUrl: "{RESUME_URL}",
    socials: {
        github: "https://github.com/Jaisev-Sachdev",
        linkedin: "www.linkedin.com/in/jaisev",
        twitter: "https://x.com/Jaisev_",
    },
    projects: [
        {
            id: 1,
            title: "AI vs Real Image Detector",
            description: "This project is a Binary Image Classifier capable of distinguishing between Real Photographs and AI-Generated Images (e.g., Midjourney, Stable Diffusion).\n\nIt achieves ~86% accuracy using Transfer Learning on the MobileNetV2 CNN architecture.\n\n🚀 Features\nLightweight Model: Uses MobileNetV2 for fast inference, even on CPUs.\n\nWeb Interface: Includes a Gradio app (app.py) to drag-and-drop images for testing.\n\nTunable Sensitivity: The UI features a slider to adjust the detection threshold, helping to catch subtle AI fakes.\n\nTraining Script: Complete, readable code (train_model.py) to train your own version on custom datasets.",
            tags: ["Python", "Computer Vision", "Deep Learning", "CNN", "Transfer Learning"],
            tech: ["Python", "TensorFlow/Keras", "MobileNetV2", "Gradio", "OpenCV"],
            links: {
                github: "https://github.com/Jaisev-Sachdev/ai-detector",
            },
            images: ["/projects/ai-detector.png"],
        },
        {
            id: 2,
            title: "PromptPilot",
            description: "An advanced prompt engineering tool that uses predictive AI context and deterministic templates to craft high-quality, structured LLM prompts",
            tags: ["AI", "LLM", "Prompt Engineering", "Next.js", "TypeScript", "React"],
            tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
            links: {
                github: "https://github.com/Jaisev-Sachdev/prompt-pilot",
                demo: "https://www.promptpilot.page/",
            },
            images: ["/projects/promptpilot.png"],
        },
    ],
    experience: [
        {
            id: 1,
            role: "Senior Frontend Engineer",
            company: "Tech Corp",
            date: "2023 - Present",
            description: "Leading the frontend team...",
        },
        {
            id: 2,
            role: "Frontend Developer",
            company: "Startup Inc",
            date: "2021 - 2023",
            description: "Built the main product...",
        }
    ],
    skills: {
        frontend: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "Express.js", "MySQL", "MongoDB"],
        tools: ["Git & GitHub", "Figma", "AWS", "Google Cloud", "Java", "Python", "NumPy", "Pandas", "SciPy", "Matplotlib", "TensorFlow", "Keras"]
    }

};
