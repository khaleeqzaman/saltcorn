/**
 * @category saltcorn-cli
 * @module commands/set-cfg
 */
const { Command, Flags, Args, ux } = require("@oclif/core");
const { maybe_as_tenant, init_some_tenants } = require("../common");

/**
 * SetCfgCommand Class
 * @extends oclif.Command
 * @category saltcorn-cli
 */
class GetCfgCommand extends Command {
  /**
   * @returns {Promise<void>}
   */
  async run() {
    const { args, flags } = await this.parse(GetCfgCommand);
    await init_some_tenants(flags.tenant);

    await maybe_as_tenant(flags.tenant, async () => {
      if (flags.plugin) {
        const Plugin = require("@saltcorn/data/models/plugin");
        const plugin = await Plugin.findOne({ name: flags.plugin });
        if (args.key)
          console.log(JSON.stringify(plugin.configuration[args.key], null, 2));
        else console.log(JSON.stringify(plugin.configuration, null, 2));

        await plugin.upsert();
      } else {
        const { getState } = require("@saltcorn/data/db/state");
        if (args.key)
          console.log(JSON.stringify(getState().getConfig(args.key), null, 2));
        else {
          const keys = Object.keys(getState().configs);
          const kvs = {};
          keys.forEach((k) => {
            kvs[k] = getState().getConfig(k);
          });
          console.log(JSON.stringify(kvs, null, 2));
        }
      }
    });
    this.exit(0);
  }
}

/**
 * @type {string}
 */
GetCfgCommand.description = `Get a configuration value. The value is printed to stdout as a JSON value`;

/**
 * @type {object[]}
 */
GetCfgCommand.args = {
  key: Args.string({
    required: false,
    description: "Configuration key",
  }),
};

/**
 * @type {object}
 */
GetCfgCommand.flags = {
  tenant: Flags.string({
    char: "t",
    description: "tenant",
  }),
  plugin: Flags.string({
    char: "p",
    description: "plugin",
  }),
};

module.exports = GetCfgCommand;
