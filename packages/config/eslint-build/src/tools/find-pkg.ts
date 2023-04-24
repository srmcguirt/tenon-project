import { dirname } from 'node:path'
import type { FindPkgOptions } from '../types.js'
import { findMatch, readPkg } from './mod.js'

export function findPkg(options: FindPkgOptions = {}) {
  const fp = findMatch('package.json', options)
  if (!fp)
    return

  return {
    packageJson: readPkg({ ...options, cwd: dirname(fp) }),
    path: fp,
  }
}
