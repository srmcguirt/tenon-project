import { readPackageJSON } from 'pkg-types'

export const checkNodeSupported = async () => {
  const { packageJSON = {} } = await readPackageJSON()
}

export const getGlobals = async () => {

}

