describe('Districts Section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/adminlogin')

    cy.get('input[name=username]').type('apo')
    cy.get('input[type=password]').type('apo88')
    cy.contains('Login').click()

    cy.visit('http://localhost:8080/admin/district-admins/view')
  })

  it('admin create works', () => {
    cy.get('#create-user').click()
    cy.url().should('include', 'create')

    
  })

  // it('admin delete works', () => {
  //   cy.get('#delete').click()
  // })
})
