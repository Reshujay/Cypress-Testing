// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('To Handle Date Calendar', function () {

    //it.skip('direct passing date', function () {
    it('direct passing date', function () {
        cy.visit("http://demo.automationtesting.in/Datepicker.html")
        cy.xpath("//input[@id='datepicker1']").click()
        cy.contains('.ui-state-default', 21).click()

    })

    it('Visits the PHP Tarvels website', function () {
        cy.visit("http://demo.automationtesting.in/Datepicker.html");
        cy.xpath("//input[@id='datepicker1']").click()
        cy.xpath("//table[@class='ui-datepicker-calendar']//a")
            .each(($el, index, $list) => {

                var dateName = $el.text()
                if (dateName == '17') {
                    //cy.wrap() , when its argument is a promise, will automatically wait until the promise resolves. 
                    //If the promise is rejected, cy.wrap() will fail the test.
                    cy.wrap($el).click()
                }

            })
    })
})