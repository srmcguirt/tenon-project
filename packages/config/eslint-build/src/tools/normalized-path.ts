import { fileURLToPath } from 'node:url'

export function normalizedPath(input: string | URL): string {
  return input instanceof URL
    ? fileURLToPath(input)
    : input
}
