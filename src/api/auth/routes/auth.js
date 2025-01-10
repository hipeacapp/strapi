module.exports = {
  routes: [
    {
      method: "POST",
      path: "/auth/login",
      handler: "auth.login",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/auth/logout",
      handler: "auth.logout",
      config: {
        auth: false,
      },
    },
  ],
};
