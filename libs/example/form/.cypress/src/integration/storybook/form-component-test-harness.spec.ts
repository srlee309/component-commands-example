import { HeroPower } from '@component-commands-example/example/form/util';
import { ExampleFormHarness } from '../../../../.cypress/src/support/component-test-harness';
import { getHarness } from '@jscutlery/cypress-harness';

describe('component-command', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=example-form--primary');
  });

  it('should show submit button and model values when they are entered', () => {
    getHarness(ExampleFormHarness).invoke('typeName', 'test');
  });
});
