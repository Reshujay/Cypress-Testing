
describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Calling Custom Command
    cy.Login('Admin','admin123')
    cy.xpath("//span[text()='PIM']").should('have.text','PIM')
    cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
    
    cy.Logout()
})
})