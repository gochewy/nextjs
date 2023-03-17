import {Command} from '@oclif/core'

export default class DevStart extends Command {
  static description = 'Create and run the development environment'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.config.runCommand('deploy', ['dev'])
  }
}
