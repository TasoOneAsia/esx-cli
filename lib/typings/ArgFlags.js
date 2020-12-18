"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_FLAG_OPTIONS = void 0;
exports.CREATE_FLAG_OPTIONS = ({
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
});
//# sourceMappingURL=ArgFlags.js.map