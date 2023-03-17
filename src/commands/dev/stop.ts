import * as chewy from '@gochewy/lib'
import {constants} from '@gochewy/lib'
import {Command} from '@oclif/core'
import {LocalWorkspace} from '@pulumi/pulumi/automation'
import {execSync} from 'node:child_process'
import {resolve} from 'node:path'
import {cwd} from 'node:process'

export default class DevStop extends Command {
  static description = 'Stop and destroy the development environment'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.config.runCommand('destroy', ['dev'])
  }
}
