/* @flow */

import {runCLI, basicCLIWrapper} from '../util/helper'

const definition = `
usage: navy service [-n NAVY] start [-h] [<SERVICE>...]

Options:
  -n, --navy NAVY      Specifies the navy to use [env: NAVY_NAME] [default: dev]
  -h, --help           Shows usage
`

export default async function (parentArgs: Object) {
  const args = runCLI(definition)
  await basicCLIWrapper('start', args, { logging: 'Starting services...' })
}
