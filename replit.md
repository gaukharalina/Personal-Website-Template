# Personal Website

## Overview

A frontend-only personal website template built with React + Vite. No backend, no database — pure static frontend.

## Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Theme**: Light/dark mode via ThemeProvider
- **Package manager**: pnpm (workspace with single artifact)

## Structure

```
artifacts/personal-website/   # The app
  src/
    pages/Home.tsx            # Main single-page layout (8 sections)
    components/ThemeProvider  # Light/dark mode
    components/ui/            # shadcn/ui components
    index.css                 # Theme palette + global styles
    App.tsx                   # Router + providers
```

## Key Commands

- `pnpm --filter @workspace/personal-website run dev` — run locally
- `pnpm --filter @workspace/personal-website run build` — production build
