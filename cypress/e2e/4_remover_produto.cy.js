describe("Sauce Labs", () => {
  beforeEach(() => {
    cy.login();
    cy.addProduto();
  });

  it("Remover Produto", () => {
    cy.removerProduto();
  });
});
