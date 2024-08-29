describe("Sauce Labs", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Adicionar um Produto", () => {
    cy.addProduto();
  });
});
