"use strict";

/**
 * building router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::building.building", {
  config: {
    // Apply the policy to the 'find' action
    find: {
      policies: ["global::is-owner"],
    },
    // Apply the policy to the 'findOne' action
    findOne: {
      policies: ["global::is-owner"],
    },
    // Apply the policy to the 'update' action
    update: {
      policies: ["global::is-owner"],
    },
    // Apply the policy to the 'delete' action
    delete: {
      policies: ["global::is-owner"],
    },
  },
});
