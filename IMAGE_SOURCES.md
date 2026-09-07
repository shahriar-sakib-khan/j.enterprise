# Image Sources

This document tracks the temporary stock imagery used during development. These images should be replaced with official company photography when available.

## Homepage Hero Image
- **Location:** `components/sections/Hero.tsx`
- **Current URL:** `https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=2574&auto=format&fit=crop`
- **Description:** Cargo vessel at sea.
- **Intended Replacement:** High-quality photo of a commercial vessel, ideally connected to the company's operations, or port operations in Chattogram.

## Trust Intro Section
- **Location:** `components/sections/TrustIntro.tsx`
- **Current URL:** `https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2673&auto=format&fit=crop`
- **Description:** Marine industrial/port equipment.
- **Intended Replacement:** Photo of the company's depot in Sitakunda, office, or actual marine equipment they supply.

## Marine Visual / Capabilities Section
- **Location:** `components/sections/MarineVisual.tsx`
- **Current URL:** `https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2664&auto=format&fit=crop`
- **Description:** Port terminal / ship operations.
- **Intended Replacement:** High-quality maritime photography representing the scale of operations supported by the equipment supplied.

## Icons and Graphics
- **Library used:** `lucide-react`
- **Logos:** Currently using text-based fallbacks in the Navbar and Footer. Once the actual `logo` file is available, it should be placed in `public/logo/` and implemented via `next/image` in the `Navbar` and `Footer` components.

## Brands
- **Implementation:** Currently using standard text typography for brand representation (YANMAR, LAPA, Staffa, etc.) to ensure a clean, professional look without implying exclusive distributor rights falsely. Real brand logos can be added later if authorized.
