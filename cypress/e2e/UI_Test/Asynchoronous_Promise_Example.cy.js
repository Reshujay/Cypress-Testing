// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
  it('Visits the OrangeHRM Page and Perform Login Action', function () {
    //Visit the OrnageHRM Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    // Search for product which start with Ca 

    cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca')
    cy.wait(2000)

    //Verify that total 4 products get displayed with word start with ca
    cy.get('.product:visible').should('have.length', 4)
    cy.get('div[class="products"]').find('.product').should('have.length', 4)
    //Parent and child chaining using Find command
    cy.get('.products').find('.product').should('have.length', 4)
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    //Would like to print message in colnsole but post Add to Cart command , for that we need to use Promise concept
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
      console.log('Capsicum added to Cart- From Console')
    })

    //As a user i would like to Print message in Console about Product Added to Cart
    //console.log('Capsicum added to Cart')
    cy.log('Capsicum added to Cart- From Cy Log')
  })
})