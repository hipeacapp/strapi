"use strict";

/**
 * building controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::building.building",
  ({ strapi }) => ({
    async create(ctx) {
      // Get the authenticated user
      const { username } = ctx.state.user;
      // Append the owner field to the request body
      ctx.request.body.data.owner = username;
      // Call the default core controller create method
      const response = await super.create(ctx);
      return response;
    },
    async update(ctx) {
      // Get the authenticated user
      const { username } = ctx.state.user;

      ctx.request.body.data.owner = username;

      // Call the default core controller update method
      const response = await super.update(ctx);
      return response;
    },
    async find(ctx) {
      const { user } = ctx.state; // Access the authenticated user
      const { username } = user;
      // Fetch buildings where the owner field matches the username
      const buildings = await strapi.entityService.findMany(
        "api::building.building",
        {
          // @ts-ignore
          filters: { owner: { $eq: username } },
        }
      );
      return buildings;
    },
  })
);
