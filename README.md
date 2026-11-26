# jaisev.com

My personal site: a single page that lists what I have built next to what came of it.

Live at [jaisev.com](https://jaisev.com/).

## How it works

- **Content** lives in [`lib/data.ts`](lib/data.ts). Edit that file to add or change an entry; the page renders from it.
- **Layout** is [`app/page.tsx`](app/page.tsx), and all styling is plain CSS in [`app/globals.css`](app/globals.css).
- **Assets** are in `public/`: the resume PDF and project screenshots.

The page is static. It is built with Next.js 14 (App Router) and deployed on Vercel.

## Run it locally

```sh
npm install
npm run dev
```

Then open http://localhost:3000. Before pushing, check that it builds and lints:

```sh
npm run build
npm run lint
```

## License

MIT. See [LICENSE](LICENSE).
