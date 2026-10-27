# start.ng — header experiments

Independent React + TypeScript + Vite copy in `start-whimsy-experiments`.
The completed project in `../start-whimsy` and its published site are unchanged.
This experiment uses a separate Git repository, browser storage keys, and Site identity.

## What changed

The only decorative motion is on the four header links:

- **Games:** a friendly controller wiggles and its buttons press.
- **Tournament:** a trophy celebrates with a glint and confetti.
- **Creators:** an artist paints a canvas.
- **Docs:** an open book turns its pages.

Hover or keyboard-focus a header link to reveal its small pop-up. Link labels, destinations, and normal navigation are preserved. On narrow screens, open the header menu to access the four links. Reduced-motion preferences show static illustrations instead of looping motion.

The previous headline tilt/balls/kicking, game-card scenes, phone Help character, account-button typing scenes, and animated logo/Play now controls are removed. Headline, account links, cards, and Help retain their ordinary UI and functions.

## Local setup

Use Node.js 24 LTS.

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm test
npm run build
npm run preview
```

`npm run build` performs strict TypeScript checks and writes a static site to `dist/`. The test checks catalogue uniqueness. No backend, environment variables, animation library, or private API is required.

## Vercel or Netlify

Push this directory's contents to a new GitHub repository, with `package.json` at its root. Keep it separate from the completed project's repository/deployment.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 24

`vercel.json` and `netlify.toml` include the deployment settings. These follow [Vite's static hosting guide](https://vite.dev/guide/static-deploy). The optional `.openai/hosting.json` belongs only to this experiment's private preview; Vercel and Netlify do not use it. The source ZIP in `outputs/start-ng-header-experiments.zip` excludes that identity and all generated/runtime files.

## Edit

- `src/components/HeaderLink.tsx`: four decorative SVG scenes and header links.
- `src/styles/header-popovers.css`: pop-in and illustration animations.
- `src/styles/base.css`: nonanimated reference UI.
- `src/components/Headline.tsx`: static headline.
- `src/components/GameCard.tsx`: static game cards and local favourites.
- `src/data/games.ts`: typed snapshot of the community catalogue.

Sign-in, tournaments, game pages, leaderboards, submissions, and documentation link to start.ng. Initial artwork is bundled; additional catalogue covers use their original public game hosts with a fallback if unavailable. start.ng branding, text, and game artwork remain the property of their respective owners.
