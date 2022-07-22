// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


// -- This is a parent command --
Cypress.Commands.add('login', () => {

    // Check if form is visible and the two inputs are not empty (so not to click too fast on the button)
    cy.get('.form-signin').should('be.visible');
    cy.get('.form-signin #login_username').invoke('val').should('not.be.empty');
    cy.get('.form-signin #login_password').invoke('val').should('not.be.empty');
    // Add a small wait just for safety
    cy.wait(1000);
    cy.get('.form-signin button[type="submit"]').click();
    // Check that login disappears
    cy.get('.form-signin button[type=submit]').should('not.be.visible');
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
