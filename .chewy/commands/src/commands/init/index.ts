import {Command, Flags} from '@oclif/core'
import {exec} from 'node:child_process'
import {cwd} from 'node:process'
import {promisify} from 'node:util'

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
    const execPromise = promisify(exec)
    console.log('CWD:', cwd())
    const {stdout, stderr} = await execPromise('yarn install')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
  }
}
