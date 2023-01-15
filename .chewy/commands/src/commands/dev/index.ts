import * as chewy from '@gochewy/lib'
import {Command} from '@oclif/core'
import {exec} from 'node:child_process'

export default class DevIndex extends Command {
  static description = 'runs the component in development'
  static strict = false

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {argv} = await this.parse(DevIndex)

    const cwd = chewy.files.getComponentDir()
    const command = ['yarn', 'dev', ...argv].join(' ')
    await new Promise((resolve, reject) => {
      const child = exec(command, {cwd})
      child.on('exit', code => {
        if (code === 0) {
          resolve(0)
        } else {
          reject(code)
        }
      })
      child.stdout?.on('data', data => {
        chewy.utils.log(data, {level: 'info'})
      })
      child.stderr?.on('data', data => {
        chewy.utils.log(data, {level: 'error'})
      })
    })
  }
}
