describe('component-command', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shared-input--primary'));

  it('should set text value', () => {
    cy.sharedInput().tap('type', 'test').prop('text').should('eq', 'test');
  });
});
