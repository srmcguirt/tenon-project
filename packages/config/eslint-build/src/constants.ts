import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getBrowser, getEngines, readPkgNearest } from './tools/mod.js'

export const DIR_NAME = getDirMeta(import.meta).dirName
export const DIR_PKG = resolve(DIR_NAME, '..')
export const DIR_NODE = resolve(DIR_PKG, 'node_modules')
export const PKG = readPkgNearest()
export const IS_NODE = getEngines().node.is
export const IS_NODE_VERSION = getEngines().node.version
export const IS_BROWSER = getBrowser()

export function getDirMeta(
  meta: any,
): any {
  const fileName = fileURLToPath(meta.url)
  const dirName = dirname(fileName)
  return { fileName, dirName }
}
