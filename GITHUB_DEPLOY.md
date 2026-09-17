# ecoSENSSE Health — GitHub Pages build

This package has been cleaned for Vite/GitHub Pages:

- Removed invalid Figma-generated duplicate npm aliases.
- Added React and ReactDOM as application dependencies.
- Set Vite `base: './'` so compiled assets work both on the GitHub project URL and a later custom domain.
- Preserved the original Figma Make React components and CSS.

## Important source limitation

The Figma export itself contains only two local PNG assets. Two major page images are referenced remotely in the source:

- `https://i.imgur.com/PHgPXDD.png` in `SolutionSection.tsx`
- `https://i.imgur.com/n2KGRho.png` in `FeaturesSection.tsx`

Those image binaries were not included in the Figma ZIP, so they cannot be made local without the original image files. The application code is otherwise preserved.
