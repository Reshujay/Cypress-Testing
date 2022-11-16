// type definitions for Cypress object "cy"
/// <reference types="cypress" />

context('Handling Alertst', function () {

    // runs once before all tests in the it block
    beforeEach(function () {
  
      //Visit the Java Script Alerts Website
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  
    })
  
    it('Alert type- Box', function () {
      //Below function will call Alert and verify with expected results
      cy.on('window:alert', function (alertText) {
        expect(alertText).eq('I am a JS Alert')
      })
      //This will defult click on OK Button
      cy.contains('Click for JS Alert').click()
    })
  
    it('Confirm type - Alert', function () {
      cy.on('window:confirm', function (confirmText) {
        //This will click on Cancel button
        expect(confirmText).eq('I am a JS Confirm')
        return false
      })
      //This is defult click on OK Button
      cy.contains('Click for JS Confirm').click()
  
    })
  
    it('Prompt type - Alert', function () {
      //Verify Admin Tab and Click
  
      cy.window().then(function ($win) {
        cy.stub($win, 'prompt').returns('Cypress')
        cy.contains('Click for JS Prompt').click()
  
      })
    })
  })