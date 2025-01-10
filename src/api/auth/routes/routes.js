[
  {
    method: "GET",
    path: "/auth/google/callback",
    handler: "custom-google.callback",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/auth/logout",
    handler: "custom-google.logout",
    config: {
      policies: [],
    },
  },
];
