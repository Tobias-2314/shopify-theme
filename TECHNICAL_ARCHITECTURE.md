# Technical Architecture Document: Figma to Shopify 2.0 Conversion
## Project: Silkify One-Product Store (NFC Phone Case)

### 1. Overview
This document outlines the technical approach to convert the Figma design into a fully functional Shopify Online Store 2.0 Theme. The architecture focuses on performance, modularity, and "Silkify" aesthetics (high-conversion, premium animations).

### 2. Design System & Tokens (Figma Extraction)
**Typography:**
- **Headings**: 'Outfit' or 'Inter' (Sans-serif, Bold, Geometric).
- **Body**: 'Inter' (Clean, legible).
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold).

**Color Palette (Approximation based on visual analysis):**
- `primary`: #000000 (Black) - Main CTAs, Headings.
- `accent`: #FF4D4D (Vibrant Red/Orange) - "Sale", "Hot" badges, Urgency elements.
- `background`: #FFFFFF (White) - Primary background.
- `surface`: #F5F5F7 (Light Gray) - Bundle cards, Secondary sections.
- `text-main`: #1A1A1A (Dark Gray).
- `text-muted`: #666666 (Medium Gray).
- `border`: #E5E5E5.

**Spacing & Radius:**
- `radius-sm`: 4px
- `radius-md`: 8px (Buttons, Inputs)
- `radius-lg`: 16px (Cards, Modals)
- `container-width`: 1440px max.

### 3. Theme Structure (Shopify 2.0)
The theme will adhere to the standard JSON template architecture.

```
/
├── assets/
│   ├── theme.css        <-- Main stylesheet (Tailwind/Variables)
│   ├── theme.js         <-- Global scripts (Sticky cart, animations)
│   └── vendor.js        <-- Swiper, Alpine.js (if needed)
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── hero-split.liquid       <-- Hero Section with Gallery & Bundle
│   ├── bento-grid.liquid       <-- Feature Highlights
│   ├── scarcity-bar.liquid     <-- Stock progress & Timer
│   ├── social-proof.liquid     <-- Reviews & Guarantee
│   ├── footer-custom.liquid
│   └── bundle-selector.liquid  <-- (Requested specific file)
├── snippets/
│   ├── product-card.liquid
│   ├── price.liquid
│   └── icon-*.liquid
└── templates/
    └── index.json
```

### 4. Functional Specifications

#### A. Bundle Logic ("Pack & Ahorra")
- **Mechanism**: Javascript listener on option selection.
- **Data**: Variant IDs and Prices stored in data attributes.
- **Action**: Updates hidden master selector or adds multiple items to cart via AJAX API.
- **Visuals**: Active state highlighting, "Best Value" badge.

#### B. Direct Checkout
- **Implementation**: HTML `<form>` with `/cart/add` endpoint but hijacked via JS to redirect to `/checkout` immediately with the payload.

#### C. Responsiveness
- **Mobile**: Sticky "Add to Cart" bar appears on scroll. Adjusted padding/font-sizes.
- **Desktop**: Split screen Hero (Gallery Left, Info Right).

### 5. Performance Strategy
- **Lighthouse Goal**: 95+
- **Images**: Native `image_url` filter with `width` parameters and `loading="lazy"` (except Hero LCP).
- **CSS/JS**: Minified. Critical CSS inline.
- **Fonts**: `font-display: swap`.

### 6. Accessibility (A11y)
- Semantic HTML tags (`<header>`, `<main>`, `<article>`).
- ARIA labels for non-text controls (Close buttons, Quantity selectors).
- Keyboard navigability for the Bundle Selector.
