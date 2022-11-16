// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visit the Selenium Practice website and select user selected product', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
   // Search for product which start with Ca 
    
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //Verify that total 4 products get displayed with word start with ca
    cy.get('.products').find('.product').should('have.length',4)
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    //cy.get('tbody').find('tr').each
    cy.get('.products').find('.product').each(($el,index,$list) => {
      const itemtext=$el.find('h4.product-name').text()
      const itemprice=$el.find('p.product-price').text()
      if(itemtext.includes('Cauliflower'))
      {
        $el.find('button').click()
        cy.get('.cart-icon').click()
        cy.get('.cart-item').find('.product-name').should('have.contain', itemtext)
        cy.get('.cart-item').find('.product-price').should('have.contain', itemprice)
      }

    })
    // cy.get('.cart-icon').click()
    // cy.get('.cart-item').find('.product-name').should('have.contain', 'Carrot')
    // cy.get('.cart-item').find('.product-price').should('have.value', itemprice)

    
  })
  })


