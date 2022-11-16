// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
   // Enter UserName and Password
     
    cy.pause()
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
  
    cy.get("button[type='submit']").click()
     //Verify Dashboard Tab
     cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text','PIM')
     cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').should('have.text','Dashboard')
     cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
     cy.xpath("//a[normalize-space()='Logout']").click()
     cy.url().should('include','web/index.php/auth/login')
  })
  })