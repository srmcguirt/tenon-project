import pluginImport from 'eslint-plugin-import'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginJSONC from 'eslint-plugin-jsonc'
import pluginTypescript from '@typescript-eslint/eslint-plugin'

import { parsers } from './parsers'

export const plugins = {
  'import': {
    ...pluginImport
  },
  'jsonc': {
    ...pluginJSONC, parsers
  },
  'n': {
    ...pluginN
  },
  'promise': {
    ...pluginPromise
  },
  'typescript': {
    ...pluginTypescript
  }
}
