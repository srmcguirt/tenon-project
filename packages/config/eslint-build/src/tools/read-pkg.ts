import { dirname, resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import type { PkgJson, ReadPkgOptions, ReadPkgResults } from '../types.js'
import { findMatch, normalizedPath, parseJSON } from './mod.js'

function getPkgPath(cwd: string | URL): string {
  return resolve(
    normalizedPath(cwd) ?? '.',
    'package.json',
  )
}

function _read(file: any) {
  const content = typeof file === 'string'
    ? parseJSON(file)
    : file

  return content
}

function readPkg(options: ReadPkgOptions): PkgJson {
  const cwd = options.cwd ?? '.'
  const pkg = readFileSync(getPkgPath(cwd), 'utf8')
  return _read(pkg)
}

function readPkgNearest(options?: ReadPkgOptions): ReadPkgResults | undefined {
  const fp = findMatch('package.json', options)
  if (!fp)
    return

  return {
    packageJson: readPkg({ ...options, cwd: dirname(fp) }),
    path: fp,
  }
}

export { readPkg, readPkgNearest }
