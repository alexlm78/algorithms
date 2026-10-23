# Algorithms

**English** · [Español](README_es.md)

40 classic algorithms implemented in **Rust, Go, Java, Python and TypeScript**, plus an interactive web app that shows how they work and how they compare.

Repository: <https://github.com/alexlm78/algorithms> · License: [MIT with attribution](LICENSE)

## What is here

| Folder | What it holds |
| --- | --- |
| [`impl/`](impl) | Every algorithm in five languages, each runnable on its own, with a build per language |
| [`web/`](web) | Algorithms Lab: step-by-step visualizers, races, live benchmarks, English and Spanish. See [`web/README.md`](web/README.md) |

The 40 algorithms are grouped by topic: sorting, searching, graph and tree traversal, shortest paths, greedy and spanning trees, strongly connected components, search trees, dynamic programming, number theory and backtracking. Each file starts with the theory, runs a small example, and ends with its time and space complexity.

## Quick start

### The web app

```sh
cd web
npm install
npm run dev      # http://localhost:5173
```

Details, structure and how to add an algorithm are in [`web/README.md`](web/README.md).

### The implementations

Requirements: whatever you want to build. `rustc`/`cargo`, Go 1.22+, a JDK (11+), Node 22+ and Python 3.

```sh
cd impl
make list                          # all algorithm ids
make run L=python A=bubble_sort    # run one (L = rust | go | java | typescript | python)
make                               # build everything
```

Every implementation prints the same output for the same algorithm; that is how the ports were checked against the Rust originals.

## Building per language

All paths are relative to `impl/`. `make <language>` wraps the commands shown.

| Language | Build | Run one | Output |
| --- | --- | --- | --- |
| Rust | `cd rust && cargo build --release` | `rust/target/release/bubble_sort` | `rust/target/release/` |
| Go | `cd go && go build -o ../bin/go/ ./...` | `bin/go/bubble_sort` | `bin/go/` |
| Java | `javac -d bin/java java/*.java` | `java -cp bin/java BubbleSort` | `bin/java/` |
| TypeScript | `cd typescript && npm install && npm run build` | `node typescript/dist/bubble_sort.js` | `typescript/dist/` |
| Python | none, it is interpreted | `python3 python/bubble_sort.py` | n/a |

Without building, you can also run a file directly:

```sh
cd impl
cargo run --release --manifest-path rust/Cargo.toml --bin bubble_sort
(cd go && go run ./bubble_sort)
java java/BubbleSort.java
node typescript/bubble_sort.ts      # Node 22.18+ / 23.6+ strips the types natively
python3 python/bubble_sort.py
```

Naming: a Rust file `bubble_sort.rs` becomes `bubble_sort.py`, `bubble_sort.ts`, `go/bubble_sort/main.go` and `BubbleSort.java`.

## Code style

`.editorconfig` sets indentation per language. Go and Rust are kept formatted with `gofmt` and `rustfmt`:

```sh
(cd impl/go && gofmt -w .)
(cd impl/rust && rustfmt --edition 2021 *.rs)
```

## Contributing

1. Add `impl/rust/<id>.rs` and its `[[bin]]` entry in `impl/rust/Cargo.toml`.
2. Add the four ports using the naming above, matching the Rust output.
3. Add the algorithm to `web/src/registry.ts` (names and summaries in English and Spanish).

## License and reuse

Released under the [MIT License](LICENSE) with one explicit condition: **any reuse, redistribution or derivative work must credit this project**, "alexlm78/algorithms" and its repository link, in its documentation or somewhere equally visible.

The historical pictures in `web/assets/` are third-party works under their own licenses (CC BY, CC BY-SA, public domain). Their credits are in [`web/assets/credits.json`](web/assets/credits.json) and in the web app footer; keep them if you reuse the pictures.
