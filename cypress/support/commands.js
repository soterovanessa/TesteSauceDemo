export const selectorsList = {
  loginUsername: "[type='text']",
  loginPassword: "[name='password']",
  buttonSubmit: "[type='submit']",
  buttonAdd: "[name='add-to-cart']",
  backProducts: "[name='back-to-products']",
  buttonCar: "[data-test='shopping-cart-link']",
  firstName: "input[id='first-name']",
  lastName: "input[id='last-name']",
  zipCode: "input[id='postal-code']",
};

const Chance = require("chance");

const chance = new Chance();

Cypress.Commands.add(
  "login",
  (
    login_username = Cypress.env("login_username"),
    login_password = Cypress.env("login_password")
  ) => {
    const login = () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get(selectorsList.loginUsername).type(login_username);
      cy.get(selectorsList.loginPassword).type(login_password, { log: false });
      cy.get(selectorsList.buttonSubmit).click();
      cy.url().should("include", "/inventory.html");
    };
    login();
  }
);

Cypress.Commands.add(
  "loginFail",
  (
    username_fail = Cypress.env("username_fail"),
    password_fail = Cypress.env("password_fail")
  ) => {
    const loginFail = () => {
      cy.visit("v1/");

      cy.get(selectorsList.loginUsername).type(username_fail);
      cy.get(selectorsList.loginPassword).type(password_fail, { log: false });
      cy.get(selectorsList.buttonSubmit).click();
    };
    loginFail();
  }
);

Cypress.Commands.add("detalhePedido", () => {
  const detalhePedido = () => {
    cy.scrollTo("bottom");
    cy.get("[data-test='inventory-item-desc']").eq(1).click();
  };
  detalhePedido();
});

Cypress.Commands.add("addProduto", () => {
  const addProduto = () => {
    cy.get("[data-test='item-3-title-link']").click();
    cy.get(selectorsList.buttonAdd).click();
    cy.get(selectorsList.backProducts).click();

    cy.get("[data-test='item-1-title-link']").click();
    cy.get(selectorsList.buttonAdd).click();
    cy.get(selectorsList.backProducts).click();
    cy.get(selectorsList.buttonCar).click();
  };
  addProduto();
});

Cypress.Commands.add("removerProduto", () => {
  const removerProduto = () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="checkout"]').click();
  };
  removerProduto();
});

Cypress.Commands.add("finalizarPedido", () => {
  const finalizarPedido = () => {
    cy.get(selectorsList.firstName).type(chance.name());
    cy.get(selectorsList.lastName).type(chance.last());
    cy.get(selectorsList.zipCode).type(chance.zip());
    cy.get("[name='continue']").click();
    cy.get('[data-test="finish"]').click();
  };

  finalizarPedido();
});

Cypress.Commands.add("logout", () => {
  const logout = () => {
    cy.get('[id="react-burger-menu-btn"]').should("be.visible");
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url();
  };
  logout();
});
