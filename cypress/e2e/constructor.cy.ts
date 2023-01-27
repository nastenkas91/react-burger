import type {} from 'cypress';
import {LOCAL_URL} from "../../src/utils/constants";

describe('burger constructor page is working', () => {
  beforeEach(() => {
    cy.visit(LOCAL_URL);
    cy.intercept("GET", "/api/ingredients", { fixture: "ingredients" });
  });

  it('should work drag and drop', () => {
    cy.get('[data-testid="Краторная булка N-200i"]').trigger('dragstart');
    cy.get("[data-testid='drop-container']").trigger('drop');
    cy.get('[data-testid="constructor-bun-1"]').contains('Краторная булка N-200i').should('exist');
    cy.get('[data-testid="constructor-bun-2"]').contains('Краторная булка N-200i').should('exist');

    cy.get('[data-testid="Соус Spicy-X"]').trigger('dragstart');
    cy.get("[data-testid='drop-container']").trigger('drop');
    cy.get('[data-testid="constructor-ingredient"]').contains('Соус Spicy-X').should('exist');
  });

  it('should work order placement', () => {
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" });
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");

    cy.setCookie('refreshToken', 'test-refreshToken');
    cy.setCookie('accessToken', 'test-accessToken');

    cy.visit(LOCAL_URL);
    cy.get('[data-testid="Краторная булка N-200i"]').trigger('dragstart');
    cy.get("[data-testid='drop-container']").trigger('drop');
    cy.get('[data-testid="constructor-bun-1"]').contains('Краторная булка N-200i').should('exist');
    cy.get('[data-testid="constructor-bun-2"]').contains('Краторная булка N-200i').should('exist');

    cy.get('[data-testid="Соус Spicy-X"]').trigger('dragstart');
    cy.get("[data-testid='drop-container']").trigger('drop');
    cy.get('[data-testid="constructor-ingredient"]').contains('Соус Spicy-X').should('exist');

    cy.get('[data-testid="send-order-button"]').contains('Оформить заказ').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get("[data-testid='order-number']").contains("123").should("exist");
  });

  it('should modal with ingredient open', () => {
    cy.get('[data-testid="Краторная булка N-200i"]').should('exist').click();
    cy.get('[data-testid="modal-ingredient"]').should('exist');
    cy.get('[data-testid="modal-ingredient"]').contains('Краторная булка N-200i').should('exist');
  });

  it('should modal close with button', () => {
    cy.get('[data-testid="Краторная булка N-200i"]').should('exist').click();
    cy.get('[data-testid="modal-close-button"]').should('exist').click();
    cy.get('[data-testid="modal-ingredient"]').should('not.exist');
  });

  it('should modal close on overlay click', () => {
    cy.get('[data-testid="Краторная булка N-200i"]').should('exist').click();
    cy.get('[data-testid="modal-overlay"]').should('exist').click({force: true} );
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get('[data-testid="modal-ingredient"]').should('not.exist');
  });
})