/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
        cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')

        // Enter UserName and Password

        cy.get('input#ctl00_MainContent_username').type('Tester')
        cy.get('input#ctl00_MainContent_password').type('test')
        cy.get('input#ctl00_MainContent_login_button').click()

        //Click on Order and View All Orders
        //cy.get('a[href="Process.aspx"]').click()
        //To identify Links, you can use Contains and pass link name
       // cy.contains('Order').click()
        //cy.get('a[href="Default.aspx"]').click()
    })

    it('cy.go() - go back or forward in the browser\'s history', () => {
        cy.get('a[href="Process.aspx"]').click()
        //Verify View All Orders URL in navigation bar
        cy.url().should('include', 'Process.aspx')
        
        cy.go('back')
        cy.url().should('include', 'default.aspx')

        cy.go('forward')
        cy.url().should('include', 'Process.aspx')

        // clicking back
        cy.go(-1)
        cy.url().should('include', 'default.aspx')

        // clicking forward
        cy.go(1)
        cy.url().should('include', 'Process.aspx')
    })

    it('cy.reload() - reload the page', () => {
        // https://on.cypress.io/reload
        cy.reload()

        // reload the page without using the cache
        cy.reload(true)
    })

}) 