import { sharedInput } from '@cypress/shared/input';

describe('default cypress', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shared-input--primary'));

  it('should set text value', () => {
    sharedInput().invoke('type', 'test').its('text').should('eq', 'test');
  });
});
