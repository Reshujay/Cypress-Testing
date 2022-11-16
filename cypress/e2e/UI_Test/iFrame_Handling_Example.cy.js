// type definitions for Cypress object "cy"
/// <reference types="cypress" />
// <reference types="cypress-iframe" />

describe('To Handle iFrame', function () {
    // test case
    it('Handling object inside Frame', function (){
      // launch the application
      cy.visit("https://jqueryui.com/draggable/");
      // load the frame
      cy.frameLoaded('.demo-frame');
      //shift the focus to frame
      cy.iframe().find("#draggable").then(function(txt){
        //cy.log(txt)
         const txtframe = txt.text();
         //assertion to verify text
         expect(txtframe).to.contains('Drag me around');
         cy.log(txtframe);
      })
   })
  })