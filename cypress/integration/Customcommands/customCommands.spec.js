describe('CustomeSuite',function(){

it('LoginTest',function(){
   // valid 
   cy.login('admin@yourstore.com','admin')
   cy.title().should('be.equal','Dashboard / nopCommerce administration' )
     // Invalid 
     cy.login('admin@yourstore.com','admin12')
     cy.title().should('be.equal','Your store. Login' )
       // valid 
   cy.login('admin12@yourstore.com','admin')
   cy.title().should('be.equal','Your store. Login' )
})
it('Add customer',function(){

    cy.login('admin@yourstore.com','admin')

    // Script for adding new customer 
})
it('Edit customer',function(){

    cy.login('admin@yourstore.com','admin')
   // Script for Edit new customer 
cy.log('editing customer ..................')

})

})