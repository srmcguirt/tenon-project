import { dirname, parse, resolve } from 'node:path'
import type { FindOptions } from '../types.js'
import { getPath, normalizedPath } from './mod.js'

const searchStop = Symbol('searchStop')

function _find(search: any, options: FindOptions = {}) {
  let dir = resolve(normalizedPath(options.cwd || ''))
  const { root } = parse(dir)
  const stop = options.stop || root
  const limit = options.limit || Number.POSITIVE_INFINITY
  const paths = [search].flat()

  const getMatches = (matchOptions: any) => {
    if (typeof search !== 'function')
      return getPath(paths, matchOptions)

    const match = search(matchOptions.cwd)

    if (typeof match === 'string')
      return getPath([match], matchOptions)

    return match
  }

  const matches = []

  while (true) {
    const match = getMatches({ ...options, cwd: dir })

    if (match === searchStop)
      break

    if (match)
      matches.push(resolve(dir, match))

    if (dir === stop || matches.length >= limit)
      break

    dir = dirname(dir)
  }

  return matches
}

function findMatch(search: string | string[], options: FindOptions = {}): string {
  const matches = _find(search, { ...options, limit: 1 })
  return matches[0]
}

export { findMatch, findMatch as default }
