import * as chewy from '@gochewy/lib'
import {Command} from '@oclif/core'
import {exec} from 'node:child_process'
import {LocalWorkspace} from "@pulumi/pulumi/automation"
import {constants, utils} from '@gochewy/lib'

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

    const stack = await LocalWorkspace.createOrSelectStack({
      stackName: constants.CHEWY_DEV_ENV_NAME,
      projectName: 'test',
      program: async () => {},
    }, {
      projectSettings: {
        name: 'test',
        runtime: 'nodejs',
        backend: {
          url: 'file:///workspace/chewy-global/components/nextjs/.chewy/commands/tmp-backend',
        },
      }
    });
    console.log(stack)
  }
}
