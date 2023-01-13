import * as chewy from '@gochewy/lib'
import {Command} from '@oclif/core'
import {exec} from 'node:child_process'

export default class InitIndex extends Command {
  static description = 'initializes the component after installation or when getting ready to develop (install dependencies, etc.)'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

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
