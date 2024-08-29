const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    login_username: "problem_user",
    login_password: "secret_sauce",
    username_fail: "teste",
    password_fail: " teste",
  },
});
