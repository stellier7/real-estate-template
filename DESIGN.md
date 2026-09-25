# Design system (template)

Editorial luxury real-estate presentation—confident, architectural, restrained.

## Typography

- **Display:** Cormorant Garamond (`font-display`) — headlines, property names
- **UI / body:** DM Sans — navigation, body, metadata
- **Scale:** Large display on heroes; section titles 3xl–5xl; body ~17px with relaxed line height

## Color

| Token | Role |
|-------|------|
| `--background` `#f7f4ef` | Page ground |
| `--foreground` `#141310` | Primary text |
| `--muted` `#5c574f` | Secondary copy |
| `--accent` `#8a6a4b` | Links, CTAs |
| `--surface` `#ffffff` | Alternate sections |
| `--line` | Hairline dividers |

No gradient heroes, no pill badges, no heavy shadows.

## Layout

- Max width `88rem`, generous horizontal padding
- Section vertical rhythm via `--section-y`
- Prefer asymmetric two-column editorial blocks over uniform card grids
- Photography leads; UI stays quiet

## Motion

- Subtle fade-up on key property headers (`.reveal`)
- Image hover scale on listing photography only
- Respect `prefers-reduced-motion`

## Components

Listing and property UI live under `src/components/`. Property pages compose through `PropertyPageComposer` only.
