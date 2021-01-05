import { HeroPower } from '@component-commands-example/example/form/util';
import { ExampleFormHarness } from '../../../../.cypress/src/support/component-test-harness';
import { getHarness } from '@jscutlery/cypress-harness';

describe('component-command', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=example-form--primary');
  });

  it('should show submit button and model values when they are entered', () => {
    getHarness(ExampleFormHarness)
      .invoke('getSubmitButton')
      .should('be.disabled');
    getHarness(ExampleFormHarness).invoke('typeName', 'test');
    getHarness(ExampleFormHarness).invoke('typeAlterEgo', 'test');
    getHarness(ExampleFormHarness).invoke(
      'selectPower',
      HeroPower.superFlexible
    );
    getHarness(ExampleFormHarness)
      .invoke('getSubmitButton')
      .should('be.enabled');
    getHarness(ExampleFormHarness).invoke('getModelName').should('eq', 'test');
    getHarness(ExampleFormHarness)
      .invoke('getModelAlterEgo')
      .should('eq', 'test');
    getHarness(ExampleFormHarness)
      .invoke('getModelPower')
      .should('eq', HeroPower.superFlexible);
  });
});
