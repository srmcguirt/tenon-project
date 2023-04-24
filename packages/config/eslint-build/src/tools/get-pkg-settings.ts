/* eslint-disable no-console */
import browserslist from 'browserslist'
import { readPkgNearest } from './mod.js'

export interface EnginesResult {
  node: {
    is: boolean
    version: string
  }
}

export function getEngines(): EnginesResult {
  const { packageJson } = readPkgNearest({ cwd: process.cwd() }) ?? {}
  const nodeVersion = packageJson?.engines?.node
  return {
    node: {
      is: Boolean(nodeVersion),
      version: nodeVersion ?? '0.0.0',
    },
  }
}

export function getBrowser(): boolean {
  const result = browserslist.findConfig(process.cwd())
  return Boolean(result)
}

console.log(getEngines())
console.log(getBrowser())
