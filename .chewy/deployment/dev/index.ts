import * as command from '@pulumi/command'
import * as chewy from '@gochewy/lib'

export default function dev(){
    const dir = chewy.files.getComponentDir();
    const cmd = new command.local.Command('launch', {
        create: 'yarn run dev',
        dir,
    })
    return {
        cmd,
    }
}