# Bilingual CV and portfolio update
Source: CV_Maria_Alejandra_Ortiz_Tecnologa.pdf. Branch: feat/bilingual-cv-update.
Delivery: separate CV and portfolio commits; checks: PDF text/page checks, node --test tests/*.test.mjs, lint, build.

## Specs
S1. "ayudame cambiando, actualizando mi hoja de vida, esta en la carpeta raiz con este nombre CV_Maria_Alejandra_Ortiz_Tecnologa adapatala en el idiona ingles tambien" — improve the Spanish CV and supply an English version.
S2. "Ambos: documento y portafolio" — synchronize the website's Spanish and English profile and downloads with the supplied PDF.
S3. "Está al día" — retain source facts; no invented experience, qualifications, metrics or English proficiency.

## Tasks
T1 | S1, S3 | inline | in_progress | Improve Spanish CV, translate to English and verify generated PDFs; commit pending.
T2 | S2, S3 | inline | pending | Update bilingual profile, skills, experience and language-specific downloads with regression tests; commit pending.

## Log
L1. User: "ayudame cambiando, actualizando mi hoja de vida, esta en la carpeta raiz con este nombre CV_Maria_Alejandra_Ortiz_Tecnologa adapatala en el idiona ingles tambien"
L2. User: "continua". Scope clarification: "Ambos: documento y portafolio"; source status: "Está al día". User repeated: "continua".
L3. Source PDF extracted using pdftotext. It includes TreesSide Developers (2026–present), GHT internship (April–October 2026), three production projects, five academic projects and November 2026 certification. Preserve original untracked uploads and published project selection. Preserve prior website omission of internship employer; the documents retain the source employer.
L4. Plan: editable print-ready HTML and two PDFs under public/documents; no dependency installation. Existing Edge can print HTML. Existing PDF aliases retained. No visual redesign of the portfolio. Native review CLI unavailable (gentle-ai: command not found); facade assessment will be attempted after source changes.
