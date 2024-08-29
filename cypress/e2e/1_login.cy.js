describe("Sauce Labs", () => {
  it("Login Sucesso", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    cy.login(username, password);
  });

  // Para rodar essa parte do código, por favor retirar o ".skip"
  it.skip("Login Fail", () => {
    const usernameFail = Cypress.env("usernameFail");
    const passwordFail = Cypress.env("passwordFail");

    cy.loginFail(usernameFail, passwordFail);
  });
});
