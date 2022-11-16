// type definitions for Cypress object "cy"
/// <reference types="cypress" />
describe('Spree Application Signup', function() {
    it('Visits the Spree Page and Perform Signup Action', function() {
    //Visit the Spree Website
    cy.visit("https://demo.spreecommerce.org/signup");  
   // Enter Email and Password
    cy.get("input[placeholder='Email']").type('resh318@spree.com')
    cy.get("input[placeholder='Password']").type('spree1234')
    cy.get("input[placeholder='Password Confirmation']").type('spree1234')
    cy.get("input[value='Sign Up']").click()
    //Verify MyAccount Tab
    cy.get('.spree-mb-large').should('have.text','My Account')
    })
    it('logout from SpreeCom', function(){
        cy.get("#account-button").click()
        cy.get('#link-to-account > [data-method="get"]').click()
        cy.get('#existing-customer > .col-lg-11 > .spree-mb-large').should('have.text','Log in to continue')
      })
  })