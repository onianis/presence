# Copilot Instructions for Presence

## Project Context
- **Type**: Personal Portfolio (Projects, CV, Contact)
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Prisma ORM
- **Animation**: Framer Motion

## Architecture & Structure
- **App Router**: Uses `src/app` directory structure.
- **Server Components**: Default to Server Components. Add `'use client'` directive only for interactive components.
- **Path Aliases**: Use `@/*` to import from `./src/*`.

## Animation Strategy (Critical)
- **Page Transitions**: Use `src/app/template.tsx` (not `layout.tsx`) for page transition animations.
  - *Why*: Templates remount on navigation, enabling Framer Motion's `AnimatePresence` to trigger exit animations correctly.
  - *Pattern*: Wrap children in `<motion.div>` within the template.

## Data Layer (Prisma)
- **Schema**: `prisma/schema.prisma`.
- **Client Location**: **Custom Explicit Path** (`src/generated/client`).
  - *Reason*: Aligns with Prisma v7 best practices and avoids node_modules caching issues.
  - *Import Rule*: **NEVER** import from `@prisma/client`. Always import the singleton instance.
  - *Singleton Path*: `src/lib/db.ts`.
  - *Usage Example*: 
    ```typescript
    import { prisma } from "@/lib/db";
    const users = await prisma.user.findMany();
    ```
- **Workflow**:
  - Run `npx prisma generate` after schema changes.
  - Run `npx prisma db push` for prototyping.

## Styling & UI
- **Tailwind CSS v4**: Use utility classes.
- **Dynamic Classes**: Use `clsx` and `tailwind-merge`.
  - Example: `className={cn("base-class", className)}`
- **Fonts**: Geist (via `next/font`).

## Development Workflow
- **Package Manager**: npm
- **Scripts**: `npm run dev`, `npm run build`, `npm run lint`.

## Best Practices
- **Strict Mode**: TypeScript strict mode is enabled. No `any`.
- **Images**: Always use `next/image` with defined dimensions.
- **Links**: Use `next/link` for internal navigation to ensure prefetching works.