# stacked

React + Vite + Tailwind CSS + Lucide icons.

    npm install
    npm run dev      # local development
    npm run build    # production build in /dist

- Edit menu, prices, business details and options in `src/data/` (sample prices in ₱, contact details are placeholders).
- Add photos to `public/images/` using the file names listed in `public/images/README.txt`. Missing photos show placeholder artwork.
- Orders and contact messages are demos: nothing is sent until you connect a service in `src/utils/submit.js`.
- `preview.html` is a single-file preview (needs internet) you can open without installing anything.
- Deploy on Vercel: import this folder as a project (settings are in `vercel.json`).
