import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { normalizedPath, parseJSON } from './mod.js'

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

function readPkg({ cwd }: { cwd: string | URL }) {
  const pkg = readFileSync(getPkgPath(cwd), 'utf8')
  return _read(pkg)
}

export { readPkg, readPkg as default }
