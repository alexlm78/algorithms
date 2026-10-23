# Algorithms

[English](README.md) · **Español**

40 algoritmos clásicos implementados en **Rust, Go, Java, Python y TypeScript**, más una aplicación web interactiva que muestra cómo funcionan y cómo se comparan entre sí.

Repositorio: <https://github.com/alexlm78/algorithms> · Licencia: [MIT con atribución](LICENSE)

## Qué contiene

| Carpeta | Contenido |
| --- | --- |
| [`impl/`](impl) | Cada algoritmo en cinco lenguajes, todos ejecutables por separado, con una compilación por lenguaje |
| [`web/`](web) | Algorithms Lab: visualizadores paso a paso, carreras entre métodos, benchmarks en vivo, en inglés y español. Ver [`web/README.md`](web/README.md) |

Los 40 algoritmos están agrupados por tema: ordenamiento, búsqueda, recorrido de grafos y árboles, caminos más cortos, voraces y árboles de expansión, componentes fuertemente conexas, árboles de búsqueda, programación dinámica, teoría de números y vuelta atrás. Cada archivo empieza con la teoría, ejecuta un ejemplo pequeño y termina con su complejidad en tiempo y espacio.

## Inicio rápido

### La aplicación web

```sh
cd web
npm install
npm run dev      # http://localhost:5173
```

Los detalles, la estructura y cómo añadir un algoritmo están en [`web/README.md`](web/README.md).

### Las implementaciones

Requisitos: solo lo que quieras compilar. `rustc`/`cargo`, Go 1.22+, un JDK (11+), Node 22+ y Python 3.

```sh
cd impl
make list                          # ids de todos los algoritmos
make run L=python A=bubble_sort    # ejecuta uno (L = rust | go | java | typescript | python)
make                               # compila todo
```

Cada implementación imprime la misma salida para el mismo algoritmo; así se comprobaron los ports contra los originales en Rust.

## Compilación por lenguaje

Todas las rutas son relativas a `impl/`. `make <lenguaje>` ejecuta los comandos de la tabla.

| Lenguaje | Compilar | Ejecutar uno | Salida |
| --- | --- | --- | --- |
| Rust | `cd rust && cargo build --release` | `rust/target/release/bubble_sort` | `rust/target/release/` |
| Go | `cd go && go build -o ../bin/go/ ./...` | `bin/go/bubble_sort` | `bin/go/` |
| Java | `javac -d bin/java java/*.java` | `java -cp bin/java BubbleSort` | `bin/java/` |
| TypeScript | `cd typescript && npm install && npm run build` | `node typescript/dist/bubble_sort.js` | `typescript/dist/` |
| Python | ninguna, es interpretado | `python3 python/bubble_sort.py` | no aplica |

También puedes ejecutar un archivo directamente, sin compilar:

```sh
cd impl
cargo run --release --manifest-path rust/Cargo.toml --bin bubble_sort
(cd go && go run ./bubble_sort)
java java/BubbleSort.java
node typescript/bubble_sort.ts      # Node 22.18+ / 23.6+ quita los tipos de forma nativa
python3 python/bubble_sort.py
```

Nombres: el archivo Rust `bubble_sort.rs` corresponde a `bubble_sort.py`, `bubble_sort.ts`, `go/bubble_sort/main.go` y `BubbleSort.java`.

## Estilo de código

`.editorconfig` define la indentación por lenguaje. Go y Rust se mantienen formateados con `gofmt` y `rustfmt`:

```sh
(cd impl/go && gofmt -w .)
(cd impl/rust && rustfmt --edition 2021 *.rs)
```

## Cómo contribuir

1. Añade `impl/rust/<id>.rs` y su entrada `[[bin]]` en `impl/rust/Cargo.toml`.
2. Añade los cuatro ports con la nomenclatura de arriba, con la misma salida que el original en Rust.
3. Añade el algoritmo a `web/src/registry.ts` (nombres y resúmenes en inglés y español).

## Licencia y reutilización

Publicado bajo la [licencia MIT](LICENSE) con una condición explícita: **cualquier reutilización, redistribución u obra derivada debe dar crédito a este proyecto**, "alexlm78/algorithms" y su enlace al repositorio, en su documentación o en un lugar igual de visible.

Las imágenes históricas de `web/assets/` son obras de terceros con sus propias licencias (CC BY, CC BY-SA y dominio público). Sus créditos están en [`web/assets/credits.json`](web/assets/credits.json) y en el pie de la aplicación web; consérvalos si reutilizas las imágenes.
