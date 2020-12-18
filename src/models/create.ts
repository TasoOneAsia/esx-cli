import fse from 'fs-extra'

import { injectable } from "inversify";

const CLI_STEPS = {
  name: {
    alias: 'n',
    type: 'input',
    demandOption: true
  },
  template: {type: "input", default: "react-typescript", describe: "The template to use"}
}