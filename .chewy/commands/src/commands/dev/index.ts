import * as chewy from '@gochewy/lib'
import {Command} from '@oclif/core'
import {exec, execSync} from 'node:child_process'
import {LocalWorkspace} from "@pulumi/pulumi/automation"
import {constants, utils} from '@gochewy/lib'
import { cwd } from 'node:process'
import { resolve } from 'node:path'
import { getProjectConfigDir } from '@gochewy/lib/dist/files'
import { getInstalledComponentDefinition } from '@gochewy/lib/dist/components'

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

    const deploymentDir = resolve(cwd(), 'deployment');
    const projectConfigDir = getProjectConfigDir();
    const componentDefinition = getInstalledComponentDefinition();
    const projectName = `${componentDefinition.type}-${componentDefinition.name}`

    execSync(`pulumi login file://${projectConfigDir}`)

    const stack = await LocalWorkspace.createOrSelectStack({
      stackName: constants.CHEWY_DEV_ENV_NAME,
      workDir: deploymentDir,
    }, {
      projectSettings: {
        name: projectName,
        runtime: 'nodejs',
        backend: {
          url: `file://${projectConfigDir}`,
        },
      }
    });
  }
}
