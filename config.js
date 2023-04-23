import globals from 'globals'
import { parsers } from './config/parsers.js'
import { plugins, rules as pluginRules } from './config/plugins.js'

import configPrettier from 'eslint-config-prettier'
import stdRules from './config/standard.rules.js'

export default [
  configPrettier,
  {
    ignores: [
      '*.min.*',
      '*.d.ts',
      'CHANGELOG.md',
      'LICENSE',
      'temp',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock'
    ],
    languageOptions: {
      parserOptions: {
        parser: parsers.tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.node,
        ...globals.es2015,
        ...globals.es2021,
        ...globals.browser,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    plugins: {
      'import': plugins.import,
      'n': plugins.n,
      'promise': plugins.promise
    },
    rules: {

    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs']
        },
        typescript: {}
      }
    }
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: { ...stdRules }
  },
  {
    files: ['**/*.json', '**/*.json5'],
    plugins: {
      jsonc: plugins.jsonc
    },
    languageOptions: {
      parserOptions: {
        parser: 'jsonc/jsonc-eslint-parser'
      },
      rules: {
        ...pluginRules.jsonc
      }
    }
  }
]
