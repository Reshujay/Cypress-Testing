describe("postToken", ()=> {
    before(() => {
      cy.postToken();
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it("should exist identity in localStorage", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token token", token);
      });
    });
  
    it("Create an Address", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token", token);

        cy.request({
          method: 'POST',
          url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses',
          auth: {
              bearer: token
              
          },
          body :
          {
              "address": {
                firstname: "Reshu",
                lastname: "Jay",
                address1: "BTM",
                address2: "2nd Floor",
                city: "Bethesda",
                phone: "3014445002",
                zipcode: "20814",
                state_name: "MD",
                country_iso: "US"
              }
      }}).then(()=>{
        it('Visit the Selenium Practice website and select user selected product', function() {
            
            cy.visit("https://demo.spreecommerce.org/login");
            cy.get('#spree_user_email').type('reshujay@spree.com')
            cy.get('#spree_user_password').type('Spree12345$')
            cy.get('#new_spree_user > .btn').click()
            cy.xpath("//span[@class='account-page-user-full-name']").contains('Reshu')
            
        })
       // });
        // cy.reload()
        // cy.xpath("//span[@class='account-page-user-full-name']").contains('Reshu')

  });
});
});
});