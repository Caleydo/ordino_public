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
    // Define network requests to intercept
    cy.intercept('/loggedinas').as('loggedinas');
    cy.intercept('/api/tdp/security_store_generated/generated_username').as('generated_username');
    cy.intercept('https://freegeoip.app/json/').as('freegeoip');

    // wait for network requests to finish before logging in
    cy.wait('@loggedinas')
    cy.wait('@generated_username')
    cy.wait('@freegeoip')

    // Check if form is visible and the two inputs are not empty (so not to click too fast on the button)
    cypress.cy.get('.form-signin').should('be.visible');
    cypress.cy.get('.form-signin #login_username').invoke('val').should('not.be.empty');
    cypress.cy.get('.form-signin #login_password').invoke('val').should('not.be.empty');
    // Add a small wait just for safety
    cypress.cy.wait(1000);
    cypress.cy.get('.form-signin button[type="submit"]').click();
    // Check that login disappears
    cypress.cy.get('.form-signin button[type=submit]').should('not.be.visible');
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
