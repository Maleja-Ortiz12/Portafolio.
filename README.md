This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## CV documents

The updated CV is available in Spanish at `/documents/cv-es.pdf` and in English at
`/documents/cv-en.pdf`. The portfolio selects the download for its active language.
Editable sources are `public/documents/cv-es.html` and `cv-en.html`, sharing `cv.css`.
The original uploaded `CV_Maria_Alejandra_Ortiz_Tecnologa.pdf` is preserved.

To update a CV, edit its HTML, open it in a browser and print to PDF using A4 paper,
100% scale, CSS-defined margins and no browser headers or footers. Save over the
matching `cv-es.pdf` or `cv-en.pdf`. Each CV should have two pages with selectable text.
Do not infer English proficiency from the existence of the English translation.

Run the content and PDF checks with `node --test tests/*.test.mjs` (Node 24).
PDF text and pagination checks require `pdftotext` on PATH; otherwise they report
an explicit skip. Run `npm run lint` and `npm run build` after website changes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
