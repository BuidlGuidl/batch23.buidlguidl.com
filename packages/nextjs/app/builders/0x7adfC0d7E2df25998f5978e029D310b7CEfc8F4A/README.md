# Builder Profile: Shivam Soni

This directory contains the personal builder page for Shivam Soni (0x7adfC0d7E2df25998f5978e029D310b7CEfc8F4A).

## Features
- **Interactive Terminal Aesthetic**: A dark-mode first design inspired by developer terminals.
- **Magic UI Components**: Custom animations like `BorderBeam`, `Particles`, and `ShimmerButton` for a premium feel.
- **Tech Stack Visualization**: Dynamic progress bars showing proficiency in Solidity, TypeScript, Next.js, etc.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.

## Components
- `page.tsx`: Main profile page component.
- `components/magicui/`: Scoped UI components used strictly for this profile page (BorderBeam, Particles, ShimmerButton).

## Recent Updates
- Refactored custom CSS variables to use Tailwind's `dark:` variants.
- Moved `magicui` components to local scope to avoid global pollution.
- Fixed accessibility and z-index issues for the online status indicator.
- Optimized build performance by resolving `react-hooks/exhaustive-deps` warnings.
