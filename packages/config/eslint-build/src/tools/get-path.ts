import { resolve } from 'node:path'
import type { LocateOptions, PathType } from '../types.js'
import { getStatFn, normalizedPath } from './mod.js'

const pathTypeMap: PathType = {
  directory: 'isDirectory',
  file: 'isFile',
}
const matchPathType = (type: string, stat: any): any => stat[pathTypeMap[type]]()

function checkPathType(type: string): void {
  if (Object.hasOwn(pathTypeMap, type))
    return

  throw new TypeError(`Invalid type: ${type}`)
}

function getPath(
  items: Iterable<string>,
  options: LocateOptions,
): string | undefined {
  const {
    curr = process.cwd(),
    pathType = 'file',
    allowSymlinks = true,
  } = options

  checkPathType(pathType)
  const cwd = normalizedPath(curr)
  const statFn = getStatFn(allowSymlinks)

  for (const item of items) {
    try {
      const stat = statFn(resolve(cwd, item), { throwIfNoEntry: false })
      if (!stat)
        continue
      if (matchPathType(pathType, stat))
        return item
    }
    catch {}
  }
}

export { getPath, getPath as default }
