import { defineConfig } from 'vite';

// Sources for the code tabs live one level up (Rust files) and in ../impl.
export default defineConfig({
  base: './',
  server: { fs: { allow: ['..'] } },
});
