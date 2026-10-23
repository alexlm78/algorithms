# Algorithms Lab

**English** · [Español](README_es.md)

Interactive web app for the algorithms in this repository. English first, Spanish one click away: both languages show in the top bar with their flag, the active one highlighted.

```
cd web
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in web/dist
```

## What it does

- **Catalog** of all 40 algorithms grouped by topic, with complexity, approach and when-to-use (EN/ES).
- **Step-by-step visualizer** (play, step, scrub, speed, input type) for sorting and searching algorithms.
- **Race** on each compare page: every method of a topic runs on the same input at the same speed, one step per comparison, swap or write. The first to finish did the least work.
- **Compare** page per topic: side-by-side table plus a live in-browser benchmark (exact operation counts, approximate time, growth chart on log scale) for sorting and searching.
- **Code tabs** in Rust, Go, Java, Python and TypeScript. All sources live in `../impl/<lang>/`.

## Design

One flat colour per topic (`GROUP_COLORS` in `src/registry.ts`) carries from the home chapters to the visualizer. Chivo only, square corners, no gradients or shadows. Historical pictures are in `assets/` with credits in `assets/credits.json` and the footer.

## Layout

```
src/registry.ts        every algorithm: names, summaries, complexity (EN/ES)
src/engine/            instrumented algorithms (one implementation, two modes: record frames / count ops)
src/ui/                visualizer, charts, code tabs
src/views/             home, group, algorithm, compare pages
src/locales/           en.ts, es.ts
../impl/<lang>/        sources shown in the code tabs (Rust, Go, Java, Python, TypeScript)
```

## Adding an algorithm

1. Add `impl/rust/<id>.rs`, its `[[bin]]` entry in `impl/rust/Cargo.toml`, and an entry in `src/registry.ts`.
2. Add ports to `impl/{python,typescript,java,go}` (names: `<id>.py`, `<id>.ts`, `<Pascal>.java`, `<id>/main.go`).
3. For a visualizer, add the function to `src/engine/sorting.ts` or `searching.ts` and set `vis` in the registry entry.

Part of [alexlm78/algorithms](https://github.com/alexlm78/algorithms). Root README: [`../README.md`](../README.md).
