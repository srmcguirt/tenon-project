import type { Linter as LinterType } from 'eslint'

export type LintConfig = LinterType.FlatConfig | LinterType.Config
