import { parse as tsParser } from '@typescript-eslint/parser'
import { parseForESLint as jsonParser } from 'jsonc-eslint-parser'

import pluginImport from 'eslint-plugin-import'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginJSONC from 'eslint-plugin-jsonc'

const { configs: configsImport } = pluginImport
const { configs: configsN } = pluginN
const { configs: configsPromise } = pluginPromise
const { configs: configsJSONC } = pluginJSONC

export const parsers = {
  'jsonc-eslint-parser': {
    jsonParser
  },
  '@typescript-eslint/parser': {
    tsParser
  }
}

export const rules = {
  'import': { ...configsImport.recommended },
  'jsonc': { ...configsJSONC['recommended-with-jsonc'] },
  'n': { ...configsN.recommended },
  'promise': { ...configsPromise.recommended }
}

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
  }
}
