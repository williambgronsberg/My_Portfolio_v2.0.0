# My Portfolio v2.0.0

A modern, responsive personal portfolio website by William Berge Grønsberg. This project showcases selected web projects, photography, and small web apps with an emphasis on clean design, accessible markup, and lightweight vanilla JavaScript.

Live demo: http://im24wil27051.imporsgrunn.no/

## Key features

- Responsive, mobile-first layout
- Animated navigation and micro-interactions
- Project showcases with video previews and overlays
- Photography gallery and visual polish
- Small web apps and widgets (weather, dashboard, 75-day tracker)
- Accessibility and performance considerations (reduced-motion support, lazy media)

## Tech stack

- HTML5, CSS3, JavaScript (vanilla) and jQuery
- AOS (Animate On Scroll) for scroll animations
- Font Awesome for icons
- Google Fonts (Karla, Nanum Pen Script, etc.)

## Quick start

This is a static site — no build step required.

1. Clone the repository:

```bash
git clone https://github.com/williambgronsberg/My_Portfolio_v2.0.0.git
cd My_Portfolio_v2.0.0
```

2. Open `index.html` in your browser or serve the folder with a simple static server:

```bash
# Python 3
python -m http.server 8000
# or Node.js
npx http-server -p 8000
```

3. Visit http://localhost:8000 (or open `index.html` directly).

## Project structure (high level)

- index.html — Main portfolio landing page
- aboutmeside.html — About page
- hub.html / man.html — Personal hub/dashboard variants
- 75dayhard.html — 75-day challenge tracker (optionally uses Firebase)
- nam.html — Weather widget (OpenWeatherMap)
- assets/ or Pictures/ — Images, icons, videos and media
- style.css / script.js — Primary styles and JavaScript

(See the repository for the complete list of pages and assets.)

## Configuration & APIs

- Weather features use OpenWeatherMap: add an API key in the relevant files (`nam.html`, `hub.html`) as `API_KEY`.
- The 75-day tracker can be configured to sync with Firebase — do not commit real API keys to the public repository.

## Development notes

- Media files (videos/images) are included in the repo for the project previews; optimize heavy media before deploying for best performance.
- If you need to reduce animations for accessibility, the site respects `prefers-reduced-motion`.

## Deployment

The site can be hosted on any static hosting platform (GitHub Pages, Netlify, Vercel, S3 + CDN).

- For GitHub Pages: enable Pages in the repository settings and point to the `main` branch root.
- For Netlify/Vercel: connect the repo and deploy as a static site (no build command required).

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes and open a Pull Request

Please avoid committing secrets (API keys) to the repository.

## License

This project is released under the MIT License. See the LICENSE file for details.

## Author / Contact

William Berge Grønsberg — https://github.com/williambgronsberg

Email: wil27051@skole.telemarkfylke.no
LinkedIn: https://www.linkedin.com/in/william-berge-gr%C3%B8nsberg-332932307/

---

If you'd like the README to include more specific details (exact npm scripts, Firebase setup values, or a tailored project gallery), tell me which sections to expand and I will update the file accordingly.
