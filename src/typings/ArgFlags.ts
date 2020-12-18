import path, {ParsedPath} from 'path'
import {InferredOptionType, Options} from 'yargs'


export const CREATE_FLAG_OPTIONS: InferredOptionType<Options> = ({
  env: {
    alias: 'environment',
    default: 'production',
    usage: '$0 -env production',
    describe: 'Injects the process.env.NODE_ENV into final build',
    type: 'string'
  },
  o: {
    alias: 'output',
    default: 'lib',
    usage: '$0 -o <PATH>',
    describe: "Pick directory to putput to",
    type: "path"
  }
})