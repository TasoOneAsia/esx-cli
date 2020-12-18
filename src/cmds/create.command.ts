import { Argv, Arguments, Options } from "yargs";
// import { COMMAND_PREFIX } from "../../utils/commands.utils";
import { CREATE_FLAG_OPTIONS } from "../typings/ArgFlags";

export const command: string = 'create <app> [-t] ]'

export const describe = '|| Create a new esx-ui boilerplate'

// export const builder = () => CREATE_FLAG_OPTIONS

export const builder = {}

export const handler = (argv: Argv) => {
  console.log(argv)
}
