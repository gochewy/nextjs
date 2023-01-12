import {Command, Flags} from '@oclif/core'

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
    const {args, flags} = await this.parse(InitIndex)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /workspace/chewy-global/component-commands/src/commands/init/index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
