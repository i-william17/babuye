# Wix Export Reference

The previous application was a CRA shell around a Wix export:

- `original-pages/pages/` contains the exported page modules with serialized HTML and CSS.
- `original-pages/SiteShell.jsx` contains the old runtime injector.
- `generated/` and `tools/` contain generated helpers from the temporary font/SEO localization pass.

These files are intentionally outside `src/` so the active React app does not watch, parse, or bundle the Wix export. Use them only as visual/reference material when matching spacing, typography, restrained color, and page composition.

Do not import these files back into the active app.
