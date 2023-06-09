import pluginImport from 'eslint-plugin-import'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginJSONC from 'eslint-plugin-jsonc'

const { configs: configsImport } = pluginImport
const { configs: configsN } = pluginN
const { configs: configsPromise } = pluginPromise
const { configs: configsJSONC } = pluginJSONC

export const configSets = {
  import: { ...configsImport.recommended },
  jsonc: { ...configsJSONC['recommended-with-jsonc'] },
  n: { ...configsN.recommended },
  promise: { ...configsPromise.recommended },
}
