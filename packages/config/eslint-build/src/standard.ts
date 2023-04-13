// import g from 'globals'
import destr from 'destr'
import { stringify } from 'typia'
import { rules as tsRules } from '@typescript-eslint/eslint-plugin'
import { Linter } from 'eslint'
import { LintConfig } from './types.js'
import { DIR_NODE } from './constants.js'

const lib = 'eslint-config-standard'
const file = '.eslintrc.json'

const stdJson = import(`${DIR_NODE}/${lib}/${file}`, {
  assert: { type: 'json' }
}) as unknown as LintConfig

const getRuleKeys = async (): Promise<string[]> => [...(new Linter()).getRules().keys()]

const shared = getRuleKeys()
  .then(k => k.filter(n => Object.hasOwn(tsRules, n)))

const fromEntries = Object.fromEntries

const stdRuleOptions = (name: string) => {
  if (!stdJson.rules)
    throw new Error('Standard not loaded')

  const rule = stdJson.rules[name]

  if (typeof rule === 'undefined')
    throw new Error('Rule not found')

  if (typeof rule !== 'object')
    return rule

  return destr(stringify(rule))
}
