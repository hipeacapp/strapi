module.exports = {
  async login(ctx) {
    const { identifier, password } = ctx.request.body;

    // Use Strapi's default login logic
    const { user, jwt } = await strapi.plugins[
      "users-permissions"
    ].services.jwt.login({ identifier, password });

    if (!user) {
      return ctx.badRequest("Invalid credentials");
    }

    // Set JWT as HttpOnly cookie
    ctx.cookies.set("jwt", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
    });

    // Send user data in response
    ctx.send({
      user,
    });
  },
};
