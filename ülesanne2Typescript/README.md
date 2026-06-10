# task_1and_2

A small TypeScript/JavaScript practice repo with frontend and backend task files.

## Project structure

- `package.json` - project metadata/dependencies
- `tsconfig.json` - TypeScript config
- `task1.js`, `task2.js` - compiled JS tasks
- `task2.d.ts`, `src/task1.d.ts` - type declarations
- `src/index.html` - HTML entrypoint
- `src/style.css` - styles
- `src/models/task1.ts` - TypeScript model
- `src/server/task2.ts` - TypeScript server logic

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Compile TypeScript:

   ```bash
   npx tsc
   ```

## Run

- For frontend, open `src/index.html` in a browser.
- For backend, run any server script with Node (or via a framework if configured):

  ```bash
  node task2.js
  ```

## Notes

- Keep source files in `src/`; generated outputs are in the repo root.
- Update this README if new tasks or libraries are added.
