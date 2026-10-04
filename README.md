# وحي (Wahy) — Mosque Finder & Prayer Times Prototype

**غير رسمي — Unofficial.** Independent prototype exploring a unified digital experience for mosque and prayer-time services in Qatar. Not affiliated with, endorsed by, or built on behalf of the Ministry of Awqaf and Islamic Affairs.

🔗 **Live demo:** https://izzmeaz0-blip.github.io/wahy-prototype/

## Screenshots

| Home | Mosques (map + list) | Prayer times |
|---|---|---|
| ![Home screen](screenshots/home.png) | ![Mosques screen](screenshots/mosques.png) | ![Prayer screen](screenshots/prayer.png) |

*(Screenshots above were captured in an offline environment, so custom fonts, map tiles, and live prayer times aren't rendered — the [live demo](https://izzmeaz0-blip.github.io/wahy-prototype/) shows all of that working.)*

## What this is

A front-end-only prototype (no backend, no database) demonstrating what a unified mosque-services app could look like: finding the nearest mosque, checking prayer times, and viewing mosque-specific information in one place — in Arabic and English.

## Features

- 🕌 Mosque directory with search, list view, and a real interactive map (Leaflet + OpenStreetMap)
- 📍 Nearest-mosque detection via browser geolocation, with a clear fallback notice if location access is denied
- 🕐 Live prayer times (via the [Aladhan API](https://aladhan.com/prayer-times-api)) with a countdown to the next prayer, cached locally so the app still shows the last known times if the network request fails
- 🌙 Last-third-of-the-night calculation
- 🧭 Qibla direction (calculated, no external service)
- 📖 Sample lessons/lectures listing and a Friday sermon archive per mosque
- 📖 Full Mus'haf reader (real Uthmani-script Quran text via [alquran.cloud](https://alquran.cloud/api), with an English translation shown alongside when the UI is in English) — accessed from the "More" menu
- ⚠️ "Report an issue" flow (mock submission — no real backend)
- ❤️ Favorites, saved locally on the device
- 🌗 Light/dark theme (respects system preference, remembers your choice)
- 🌐 Full Arabic/English UI toggle, including layout direction (RTL/LTR)
- 📲 Installable as a Progressive Web App (PWA) with offline app-shell caching

## Tech stack

Plain HTML, CSS, and JavaScript — no build step, no framework. External libraries are loaded via CDN:

- [Leaflet](https://leafletjs.com/) — interactive map
- [Aladhan API](https://aladhan.com/) — prayer time calculations
- Google Fonts (Cairo, Tajawal)

## Project structure

```
index.html      — markup
styles.css      — all styling (light/dark theme via CSS variables)
app.js          — application logic (routing, data, map, prayer-time math)
manifest.json   — PWA manifest
sw.js           — service worker (offline app-shell caching)
icon-*.png      — app icons
```

## Data disclaimer

All mosque names, locations, sermon titles, and lesson schedules are **fictional sample data** for demonstration purposes only. Prayer times are calculated using a public astronomical API (Umm al-Qura method), not sourced from the Ministry of Awqaf. A real deployment would need to replace both with official, authoritative sources.

## Running locally

No build tools required — just serve the folder with any static file server (opening `index.html` directly via `file://` will work for the UI, but the service worker and some API calls require `http(s)://`):

```bash
npx serve .
```

## Roadmap context

This is stage 3 (working prototype) of a broader concept — see the project discussion for the fuller phased roadmap, including what is deliberately **out of scope** for this stage (real backend, admin panel, Quran/Azkar content, Hajj/Zakat services, AI assistant).
