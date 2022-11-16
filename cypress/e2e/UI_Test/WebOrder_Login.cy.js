// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds
Cypress.config('pageLoadTimeout',100000)
describe('Web Order Page Testing', () => {
  beforeEach('Login to Web Order', () => {
    cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')
    cy.get('#ctl00_MainContent_username').type("Tester")
    cy.get('#ctl00_MainContent_password').type("test")
    cy.get('#ctl00_MainContent_login_button').click()

    cy.get('h1').should('have.text','Web Orders')
   })
  it('Click on Order', () => {
   
    cy.xpath("//a[@href='Process.aspx']").click()
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').clear()
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type('4')
    cy.get(':nth-child(5) > .btn_dark').click()
    cy.get('#ctl00_MainContent_fmwOrder_txtName').type('Reshmi')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type('OMR')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type('Chennai')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type('600130')
    cy.get('#ctl00_MainContent_fmwOrder_cardList_0').click()
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type('123456789012')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type('04/24')
    cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()
    cy.get('#ctl00_menu > :nth-child(1) > a').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','Reshmi')


  })
  afterEach(function() {
    cy.get('#ctl00_logout').click()
  })
})