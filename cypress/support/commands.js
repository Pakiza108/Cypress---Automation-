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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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
 
// // customize cypress login command
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    cy.get('input[name=Email]').clear().type(email) 
    cy.get('input[name=Password]').clear().type(password)
    cy.get('.button-1').click()
  })
  // Visit  emsolutions 
//   Cypress.Commands.add('Visitsite', (site) => { 
//     cy.visit(site)  
//   })
