// SITE configuration reads from Vite environment variables with sensible fallbacks.
// Set these in a `.env` file using `VITE_SITE_EMAIL`, `VITE_SITE_GITHUB`, `VITE_SITE_LINKEDIN`.
export const SITE = {
  email: import.meta.env.VITE_SITE_EMAIL ?? "eesuolap@gmail.com",
  github: import.meta.env.VITE_SITE_GITHUB ?? "https://www.github.com/eesuola",
  linkedin:
    import.meta.env.VITE_SITE_LINKEDIN ??
    "https://www.linkedin.com/in/opeyemi-eesuola-b80717b5/",
  // Resume URL: set VITE_SITE_RESUME to override, otherwise serve from public/resume.pdf
  resume: import.meta.env.VITE_SITE_RESUME ?? "/resume.pdf",
};

export default SITE;
