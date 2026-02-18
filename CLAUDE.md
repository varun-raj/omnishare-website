# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OmniAlbum marketing/landing website — a Next.js App Router site with React 18 + TypeScript. OmniAlbum is a unified interface for self-hosted photo albums on iOS.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run Next.js linter

There is no test runner configured.

## Architecture

- **Next.js 15 + React 18 + TypeScript** — App Router with file-based routing. Tailwind CSS built via PostCSS (configured in `tailwind.config.ts` and `postcss.config.mjs`).
- **Routing** — Next.js App Router. Routes: `/` (landing), `/privacy`, `/terms`. Each route is a `page.tsx` inside `app/`.
- **Path alias** — `@/` maps to the project root (configured in `tsconfig.json`).
- **Components** — All in `components/` as flat `.tsx` files. The landing page (`app/page.tsx`) composes: Hero → Features → AppleEcosystem → Providers → Users → AndroidCTA. Navbar and Footer are rendered in the root layout (`app/layout.tsx`).
- **Client components** — `Navbar.tsx` and `Hero.tsx` use `'use client'` (they rely on useState, useEffect, window APIs). All other components are server components.
- **Types** — Shared interfaces (`Provider`, `Feature`, `Persona`) in `types.ts`.
- **Tailwind theme** — Custom `brand` color palette (blue-based), `Inter` font via `next/font/google`, fadeInUp animation, bounce-slow, and gradient-radial. Defined in `tailwind.config.ts`.
- **Images** — `images.unsplash.com` is whitelisted in `next.config.ts` for remote images.
