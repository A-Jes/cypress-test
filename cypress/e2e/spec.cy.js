const users = Cypress.env('USERS')

describe('index.spec.cy.js', () => {
  it('Should login as a standard user', () => {
    cy.Login(users['standard'])
  })
  it('Should login as a locked out user', () => {
    cy.Login(users['locked'])
  })
  it('Should login as a problem user', () => {
    cy.Login(users.problem)
  })
  it('Should login as a performance_glitch user', () => {
    cy.Login(users.glitch)
  })
  it('Should login as a error user', () => {
    cy.Login(users.error)
  })
  it('Should login as a visual user', () => {
    cy.Login(users.visual)
  })
})