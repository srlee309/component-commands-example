import { HeroPower } from '@component-commands-example/example/form/util';
import {
  exampleForm,
  ExampleFormHarness,
} from '../../../../.cypress/src/support/component-test-harness';
import { getHarness } from '@jscutlery/cypress-harness';

describe('component test harness', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=example-form--primary');
  });

  it('should show submit button and model values when they are entered', () => {
    exampleForm().its('submitButton').should('be.disabled');
    exampleForm()
      .typeName('test')
      .typeAlterEgo('test')
      .selectPower(HeroPower.superFlexible);
    exampleForm().its('submitButton').should('be.enabled');
    exampleForm().its('modelName').should('eq', 'test');
    exampleForm().its('modelAlterEgo').should('eq', 'test');
    exampleForm().its('modelPower').should('eq', HeroPower.superFlexible);
  });
  it('should show model values container when values are provided', () => {
    exampleForm().its('modelValuesContainer').should('not.exist');
    exampleForm()
      .typeName('test')
      .typeAlterEgo('test')
      .selectPower(HeroPower.superFlexible);
    exampleForm().its('modelValuesContainer').should('exist');
  });
});
