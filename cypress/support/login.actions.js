Cypress.Commands.add("Login", (username)=>{
    const Password = Cypress.env('PASSWORD')
    cy.fixture('elements').then((el)=>{
        cy.get(el.usernameField).should('be.visible').type(username)
        cy.get(el.passwordField).should('be.visible').type(Password)
        cy.get(el.loginButton).should('be.visible').click()
    })
})