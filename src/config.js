/* @flow */

import path from 'path'
import bluebird from 'bluebird'

const fs = bluebird.promisifyAll(require('fs'))
const mkdirp = bluebird.promisify(require('mkdirp'))

export type Config = {
  defaultNavy: ?string,
}

let _config: ?Config = null

export function getConfigPath(): string {
  const home = process.env.HOME

  if (!home) {
    throw new Error('Home directory not available')
  }

  return path.join(home, '.navy', 'config.json')
}

export function getConfig(): Config {
  if (_config) {
    return _config
  }

  try {
    const file = fs.readFileSync(getConfigPath(), 'utf8')
    _config = JSON.parse(file)

    return _config
  } catch (ex) {
    return {
      defaultNavy: null,
    }
  }
}

export async function setConfig(config: Config): Promise<void> {
  await mkdirp(path.dirname(getConfigPath()))
  await fs.writeFileAsync(getConfigPath(), JSON.stringify(config, null, 2))
}