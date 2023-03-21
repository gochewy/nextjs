import * as chewy from '@gochewy/lib'
import {constants} from '@gochewy/lib'
import {Command} from '@oclif/core'
import {LocalWorkspace} from '@pulumi/pulumi/automation'
import {execSync} from 'node:child_process'
import {resolve} from 'node:path'
import {cwd} from 'node:process'

export default class DeployIndex extends Command {
  static description = 'deploys the component'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = [{name: 'environment'}]

  public async run(): Promise<void> {
    const {args} = await this.parse(DeployIndex)
    const environment = args.environment || constants.CHEWY_DEV_ENV_NAME

    process.env.PULUMI_CONFIG_PASSPHRASE = chewy.environments.getEnvironmentSecret(
      environment,
    )

    const deploymentDir = resolve(cwd(), '..', 'deployment')
    const projectConfigDir = chewy.files.getProjectConfigDir()
    const chewyProjectName = chewy.project.getProjectConfig().name // TODO: maybe this should be the ID?
    const componentName = chewy.components.getComponentName()

    if (!componentName) {
      throw new Error('Component name is not defined')
    }

    execSync(`pulumi login file://${projectConfigDir}`)

    const stack = await LocalWorkspace.createOrSelectStack({
      stackName: chewy.components.getDeployedComponentId({name: componentName}, environment),
      workDir: deploymentDir,
    }, {
      projectSettings: {
        name: chewyProjectName,
        runtime: 'nodejs',
        backend: {
          url: `file://${projectConfigDir}`,
        },
      },
    })

    const upResult = await stack.up()

    chewy.utils.log.info(`${JSON.stringify(upResult.outputs)}`)
  }
}
