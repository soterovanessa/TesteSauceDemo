describe("Sauce Labs", () => {
  beforeEach(() => {
    cy.login();
    cy.addProduto();
    cy.removerProduto();
  });

  it("Finalizar Compra", () => {
    cy.finalizarPedido();
  });
});
