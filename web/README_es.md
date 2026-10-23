# Algorithms Lab

[English](README.md) · **Español**

Aplicación web interactiva para los algoritmos de este repositorio. Inglés como idioma principal y español a un clic: ambos idiomas aparecen en la barra superior con su bandera, y el activo se muestra resaltado.

```
cd web
npm install
npm run dev      # http://localhost:5173
npm run build    # sitio estático en web/dist
```

## Qué hace

- **Catálogo** de los 40 algoritmos agrupados por tema, con complejidad, enfoque y cuándo usarlos (EN/ES).
- **Visualizador paso a paso** (reproducir, avanzar, barra de progreso, velocidad, tipo de entrada) para los algoritmos de ordenamiento y búsqueda.
- **Carrera** en cada página de comparación: todos los métodos de un tema corren sobre la misma entrada y a la misma velocidad, un paso por comparación, intercambio o escritura. El primero en terminar hizo menos trabajo.
- **Comparar**: una página por tema con una tabla lado a lado y un benchmark en vivo en el navegador (conteo exacto de operaciones, tiempo aproximado, gráfico de crecimiento en escala logarítmica) para ordenamiento y búsqueda.
- **Pestañas de código** en Rust, Go, Java, Python y TypeScript. Todas las fuentes están en `../impl/<lenguaje>/`.

## Diseño

Un color plano por tema (`GROUP_COLORS` en `src/registry.ts`) que va desde los capítulos de la página de inicio hasta el visualizador. Solo la tipografía Chivo, esquinas cuadradas, sin degradados ni sombras. Las imágenes históricas están en `assets/`, con sus créditos en `assets/credits.json` y en el pie de página.

## Estructura

```
src/registry.ts        cada algoritmo: nombres, resúmenes, complejidad (EN/ES)
src/engine/            algoritmos instrumentados (una implementación, dos modos: grabar fotogramas / contar operaciones)
src/ui/                visualizador, gráficos, pestañas de código
src/views/             páginas de inicio, grupo, algoritmo y comparación
src/locales/           en.ts, es.ts
../impl/<lenguaje>/    fuentes mostradas en las pestañas de código (Rust, Go, Java, Python, TypeScript)
```

## Cómo añadir un algoritmo

1. Añade `impl/rust/<id>.rs`, su entrada `[[bin]]` en `impl/rust/Cargo.toml` y una entrada en `src/registry.ts`.
2. Añade los ports en `impl/{python,typescript,java,go}` (nombres: `<id>.py`, `<id>.ts`, `<Pascal>.java`, `<id>/main.go`).
3. Para un visualizador, añade la función en `src/engine/sorting.ts` o `src/engine/searching.ts` y define `vis` en la entrada del registro.

Parte de [alexlm78/algorithms](https://github.com/alexlm78/algorithms). README principal: [`../README_es.md`](../README_es.md).
