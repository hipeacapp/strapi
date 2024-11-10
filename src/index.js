"use strict";
const axios = require("axios");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    setInterval(async () => {
      try {
        await axios.get("https://hipeac-strapi.onrender.com/api/buildings/1");
        console.log("TEST!");
      } catch (error) {
        console.error("TEST failed", error.message);
      }
    }, 250000);
  },
};
