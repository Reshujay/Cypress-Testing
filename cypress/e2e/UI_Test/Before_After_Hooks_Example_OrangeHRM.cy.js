// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {

    before(function() {
      // runs once before all tests in the it block
      //Visit the OrnageHRM Website
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      
      // Enter UserName and Password
       
       cy.get("input[placeholder='Username']").type('Admin')
       cy.get("input[placeholder='Password']").type('admin123')
       cy.get("button[type='submit']").click()
  
    })
    
    it('Visits the PIM page', function() {
      //Verify Dashboard Tab
      cy.xpath("//span[text()='PIM']").should('have.text','PIM')
    })
  
    it('Visits the Dashboard page at OrangeHRM', function() {
      //Verify Admin Tab and Click
      cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
         
   })
  
    after(function() {
      // runs once after all tests in the it/specify block
      //Visit the OrnageHRM Website
      cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
      cy.xpath("//a[normalize-space()='Logout']").click()
      cy.url().should('include','web/index.php/auth/login')
      
  
    })
  
    })