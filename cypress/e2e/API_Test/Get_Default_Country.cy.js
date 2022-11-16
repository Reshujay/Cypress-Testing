// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('GET Service Example', ()=>{
 
    it("test GET", () => {
      
        cy.request("GET", "https://demo.spreecommerce.org/api/v2/storefront/countries/default", {
        }).then((response) => {
        // Parse JSON the body.
        //const body = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.eq('application/vnd.api+json; charset=utf-8');
        cy.log(response.body);
       // expect(response.body).contains("USA") 
        });
      });
 
});