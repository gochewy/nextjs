oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gochewy/component-commands
$ commands COMMAND
running command...
$ commands (--version)
@gochewy/component-commands/0.0.0 linux-x64 node-v16.17.1
$ commands --help [COMMAND]
USAGE
  $ commands COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`commands help [COMMAND]`](#commands-help-command)
* [`commands plugins`](#commands-plugins)
* [`commands plugins:install PLUGIN...`](#commands-pluginsinstall-plugin)
* [`commands plugins:inspect PLUGIN...`](#commands-pluginsinspect-plugin)
* [`commands plugins:install PLUGIN...`](#commands-pluginsinstall-plugin-1)
* [`commands plugins:link PLUGIN`](#commands-pluginslink-plugin)
* [`commands plugins:uninstall PLUGIN...`](#commands-pluginsuninstall-plugin)
* [`commands plugins:uninstall PLUGIN...`](#commands-pluginsuninstall-plugin-1)
* [`commands plugins:uninstall PLUGIN...`](#commands-pluginsuninstall-plugin-2)
* [`commands plugins update`](#commands-plugins-update)

## `commands help [COMMAND]`

Display help for commands.

```
USAGE
  $ commands help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for commands.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.22/src/commands/help.ts)_

## `commands plugins`

List installed plugins.

```
USAGE
  $ commands plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ commands plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.12/src/commands/plugins/index.ts)_

## `commands plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ commands plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ commands plugins add

EXAMPLES
  $ commands plugins:install myplugin 

  $ commands plugins:install https://github.com/someuser/someplugin

  $ commands plugins:install someuser/someplugin
```

## `commands plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ commands plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ commands plugins:inspect myplugin
```

## `commands plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ commands plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ commands plugins add

EXAMPLES
  $ commands plugins:install myplugin 

  $ commands plugins:install https://github.com/someuser/someplugin

  $ commands plugins:install someuser/someplugin
```

## `commands plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ commands plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ commands plugins:link myplugin
```

## `commands plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ commands plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ commands plugins unlink
  $ commands plugins remove
```

## `commands plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ commands plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ commands plugins unlink
  $ commands plugins remove
```

## `commands plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ commands plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ commands plugins unlink
  $ commands plugins remove
```

## `commands plugins update`

Update installed plugins.

```
USAGE
  $ commands plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
