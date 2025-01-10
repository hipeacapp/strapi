"use strict";

module.exports = {
  async callback(ctx) {
    // Get the JWT token and user information from the authentication flow
    const { user, jwt } = ctx.state;

    // Set the JWT token as an HTTP-only cookie
    ctx.cookies.set("token", jwt, {
      httpOnly: true, // Ensures the cookie is only accessible via HTTP requests
      secure: process.env.NODE_ENV === "production", // Only set secure cookies in production (HTTPS)
      maxAge: 60 * 60 * 24 * 7 * 1000, // Set the cookie to expire in 7 days
      sameSite: "Strict", // Restrict cross-site cookie access
      path: "/", // Make the cookie accessible across the entire site
    });

    // Send back the user information or any success message
    ctx.send({
      user,
      message: "Successfully logged in with Google.",
    });
  },
  async logout(ctx) {
    ctx.cookies.set("token", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0, // Expire the cookie immediately
      sameSite: "Strict",
      path: "/",
    });

    ctx.send({ message: "Successfully logged out." });
  },
};
