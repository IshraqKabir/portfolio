Live: https://ishraqkabir.github.io/portfolio/

## Updating content

- Experience: `src/data/experienceData.ts`
- Projects: `src/data/projectsData.ts`
- Technology labels/links: `src/data/technologies.ts`
- Hero text: `src/components/Hero/Hero.tsx`

## Running locally

```sh
npm ci
npm start   # http://localhost:3001/portfolio
```

## Deploying

The site is served by GitHub Pages from the `gh-pages` branch. Work on `dev`, then:

```sh
npm run deploy   # builds and pushes build/ to the gh-pages branch
git push         # don't forget to push the source too
```

The site updates within a minute or two.
