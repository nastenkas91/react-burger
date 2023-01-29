import type {} from 'cypress';

describe('burger constructor page is working', () => {
  const bunToDrag = 'Краторная булка N-200i';
  const ingredientToDrug = 'Соус Spicy-X';
  const dropContainer = 'drop-container';
  const topBun = 'constructor-bun-1';
  const bottomBun = 'constructor-bun-2';
  const constructorIngredient = 'constructor-ingredient';
  const modalIngredient = 'modal-ingredient';

  beforeEach(() => {
    cy.visit('/');
    cy.intercept("GET", "/api/ingredients", { fixture: "ingredients" });
  });

  it('should work drag and drop', () => {
    cy.get(`[data-testid="${bunToDrag}"]`).trigger('dragstart');
    cy.get(`[data-testid="${dropContainer}"]`).trigger('drop');
    cy.get(`[data-testid="${topBun}"]`).contains(bunToDrag).should('exist');
    cy.get(`[data-testid="${bottomBun}"]`).contains(bunToDrag).should('exist');

    cy.get(`[data-testid="${ingredientToDrug}"]`).trigger('dragstart');
    cy.get(`[data-testid="${dropContainer}"]`).trigger('drop');
    cy.get(`[data-testid="${constructorIngredient}"]`).contains(ingredientToDrug).should('exist');
  });

  it('should work order placement', () => {
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" });
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");

    cy.setCookie('refreshToken', 'test-refreshToken');
    cy.setCookie('accessToken', 'test-accessToken');

    cy.visit('/');
    cy.get(`[data-testid="${bunToDrag}"]`).trigger('dragstart');
    cy.get(`[data-testid="${dropContainer}"]`).trigger('drop');
    cy.get(`[data-testid="${topBun}"]`).contains(bunToDrag).should('exist');
    cy.get(`[data-testid="${bottomBun}"]`).contains(bunToDrag).should('exist');

    cy.get(`[data-testid="${ingredientToDrug}"]`).trigger('dragstart');
    cy.get(`[data-testid="${dropContainer}"]`).trigger('drop');
    cy.get(`[data-testid="${constructorIngredient}"]`).contains(ingredientToDrug).should('exist');

    cy.get('[data-testid="send-order-button"]').contains('Оформить заказ').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get("[data-testid='order-number']").contains("123").should("exist");
  });

  it('should modal with ingredient open', () => {
    cy.get(`[data-testid="${bunToDrag}"]`).should('exist').click();
    cy.get(`[data-testid="${modalIngredient}"]`).should('exist');
    cy.get(`[data-testid="${modalIngredient}"]`).contains(bunToDrag).should('exist');
  });

  it('should modal close with button', () => {
    cy.get(`[data-testid="${bunToDrag}"]`).should('exist').click();
    cy.get('[data-testid="modal-close-button"]').should('exist').click();
    cy.get(`[data-testid="${modalIngredient}"]`).should('not.exist');
  });

  it('should modal close on overlay click', () => {
    cy.get(`[data-testid="${bunToDrag}"]`).should('exist').click();
    cy.get('[data-testid="modal-overlay"]').should('exist').click({force: true} );
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get(`[data-testid="${modalIngredient}"]`).should('not.exist');
  });
})