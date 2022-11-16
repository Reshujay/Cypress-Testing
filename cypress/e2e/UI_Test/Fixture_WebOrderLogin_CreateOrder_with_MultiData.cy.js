/// <reference types="cypress" />

describe('Fetching multiple Data from Multiple file in Fixture file->CreateOrder.json', function() {
    
    //Use the cy.fixture() method to pull data from fixture file
before(function () {
  cy.fixture('MultiData').then(function (data) {
    console.log(data)
    this.data = data.Login;
  })
  cy.fixture('CreateOrder').then(function(user){
      this.user=user
  })
})

it('Login to WebOrder and Create Order',function(){
  cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx').then(()=>console.log(this.data))
    for(var i = 0; i < this.data.length; i++) {

      cy.get('#ctl00_MainContent_username').type(this.data[i].uname)
      cy.get('#ctl00_MainContent_password').type(this.data[i].password)
      cy.get('#ctl00_MainContent_login_button').click()
    // cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')


    cy.get('#ctl00_menu > :nth-child(3) > a').should('have.text','Order').click()
    //cy.wait(2000)
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select(this.user[i].Product)
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(this.user[i].Quantity)
    cy.get('#ctl00_MainContent_fmwOrder_txtName').type(this.user[i].Customer)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type(this.user[i].Street)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type(this.user[i].City)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type(this.user[i].Zip)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type(this.user[i].Card)
    cy.get('#ctl00_MainContent_fmwOrder_cardList_1').click()
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type(this.user[i].Expire)
    cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()
    //cy.wait(5000)
    cy.get('strong').should('have.text', '\n                    New order has been successfully added.\n                ')
    

     //logout verification
     cy.get('#ctl00_logout').click()
     cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
}
})
})