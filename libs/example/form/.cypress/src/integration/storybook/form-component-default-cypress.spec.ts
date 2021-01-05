import { HeroPower } from '@component-commands-example/example/form/util';

describe('component-command', () => {
  beforeEach(() => cy.visit('/iframe.html?id=example-form--primary'));

  it('should show submit button and model values when they are entered', () => {
    cy.get('[data-cy="submit-button"]').should('be.disabled');
    cy.get('[data-cy="name-control"]').type('test');
    cy.get('[data-cy="alter-ego-control"]').type('test');
    cy.get('[data-cy="power-control"]').select(HeroPower.superFlexible);
    cy.get('[data-cy="submit-button"]').should('be.enabled');
    cy.get('[data-cy="model-name"]').invoke('text').should('eq', 'test');
    cy.get('[data-cy="model-alter-ego"]').invoke('text').should('eq', 'test');
    cy.get('[data-cy="model-power"]')
      .invoke('text')
      .should('eq', HeroPower.superFlexible);
  });
  it('should show model values container when values are provided', () => {
    cy.get('[data-cy="model-values-container"]').should('not.exist');
    cy.get('[data-cy="name-control"]').type('test');
    cy.get('[data-cy="alter-ego-control"]').type('test');
    cy.get('[data-cy="power-control"]').select(HeroPower.superFlexible);
    cy.get('[data-cy="model-values-container"]').should('exist');
  });
});
