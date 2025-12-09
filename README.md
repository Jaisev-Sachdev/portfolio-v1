# Futuristic Portfolio Website

A sleek, reactive, and futuristic personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1.  Navigate to the project directory:
    ```bash
    cd portfolio-v1
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 customization

### Personal Details & Projects
All content is managed in `lib/data.ts`. You can easily update your:
- Name, Role, Bio
- Social Links
- Projects (Title, Description, Tags, Links)
- Skills
- Experience

### Styling
- **Colors**: Edit CSS variables in `app/globals.css` (look for `--primary`, `--secondary`, `--accent`).
- **Fonts**: Configured in `app/layout.tsx` and `tailwind.config.ts`.

### 3D Elements
The Hero section (`components/sections/Hero.tsx`) contains a placeholder for a Spline 3D scene.
To add your own:
1. Export your scene from Spline as a React component or URL.
2. Install `@splinetool/react-spline` (already in package.json).
3. Replace the placeholder in `Hero.tsx` with your `<Spline scene="..." />` component.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub.
2. Import the repository on Vercel.
3. It will automatically detect Next.js and deploy.

## 📄 License
MIT
