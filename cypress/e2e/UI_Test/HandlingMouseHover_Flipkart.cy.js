// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Handling Mouse Hover in Cypress', function() {
    // test case
    it('Clicking on Sign-In', function (){
      // launch the application
      cy.visit("https://www.flipkart.com/");
      // to display hidden element with invoke() with show
      cy.get('._1_3w1N').trigger('mouseover').invoke('show')
        cy.contains('Orders').click({ force: true });
        //assert to verify the url
        cy.url().should('include','home_orders');
        cy.get('._36KMOx > span').should('have.text','Login')
     
      //click on the hidden element
     
   });
})