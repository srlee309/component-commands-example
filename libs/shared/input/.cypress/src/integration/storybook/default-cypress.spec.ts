describe('default cypress', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shared-input--primary'));

  it('should set text value', () => {
    cy.get('input').type('test').invoke('val').should('eq', 'test');
  });
});
