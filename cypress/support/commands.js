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

import jwt from "jsonwebtoken";


// -- This is a parent command --

//Login command (default)
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


//Login command using custom credentials set in cypress.config.ts
Cypress.Commands.add('loginCustom', () => {

    // Check if form is visible and the two inputs are not empty (so not to click too fast on the button)
    cy.get('.form-signin').should('be.visible');
    // Add a small wait for the autogenerated name/pass to show up completely before clearing
    cy.wait(1000);
    cy.get('.form-signin #login_username').clear().type(Cypress.env('loginUser'));
    cy.get('.form-signin #login_password').clear().type(Cypress.env('loginPass'));
    // Add a small wait just for safety
    cy.wait(1000);
    cy.get('.form-signin button[type="submit"]').click();
    // Check that login disappears
    cy.get('.form-signin button[type=submit]').should('not.be.visible');
    
});


// Login command using Auth0 authentication
// Cypress.Commands.add(
//     'loginAuth0',
//     (username, password) => {
//       cy.log(`Logging in as ${username}`)
//       const client_id = Cypress.env('auth0_client_id')
//       const client_secret = Cypress.env('auth0_client_secret')
//       const audience = Cypress.env('auth0_audience')
//       const scope = Cypress.env('auth0_scope')
  
//       cy.request({
//         method: 'POST',
//         url: `https://${Cypress.env('auth0_domain')}/oauth/token`,
//         body: {
//           grant_type: 'password',
//           username,
//           password,
//           audience,
//           scope,
//           client_id,
//           client_secret,
//         },
//       }).then (({body}) => {cy.log('The response token: ' + body['access_token'])})
//         // cy.visit('http://localhost:8080/app/')
//   });

//Auth0 Testing
  Cypress.Commands.add(
    'loginAuth0',
    () => {
      cy.log(`Logging in with Auth0`)
      const client_id = Cypress.env('auth0_client_id')
      const client_secret = Cypress.env('auth0_client_secret')
      const audience = Cypress.env('auth0_audience')
      const scope = Cypress.env('auth0_scope')
      const username = Cypress.env('auth0_username')
      const password = Cypress.env('auth0_password')
  
      cy.request({
        method: 'POST',
        url: `https://${Cypress.env('auth0_domain')}/oauth/token`,
        body: {
          grant_type: 'password',
          username, 
          password,
          audience,
          scope,
          client_id,
          client_secret,
        },
      }).then(({ body }) => {
        const claims = jwt.decode(body.id_token)
        const {
          nickname,
          name,
          picture,
          updated_at,
          email,
          email_verified,
          sub,
          exp,
        } = claims
  
        const item = {
          body: {
            ...body,
            decodedToken: {
              claims,
              user: {
                nickname,
                name,
                picture,
                updated_at,
                email,
                email_verified,
                sub,
              },
              audience,
              client_id,
            },
          },
          expiresAt: exp,
        }
  
        window.localStorage.setItem('auth0Cypress', JSON.stringify(item))
        cy.intercept('/**/*', (req) => {
            req.headers['Authorization'] = `Bearer ${body.access_token}`;
        })
        cy.wait(2000);
        cy.visit('localhost:8080/')
      })
    }
  )






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