import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    lint: 'src/lint.ts',
  },
  format: ['esm'],
  outDir: '.',
  splitting: false,
  sourcemap: false,
  clean: true,
})
