import path from "path";
const packInfo = require('../package.json');
const yargs = require('yargs')
import { Argv } from "yargs";
const { hideBin } = require('yargs/helpers')

const flags = yargs(hideBin(process.argv))
  flags
    .env(`ESX_CLI`)
    .command(require('./cmds/create.command'))
    .command(require('./cmds/help.command'))

    .argv
  // .env(`ESX_CLI`)
  //  .option('v', 'version')
  //  .version(() => packInfo.version)
  //  .command('help', 'Receive help for a command', (argv: Argv) => {
  //    return yargs.option('create')
  // })
//
// console.log(argv)

  // .help('help')
  // .usage('Usage $0 -x [flag]')
  // .showHelpOnFail(false, "Specify --help for available options")
  // .commandDir(path.resolve(process.cwd(), 'cmds'))
  // .argv
