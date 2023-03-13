import * as chewy from '@gochewy/lib'
import {constants} from '@gochewy/lib'
import {Command} from '@oclif/core'
import {LocalWorkspace} from '@pulumi/pulumi/automation'
import {execSync} from 'node:child_process'
import {resolve} from 'node:path'
import {cwd} from 'node:process'

export default class DevIndex extends Command {
  static description = 'runs the component in development'
  static strict = false

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {};

  static args = [];

  public async run(): Promise<void> {
    const { argv } = await this.parse(DevIndex);

    process.env.PULUMI_CONFIG_PASSPHRASE = chewy.environments.getEnvironmentSecret(
      constants.CHEWY_DEV_ENV_NAME,
    );

    const deploymentDir = resolve(cwd(), "..", "deployment");
    const projectConfigDir = chewy.files.getProjectConfigDir();
    const chewyProjectName = chewy.project.getProjectConfig().name;
    const componentDefinition = chewy.components.getInstalledComponentDefinition();
    const pulumiProjectName = `${chewyProjectName}-${componentDefinition.type}-${componentDefinition.name}`;

    execSync(`pulumi login file://${projectConfigDir}`);

    const stack = await LocalWorkspace.createOrSelectStack(
      {
        stackName: constants.CHEWY_DEV_ENV_NAME,
        workDir: deploymentDir,
      },
      {
        projectSettings: {
          name: pulumiProjectName,
          runtime: "nodejs",
          backend: {
            url: `file://${projectConfigDir}`,
          },
        },
      }
    );

    await stack.setConfig("test", { value: "test" });
    await stack.setConfig("secretTest", { value: "secretVal", secret: true });
  }
}
