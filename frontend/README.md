# Babuye Frontend

Hand-authored React and Tailwind frontend for Babuye facade, glazing, and safety systems.

The old Wix export is preserved under `reference/wix-export/` as visual reference only. It is not imported by the app, which keeps the dev server and production build fast.

## Scripts

- `npm start` starts the CRA dev server.
- `npm run build` creates the production build.
- `npm test -- --watchAll=false` runs the test suite.

## Structure

- `src/components` contains layout, UI, forms, animation helpers, and reusable sections.
- `src/data` contains navigation, company, service, project, credential, and SEO content.
- `src/pages` contains the actual route pages.
- `reference/wix-export` stores the migrated Wix clone for design comparison.
