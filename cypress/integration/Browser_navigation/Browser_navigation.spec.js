///<reference types="cypress"/>

describe('Validate webdriveruni homepage links',function()
{
     it ('Confirm links redirect to the correct pages',function()
{
       cy.visit("https://webdriveruniversity.com/")   //open URL 
       cy.get('#contact-us').invoke('removeAttr','target').click()
       cy.url().should('include' ,'contactus')
       cy.go('back')
       cy.reload()
      // cy.reload(true)   // reload without using cache
       cy.go('forward')
       cy.url().should('include' ,'contactus')
   
   
    })
    })