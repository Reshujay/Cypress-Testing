// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds
Cypress.config('pageLoadTimeout',80000)
describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    
        // Enter UserName and Password
         
         cy.get("input[placeholder='Username']").type('Admin')
         cy.get("input[placeholder='Password']").type('admin123')
         cy.get("button[type='submit']").click()
         //Verify Dashboard Tab
         cy.xpath("//span[text()='PIM']").should('have.text','PIM')
         cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
       
   //Verify Admin URL in navigation bar
   cy.url().should('include','/web/index.php/dashboard/index')
   //cy.get('#welcome').click()
   cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
   cy.xpath("//a[normalize-space()='Logout']").click()
   cy.url().should('include','web/index.php/auth/login')
   
  })
  })