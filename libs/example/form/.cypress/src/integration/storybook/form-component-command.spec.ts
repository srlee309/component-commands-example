import { HeroPower } from '@component-commands-example/example/form/util';

describe('component-command', () => {
  beforeEach(() => cy.visit('/iframe.html?id=example-form--primary'));

  it('should show submit button and model values when they are entered', () => {
    cy.exampleForm().prop('submitButton').should('be.disabled');
    cy.exampleForm()
      .tap('typeName', 'test')
      .tap('typeAlterEgo', 'test')
      .tap('selectPower', HeroPower.superFlexible);
    cy.exampleForm().prop('submitButton').should('be.enabled');
    cy.exampleForm().prop('modelName').should('eq', 'test');
    cy.exampleForm().prop('modelAlterEgo').should('eq', 'test');
    cy.exampleForm().prop('modelPower').should('eq', HeroPower.superFlexible);
  });
  it('should show model values container when values are provided', () => {
    cy.exampleForm().prop('modelValuesContainerElement').should('not.exist');
    cy.exampleForm()
      .tap('typeName', 'test')
      .tap('typeAlterEgo', 'test')
      .tap('selectPower', HeroPower.superFlexible);
    cy.exampleForm().prop('modelValuesContainerElement').should('exist');
  });
});
