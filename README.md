
# Ülesanne 2 — TypeScript exercises

This repository contains small TypeScript exercises and supporting build files.

## Project structure

- [package.json](package.json) — project metadata and scripts
- [tsconfig.json](tsconfig.json) — TypeScript configuration
- [task1.js](task1.js) — compiled/runtime artifact for task 1
- [task2.js](task2.js) — compiled/runtime artifact for task 2
- [task2.d.ts](task2.d.ts) — type declarations for task 2
- [src/index.html](src/index.html) — demo HTML page
- [src/style.css](src/style.css) — styles for the demo
- [src/task1.d.ts](src/task1.d.ts) — type declarations for task1
- [src/models/task1.ts](src/models/task1.ts) — Task 1 TypeScript source
- [server/task2.ts](server/task2.ts) — Task 2 server-side TypeScript

## Setup

1. Install dependencies:

```
npm install
```

2. Build (if you use TypeScript compiler):

```
npm run build
```

3. Open the demo:

 - Open [src/index.html](src/index.html) in your browser, or serve the folder with a static server.

## Notes

- Source TypeScript files are in `src/` and `server/`.
- Declaration files (`.d.ts`) are included for compatibility with JS consumers.

## Contributing

Feel free to open issues or add improvements. Run `npm run build` or `tsc` to compile changes.

## License

Default: no license specified. Add a `LICENSE` file if you want to clarify reuse terms.

