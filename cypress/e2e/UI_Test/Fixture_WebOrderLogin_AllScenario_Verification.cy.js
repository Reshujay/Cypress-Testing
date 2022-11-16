/// <reference types="cypress" />
/// <reference types="cypress" />

describe('Fetching Data from Fixture file->Login.json', function() {
    
    //Use the cy.fixture() method to pull data from fixture file
  before(function () {
  cy.fixture('LoginAll_Scenario').then(function (data) {
    this.data = data;
  })
  })
  it('Visits the WebOrder Page and Perform Login Action', function() {
  //Visit the OrnageHRM Website
  for(var i = 0; i < this.data.Login.length; i++) {
    cy.visit(this.data.URL);
  
  // Enter UserName and Password
    cy.log("USER :"+i+1)
    if(this.data.Login[i].uname!==""){
        cy.get('#ctl00_MainContent_username').type(this.data.Login[i].uname)}
    if(this.data.Login[i].password!==""){
        cy.get('#ctl00_MainContent_password').type(this.data.Login[i].password)}
    cy.get('#ctl00_MainContent_login_button').click()
    if(this.data.Login[i].expected_result==="Order"){
        cy.get("a[href='Process.aspx']").should('have.text',this.data.Login[i].expected_result)
        cy.get("a[href='Process.aspx']").should('have.contain','Order').click()
        cy.url().should('include','/samples/TestComplete11/WebOrders/Process.aspx')
        //logout verification
      cy.get('#ctl00_logout').click()
      cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")}
    else{
        cy.get("#ctl00_MainContent_status").should("have.text",this.data.Login[i].expected_result)
        }
    }
    })
  })
  