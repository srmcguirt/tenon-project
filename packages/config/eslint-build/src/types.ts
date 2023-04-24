import type { Linter as LinterType } from 'eslint'

export type FlatConfig = LinterType.FlatConfig

export type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

export type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true ? never : (KeyType extends ExcludeType ? never : KeyType)

interface ExceptionOptions { requireExactProps?: boolean }

export type Exception<ObjectType, KeysType extends keyof ObjectType, Options extends ExceptionOptions = { requireExactProps: false }> = {
  [KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType]
} & (Options['requireExactProps'] extends true
  ? Partial<Record<KeysType, never>>
  : {})

export interface PathType {
  [key: string]: string
}

export type FsStatType = 'statSync' | 'lstatSync'

export type FileStatusType = (path: string) => boolean

export interface LocateOptions {
  readonly curr?: string | URL
  readonly pathType?: 'file' | 'directory'
  readonly allowSymlinks?: boolean
}

export interface FindOptions {
  cwd?: string | URL
  stop?: string | URL
  limit?: number
}

export interface FindPkgOptions {
  cwd?: string | URL
}

export interface ReadPkgOptions {
  cwd?: string | URL
}

export interface ReadPkgResults {
  packageJson: PkgJson
  path: string
}

export interface PkgJsonEntryString { [key: string]: string }
export interface PkgJsonEntryAny { [key: string]: any }
export type PkgJsonPerson = string | { name: string; email?: string; url?: string }
export type PkgJsonBugs = string | { url: string; email?: string }
export type PkgJsonRepository = string | { type: string; url: string; directory?: string }
export type PkgJsonBin = string | { [key: string]: string }
export type PkgJsonType = 'module' | 'commonjs'
export type PkgJsonExports =
  | string
  | Record<'import' | 'require' | '.' | 'node' | 'browser' | string, string | { [key: string]: string } | { [key: string]: { import: string; require?: string } }>

export interface PkgJson {
  name?: string
  version?: string
  description?: string
  keywords?: string[]
  homepage?: string
  bugs?: PkgJsonBugs
  license?: string
  repository?: PkgJsonRepository
  scripts?: PkgJsonEntryString
  private?: boolean
  author?: PkgJsonPerson
  contributors?: PkgJsonPerson[]
  files?: string[]
  main?: string
  browser?: string
  bin?: PkgJsonBin
  man?: string | string[]
  dependencies?: PkgJsonEntryString
  devDependencies?: PkgJsonEntryString
  optionalDependencies?: PkgJsonEntryString
  peerDependencies?: PkgJsonEntryString
  types?: string
  typings?: string
  module?: string
  type?: PkgJsonType
  exports?: PkgJsonExports
  workspaces?: string[]
  [key: string]: any
}
