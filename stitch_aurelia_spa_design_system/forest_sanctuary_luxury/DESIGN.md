---
name: Forest Sanctuary Luxury
colors:
  surface: '#0e150f'
  surface-dim: '#0e150f'
  surface-bright: '#343b34'
  surface-container-lowest: '#09100a'
  surface-container-low: '#161d17'
  surface-container: '#1a211b'
  surface-container-high: '#242c25'
  surface-container-highest: '#2f372f'
  on-surface: '#dde5da'
  on-surface-variant: '#d0c5b5'
  inverse-surface: '#dde5da'
  inverse-on-surface: '#2b322b'
  outline: '#999081'
  outline-variant: '#4d463a'
  surface-tint: '#e3c381'
  primary: '#eecd8b'
  on-primary: '#3f2e00'
  primary-container: '#d1b272'
  on-primary-container: '#5a440e'
  inverse-primary: '#735b24'
  secondary: '#b8cda6'
  on-secondary: '#253519'
  secondary-container: '#3a4c2e'
  on-secondary-container: '#a7bb96'
  tertiary: '#ffc5a6'
  on-tertiary: '#4d260c'
  tertiary-container: '#e7a885'
  on-tertiary-container: '#693c21'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9e'
  primary-fixed-dim: '#e3c381'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#59430e'
  secondary-fixed: '#d4e9c1'
  secondary-fixed-dim: '#b8cda6'
  on-secondary-fixed: '#101f07'
  on-secondary-fixed-variant: '#3a4c2e'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#fab894'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#683b20'
  background: '#0e150f'
  on-background: '#dde5da'
  surface-variant: '#2f372f'
  forest-deep: '#122319'
  alabaster: '#F5EFE3'
  sandstone: '#CBBF9D'
  glass-fill: rgba(245, 239, 227, 0.08)
  glass-border: rgba(245, 239, 227, 0.16)
typography:
  display-hero:
    fontFamily: Fraunces
    fontSize: 96px
    fontWeight: '600'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Fraunces
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 60px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-base:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.2em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap-lg: 120px
  section-gap-sm: 80px
---

## Brand & Style

The brand personality is defined by **"Quiet Luxury"** and **"Atmospheric Wellness."** It moves away from the clinical sterility of traditional spas, leaning into a cinematic, dark-mode-first experience that mimics a private forest retreat at dusk. The goal is to evoke an immediate sensory decompression through deep botanical tones and high-end editorial layouts.

The design style is a sophisticated blend of **Glassmorphism** and **Minimalism**. It utilizes frosted surfaces, "misty" translucent layers, and organic ambient light orbs to create depth. Every interaction should feel unhurried and tactile, prioritizing a "slow-living" aesthetic that feels handcrafted rather than automated.

## Colors

The palette is rooted in a **Dark Botanical** foundation. The primary canvas is a deep, pine-tinted black (`#0B120C`), providing a restful, low-glare environment. 

- **Primary (Spun Gold):** Used for key CTAs, highlights, and active states. It represents sunlight filtering through trees.
- **Secondary (Sage Moss):** Used for decorative gradients and organic background elements.
- **Tertiary (Clay):** An earthy accent for natural warmth in iconography or small highlights.
- **Neutrals:** Typography utilizes Alabaster for body text and Sandstone for headings to avoid the harshness of pure white, maintaining a soft, parchment-like readability.

## Typography

The system uses a high-contrast typographic pairing to signal luxury and precision. 

- **Fraunces** (Serif) is the voice of the brand, used for all display and headline roles. It should be set with tight tracking to allow the elegant character shapes to interlock.
- **Geist** (Sans-Serif) handles all functional and body text. It is chosen for its ultra-clean, modern legibility. 
- **JetBrains Mono** (Monospace) is used sparingly for "kickers" (small labels above headings) and technical data. The wide letter spacing (0.2em) creates a deliberate, structured feel.

Line heights are intentionally generous for body copy to ensure a relaxed reading pace.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid Grid**. Content is primarily contained within a 1280px central wrapper, but utilizes asymmetrical layouts (e.g., 5-column or 7-column splits) to maintain an editorial, cinematic look.

**Spacing Rhythm:**
- A base unit of 4px is used, but layout-level spacing is aggressive. 
- Large vertical gaps (120px on desktop) are mandatory between sections to force a "slow scroll" and prevent information density fatigue.
- Margins are generous to ensure content never feels crowded against the viewport edges.
- Mobile layouts reflow into a single column with 20px side margins, but retain significant vertical padding (80px) between modules to preserve the brand's unhurried feel.

## Elevation & Depth

Hierarchy is conveyed through **Tonal Layering and Glassmorphism** rather than traditional elevation shadows.

- **The Base:** The deep background canvas (`#0B120C`) acts as the lowest layer.
- **Glass Layers:** Cards and containers use a semi-transparent fill (`rgba(245, 239, 227, 0.08)`) with a high backdrop-blur (18px-24px). This creates a "misty" effect where background colors softly bleed through.
- **Outlines:** Instead of heavy shadows, surfaces are defined by "Aurelia Veil Borders"—thin, 1px translucent cream outlines (`rgba(245, 239, 227, 0.16)`).
- **Ambient Glows:** Soft, organic "Leaf Orbs" (radial gradients of Moss or Gold at low opacity) are placed behind glass layers to create a sense of natural luminescence and depth without physical stacking.

## Shapes

The shape language is organic and soft, referencing the geometry of river stones and botanical life.

- **Primary Containers:** Large cards and sections use significant rounding (`rounded-2xl` to `rounded-3xl`) to remove any "corporate" sharpness.
- **Interactive Elements:** Buttons and tags use a full pill-shape (`rounded-full`) to emphasize a tactile, pebble-like quality.
- **Decorative Elements:** Background orbs should use irregular `border-radius` values (e.g., `48% 52% 42% 58%`) to appear fluid and natural rather than perfectly circular.

## Components

**Buttons:**
- **Primary:** Full-pill capsule with a `Gold-to-Moss` linear gradient. Text is dark (`#0B120C`) and bold. On hover, apply a `translate-y(-4px)` lift and a soft golden outer glow.
- **Secondary:** Transparent pill with the `glass-border` and Sandstone text. Hover state adds a subtle `10% Alabaster` fill.

**Cards (The Botanical Card):**
- Must feature `backdrop-filter: blur(18px)`, the `glass-fill` background, and the `glass-border`.
- Use `padding: 40px` for desktop to ensure content has significant breathing room.

**Input Fields:**
- Dark, recessed containers (`bg-background/50`) with `3xl` rounded corners.
- Focus state should transition the border color to `Primary Gold` with a very soft inner glow.

**Chips/Badges:**
- Use the `label-mono` typography style.
- Set against a low-opacity `Alabaster` or `Gold` background with high letter spacing.

**Navigation:**
- A sticky header with a high blur-rate background. Link states should transition from `Muted Alabaster` to `Full Alabaster` on hover, avoiding underlines in favor of subtle opacity shifts.