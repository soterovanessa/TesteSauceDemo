describe("Sauce Labs", () => {
  beforeEach(() => {
    cy.login();
    cy.detalhePedido();
  });

  it("Logout", () => {
    cy.logout();
  });
});
