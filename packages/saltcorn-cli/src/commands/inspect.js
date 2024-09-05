/**
 * @category saltcorn-cli
 * @module commands/create-user
 */
const { Command, Flags, Args, ux } = require("@oclif/core");
const { maybe_as_tenant, init_some_tenants } = require("../common");

// todo update logic based on modify-user command
/**
 * InspectCommand Class
 * @extends oclif.Command
 * @category saltcorn-cli
 */
class InspectCommand extends Command {
  /**
   * @returns {Promise<void>}
   */
  async run() {
    const User = require("@saltcorn/data/models/user");

    const { flags, args } = await this.parse(InspectCommand);

    // init tenant
    await init_some_tenants(flags.tenant);

    // run function as specified tenant
    await maybe_as_tenant(flags.tenant, async () => {
      const Class = require(`@saltcorn/data/models/${args.type}`);
      if (args.name) {
        const entity = await Class.findOne({ name: args.name });

        if (entity) console.log(JSON.stringify(entity, null, 2));
        else {
          console.error("Not found");
          this.exit(1);
        }
      } else {
        const entities = await Class.find({});
        entities.forEach((e) => console.log(e.name));
      }
    });
    this.exit(0);
  }
}

/**
 * @type {string}
 */
InspectCommand.description = `Inspect an entity's JSON representation, or list entities`;

/**
 * @type {object}
 */
InspectCommand.flags = {
  tenant: Flags.string({
    char: "t",
    description: "tenant",
  }),
};

InspectCommand.args = {
  type: Args.string({
    required: true,
    description: "Entity type",
    options: ["view", "page", "trigger", "table"],
  }),
  name: Args.string({
    description: "Entity name. If not supplied, list all names",
  }),
};

module.exports = InspectCommand;
