// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands";
import 'cypress-iframe'
var id=0;
Cypress.Commands.add('postToken', () => {
  cy.request({
    method: 'POST',
    //url: cypress.config.js('baseUrl'), //get from cypress.env.json
    url: 'https://demo.spreecommerce.org/spree_oauth/token',
    form: true, //sets to application/x-www-form-urlencoded
    body: {
      grant_type: 'password',
      username: "reshujay@spree.com",
      password: "Spree12345$"
    }
  })
  .its('body')
  .then(identity => {
    cy.setLocalStorage("access_token", identity.access_token);
  });
});
//Below is Login command to login to OrangeHRM application
Cypress.Commands.add('Login', (uname,upass) => {
    // Enter UserName and Password
 
    cy.get("input[placeholder='Username']").type(uname)
    cy.get("input[placeholder='Password']").type(upass)
    cy.get("button[type='submit']").click()
})
//Below is Logout command of OrangeHRM application
Cypress.Commands.add('Logout', () => {
cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
cy.xpath("//a[normalize-space()='Logout']").click()
cy.url().should('include','web/index.php/auth/login')})
//Generic Login
Cypress.Commands.add('LoginToAnyApp', (unameloc,upassloc,lbuttonloc,uname,upass) => {
    // Enter UserName and Password
  
    cy.get(unameloc).type(uname)
    cy.get(upassloc).type(upass)
    cy.get(lbuttonloc).click()
  })

//Custom command for fixture file
  Cypress.Commands.add("Login_fixture", (file_name) => { 
    //using fixture in the command file
    cy.fixture(file_name).then(function(data){
    this.data = data;
    console.log(this.data);
    //Using Promise to handle the chain concept
    }).then(function(){
    cy.visit(this.data.URL);
    cy.get("input[placeholder='Username']").type(this.data.Uname)
    cy.get("input[placeholder='Password']").type(this.data.Upass)
    cy.get("button[type='submit']").click()

    })
    })
//Below command to grab cookies value based on name of cookies
Cypress.Commands.add('getCookiesValue',() => {
    cy.getCookie('orangehrm').should('have.property', 'value')
    .then((cookie) => {
        const cookieValue = cookie;
        cy.wrap(cookie).as(cookieValue)

  });
});