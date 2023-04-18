import { rules as tsRules } from '@typescript-eslint/eslint-plugin'
import { Linter } from 'eslint'

export const getLintRuleKeys = (): string[] => [...(new Linter()).getRules().keys()]

export const sharedRuleKeys = getLintRuleKeys().filter(n => Object.hasOwn(tsRules, n))
