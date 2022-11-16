// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Example to demonstrate file upload in cypress', function () {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using cypress-file-upload npm package', () => {
        //Loading Image file
        const filepath = 'cypress/fixtures/Images/Villa.jpg'
        //Loading Xlsx file
        //const filepath = 'TestData/LoginData.xlsx'
        //cy.get('input#file-upload').attachFile(filepath)
        cy.get('#file-upload').selectFile(filepath)
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('#uploaded-files').contains('Villa.jpg')
    })
})