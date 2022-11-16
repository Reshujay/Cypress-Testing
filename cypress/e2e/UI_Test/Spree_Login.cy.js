// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Spree Application', function() {

    it('Visits the Spree Page and Perform Login Action', function() {
    //Visit the Spree Website
    cy.visit("https://demo.spreecommerce.org/login");
    
   // Enter Emaile and Password
    
    cy.get("input[placeholder='Email']").type('reshujay@spree.com')
    cy.get("input[placeholder='Password']").type('Spree12345$')
    cy.get("input[value='Login']").click()
    //Verify MyAccount Tab
    cy.get('.spree-mb-large').should('have.text','My Account')
    })

    it('logout from SpreeCom', function(){
        cy.get("#account-button").click()
        cy.get('#link-to-account > [data-method="get"]').click()
        cy.get('#existing-customer > .col-lg-11 > .spree-mb-large').should('have.text','Log in to continue')
      })
  })