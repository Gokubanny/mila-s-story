# Mila Kunis Film Website

## Goal
Build a polished, editorial-style personal website for actress/producer Mila Kunis with five public routes and a real backend contact form.

## Design Direction
**Editorial Archive** — warm, archival palette (warm stone background, oxblood/terracotta accent), bold typography pairing (Inter + Playfair Display + JetBrains Mono), clean grid-based layouts, restrained motion. Direction v3 will be adapted faithfully while using the user's actual content.

## Routes & Content

- **Home `/`** — Hero with "Mila Kunis / Actress & Producer" intro, featured projects (Black Swan, Ted, Bad Moms, Luckiest Girl Alive, Nightwatching), and two CTAs: Watch My Work and Work With Me.
- **Films `/films`** — Full selected filmography table with Year, Title, Role, Notes covering all entries in the draft (2010–TBA, plus Family Guy voice work).
- **About `/about`** — Biography: birth/immigration, That '70s Show, Family Guy, film breakthrough, producing through Brick for Sheep (formerly Orchard Farm), personal note.
- **Work With Me `/work-with-me`** — Collaboration interests, production company info, and the professional inquiry form.
- **Contact `/contact`** — Alternative contact info (CAA agents), press/media note, fan message note.

Each route will have unique `head()` metadata (title, description, og:title, og:description).

## Backend

Enable Lovable Cloud to provide the database and auth layer. Create a `contact_submissions` table with proper RLS policies, GRANT statements, and a server function to submit the form. Submissions will store:

- `name` (text, required)
- `email` (text, required)
- `role` (text)
- `inquiry_type` (text)
- `message` (text, required)
- `created_at` timestamp

The form will be validated on both client and server with Zod. The server function will use an authenticated Supabase client to insert the submission.

## Shared Components

- Sticky navigation with `Link` to all routes
- Hero section with portrait image
- Filmography table (reused on Home and Films)
- Contact form component
- Footer with social/professional links

## Images

Generate two images matching the Editorial Archive style:

1. **Hero portrait** — cinematic close-up of Mila Kunis in soft warm editorial lighting.
2. **About/production still** — cinematic grainy film-set silhouette image.

## Technical Stack

- TanStack Start v1 + React 19 + Tailwind CSS v4
- Design tokens updated in `src/styles.css`
- Google Fonts loaded via `<link>` in `src/routes/__root.tsx`
- Lovable Cloud / Supabase for the database
- Zod for input validation
- Server function for form submission
