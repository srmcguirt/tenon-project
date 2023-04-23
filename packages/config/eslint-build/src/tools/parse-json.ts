const CTOR = 'constructor'
const PROTO = '__proto__'
const filterProto = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
const filterCtor = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
const isJson = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/

interface ParseOptions {
  strict?: boolean
}

function transformJSON(k: string, v: any) {
  if (k === PROTO)
    return

  if (k === CTOR && v && typeof v === 'object' && ('prototype' in v))
    return

  return v
}

function parseJSON(input: any, options: ParseOptions = {}): any {
  if (typeof input !== 'string')
    return input

  const { strict } = options

  const testValue = input.toLowerCase().trim()

  if (testValue === 'true')
    return true
  if (testValue === 'false')
    return false
  if (testValue === 'null')
    return null
  if (testValue === 'nan')
    return Number.NaN
  if (testValue === 'infinity')
    return Number.POSITIVE_INFINITY
  if (testValue === 'undefined')
    return undefined

  if (!isJson.test(input)) {
    if (strict)
      throw new TypeError('Invalid JSON')

    return input
  }

  try {
    if (filterProto.test(input) || filterCtor.test(input))
      return JSON.parse(input, transformJSON)

    return JSON.parse(input)
  }
  catch (error) {
    if (strict)
      throw new Error('Invalid JSON')

    return input
  }
}

export { parseJSON, parseJSON as default }
