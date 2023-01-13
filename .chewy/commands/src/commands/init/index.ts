import * as chewy from '@gochewy/lib'
import {Command, Flags} from '@oclif/core'
import {exec} from 'node:child_process'

export default class InitIndex extends Command {
  static description = 'initializes the component after installation or when getting ready to develop (install dependencies, etc.)'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const process = exec('yarn install', {cwd: chewy.files.getComponentDir()})
    await new Promise((resolve, reject) => {
      process.stdout?.on('data', data => console.log(data))
      process.stderr?.on('data', data => console.log(data))
      process.on('close', code => {
        if (code === 0) {
          resolve('Successfully installed dependencies')
        } else {
          reject()
        }
      })
    })
  }
}
