// type definitions for Cypress object "cy"
/// <reference types="cypress" />

context('My First Cypress Test', function() {
    specify('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    // runs once before all tests in the it block
    //Visit the WebOrders Login Website
    cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");
    
   // Enter UserName and Password
    
    cy.get('#ctl00_MainContent_username').type('Tester')
    cy.get('#ctl00_MainContent_password').type('test')
    cy.get('#ctl00_MainContent_login_button').click()

    cy.get('h1').should('have.text','Web Orders')
    cy.get('#ctl00_menu > :nth-child(3) > a').click()
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
      
  })
it('Logout from the application',function() {

    //logout verification
    cy.get('#ctl00_logout').click()
    cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
  
})

  })