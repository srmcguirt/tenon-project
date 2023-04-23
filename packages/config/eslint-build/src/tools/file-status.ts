import type { StatSyncFn } from 'node:fs'
import { lstatSync, statSync } from 'node:fs'

export function getStatFn(allowSymlinks: boolean): StatSyncFn {
  return allowSymlinks ? statSync : lstatSync
}
