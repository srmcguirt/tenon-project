import type { FindPkgOptions } from '../types.js'
import { findMatch } from './mod.js'

export function findPkg(options: FindPkgOptions = {}) {
  const fp = findMatch('package.json', options)
  if (!fp)
    return

  return {
    path: fp,
  }
}
