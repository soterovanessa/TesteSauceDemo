describe("Sauce Labs", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Detalhe do Produto", () => {
    cy.detalhePedido();
  });
});
