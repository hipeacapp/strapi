module.exports = {
  routes: [
    {
      method: "POST",
      path: "/auth/local",
      handler: "auth.login",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/auth/logout",
      handler: "auth.logout",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
