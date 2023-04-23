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
