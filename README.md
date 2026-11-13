# Faiyaz Shahriar — Portfolio

A responsive React + Vite portfolio with individual project detail routes and an email contact form.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.
5. Before deployment, run `npm run build`.

## Personalize before submitting

Search `src/data.js` and update:
- `email` and `phone`
- `facebook` if you want a different profile
- `resume` if you replace the PDF in `public/`
- Project `live` URLs and repository URLs when they change

Add your professional photo as `public/images/profile.jpg`. The hero is already configured to display this file, with an initials fallback if the photo is not present. Use a clear, front-facing crop; adjust `object-position` in `src/styles.css` if needed.

The resume download and view links use `public/Faiyaz_Shahriar_Resume.pdf`. Project previews and detail pages use the supplied images in `public/images/`; the IoT project uses the provided `iot-project.svg` illustration. A project-specific IoT GitHub repository URL was not present when this portfolio was updated.

## Deploy (Vercel)

1. Push this folder to a new GitHub repository.
2. Import that repository into Vercel.
3. Framework preset: **Vite**.
4. Install command: `npm ci`.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy, then test the live URL on mobile and desktop.

All project detail routes use React Router. If direct refresh on `/projects/...` returns 404 on your host, configure SPA rewrites so requests fall back to `/index.html`. Vercel usually handles Vite SPA routing; if needed, add a `vercel.json` with a rewrite to `/index.html`.

## Before sharing

The contact form submits through FormSubmit and may require first-time email activation. Test each live project and repository URL before sharing the deployed site; the IoT project's live URL and project-specific repository URL are not currently available.
