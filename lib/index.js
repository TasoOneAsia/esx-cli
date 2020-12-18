"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packInfo = require('../package.json');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const flags = yargs(hideBin(process.argv));
flags
    .env(`ESX_CLI`)
    .command(require('./cmds/create.command'))
    .command(require('./cmds/help.command'))
    .argv;
//# sourceMappingURL=index.js.map