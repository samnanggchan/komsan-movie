# KOMSAN Movie

KOMSAN Movie is a responsive React movie browser powered by TMDB (The Movie Database). It includes trending banners, horizontal content rails, detail pages, search, and infinite-scroll explore pages.

## Features

- Responsive layout for mobile, tablet, and desktop
- Trending hero/banner section
- Horizontal movie/TV rails (Now Playing, Top Rated, Popular, On The Air)
- Detail pages for movie and TV items
- Search page with infinite scroll
- Explore pages by media type with infinite scroll

## Tech Stack

- React (Create React App)
- React Router
- Redux Toolkit
- Axios
- Tailwind CSS

## Prerequisites

- Node.js 18+
- npm

## Environment Setup

Create a local env file in the project root:

```bash
cp .env.example .env.local
```

Set one of the following credentials in `.env.local`:

```env
REACT_APP_ACCESS_TOKEN=your_tmdb_v4_read_access_token
```

or:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_v3_api_key
```

If credentials are missing or invalid, TMDB requests return `401 Unauthorized` and data sections remain empty.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open http://localhost:3000

## Available Scripts

- `npm run dev`: start development server
- `npm run build`: create production build in `build/`
- `npm test`: run tests
- `npm run eject`: eject CRA config (irreversible)

## Project Structure

```text
src/
	components/      reusable UI (banner, card, footer, header, navigation)
	pages/           route-level pages (Home, Explore, Details, Search)
	hooks/           custom hooks for API fetches
	routes/          router definitions
	store/           Redux store and slices
	assets/          local images and media
```

## Troubleshooting

- API returns 401:
	- verify `REACT_APP_ACCESS_TOKEN` or `REACT_APP_TMDB_API_KEY`
	- restart the dev server after changing env files
- UI looks stale after code changes:
	- stop and rerun `npm run dev`
- Production verification:
	- run `npm run build` and confirm successful compile

## Notes

- This project is based on Create React App.
- You may still see non-blocking ESLint warnings until full lint cleanup is completed.
