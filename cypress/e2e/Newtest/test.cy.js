
const users = Cypress.env('USERS')

describe('index.spec.cy.js', () => {

it('Should login as a error user', () => {
    cy.Login(users.error)
  })
  it('Should login as a visual user', () => {
    cy.Login(users.visual)
   })
})

// cypress/e2e/example.cy.js
//  cy.get('#APjFqb') 
//     .type('Ajes QA{enter}');

