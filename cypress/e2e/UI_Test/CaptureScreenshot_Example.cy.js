// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    //Visit the WebOrders Login Website
    cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");
    
   // Enter UserName and Password
    
    cy.get('#ctl00_MainContent_username').type('Tester')
    cy.get('#ctl00_MainContent_password').type('test')
    cy.get('#ctl00_MainContent_login_button').click()
  })

  it('Logout from App',function(){

       //logout verification
       cy.get('#ctl00_logout').click()
       cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
  })
  afterEach('Capture Screenshot', function() {
    //Visit the OrnageHRM Website
    cy.screenshot('WebOrder_Login');
  })
  })