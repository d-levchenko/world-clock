# Local Time Open API

React + Vite app showcasing the current local time and timezone information with
a Tailwind-styled dashboard.

## Live demo

[View live application](https://world-clock-steel.vercel.app/)

## Overview

This project uses React, TypeScript, Vite, and Tailwind CSS to build a clock
dashboard that:

- detects the user's timezone via an external time API
- displays a live updating clock every second
- shows a motivational quote and a day/night themed background
- includes a toggleable `MoreInfo` panel for day-of-year, day-of-week, week
  number and timezone
- applies Tailwind classes inside components so styles are already in place

## What is included

- `App` handles data fetching and state management
- `Clock` renders the current time, timezone label, and theme icon
- `Quote` renders a static quote section
- `MoreInfo` toggles additional time metadata
- Tailwind CSS is configured through `@tailwindcss/vite`

## Scripts

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Notes

- The current UI is styled using Tailwind utility classes in each component.
- The app is functional and ready to run, with more polish and logic
  enhancements planned for future updates.

## Dependencies

- `react`, `react-dom`
- `typescript`
- `vite`
- `tailwindcss`
- `@tailwindcss/vite`
- `axios`
- `react-icons`

## Installation

1. ** Clone the repository**:

   ```bash
   git clone https://github.com/d-levchenko/world-clock.git
   cd world-clock
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open the app in your browser**:
   - **Development**: [http://localhost:5173/](http://localhost:5173/)
   - **Production version**:
     [https://world-clock-steel.vercel.app/](https://world-clock-steel.vercel.app/)

## Acknowledgments

- [Time API](https://time.now/developer/api) for current time and timezone
  information
