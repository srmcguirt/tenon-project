import { parse as tsParser } from '@typescript-eslint/parser'
import { parseForESLint as jsonParser } from 'jsonc-eslint-parser'

export const parsers = {
  'jsonc-eslint-parser': {
    jsonParser,
  },
  '@typescript-eslint/parser': {
    tsParser,
  },
}

export const parserExtensions = {
  'babel': ['.js', '.mjs', '.cjs'],
  'jsonc-eslint-parser': ['.json', '.jsonc'],
  '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
}
