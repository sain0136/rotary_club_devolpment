describe('Admin Portal', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/admin')
  })

  it('redirects to login', () => {
    cy.url().should('include', 'adminlogin')
  })

  it('denies acces on invalid credentials', () => {
    cy.get('input[name=username]').type('apo')
    cy.get('input[type=password]').type('apo31')
    cy.contains('Login').click()

    cy.contains('Credentials not valid!')
  })

  it('grants acces on valid credentials', () => {
    cy.get('input[name=username]').type('apo')
    cy.get('input[type=password]').type('apo88')
    cy.contains('Login').click()

    cy.url().should('include', 'admin/home')
  })

  


});
