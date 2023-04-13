import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    standard: 'src/standard.ts',
  },
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  clean: true,
})
