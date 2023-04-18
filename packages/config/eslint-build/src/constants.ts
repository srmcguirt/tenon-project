import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

export const DIR_NAME = getDirMeta(import.meta).dirName
export const DIR_PKG = resolve(DIR_NAME, '..')
export const DIR_NODE = resolve(DIR_PKG, 'node_modules')

export function getDirMeta(
    meta: any
  ): any {
  const fileName = fileURLToPath(meta.url)
  const dirName = dirname(fileName)
  return { fileName, dirName }
}
