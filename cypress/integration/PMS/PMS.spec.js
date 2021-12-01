///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
////////// LOGIN////////////////////////////////////////////////////////////////////////////////////
describe('PMS Login',function()
{   

     it ('Varification of site',function()
{
       cy.visit("http://172.104.197.118:3000/")   //open URL 
       cy.title().should('be.equal','PMS')
        
})
it ('Varification of headings',function()
{
     cy.get('.text-light').contains('PMS').should('be.visible')
     cy.get('.text-white').contains('Welcome!').should('be.visible')
     cy.get('.text-white').contains('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.').should('be.visible') 
      
})
it ('Varification of Elements visibility',function()
{
    
     cy.get('input[name=username]').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Username')
     cy.get('input[name=password]').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Password')
     cy.get('.btn ').contains('Sign in').should('be.visible')      
})
it (' Negative Login',function()
{
    const username='pakiza',userpass='pakiza123'
     cy.get('input[name=username]').type(username)
     cy.get('input[name=password]').type(userpass)
     cy.get('.btn ').contains('Sign in').click()   
     cy.on('window:alert',(str) =>
    {
        //Mocha assertions
     expect(str).to.equal('Unauthenticated!').click()
    
    }) 
    cy.wait(2000)
})
it (' Positive Login',function()
{
    const username='pakiza123',userpass='pakiza123'
    cy.get('.mb-3 > .input-group > .form-control').clear().type(username)
     //cy.get('input[name=username]').clear().type(username)
     cy.get(':nth-child(2) > .input-group > .form-control').clear().type(userpass)
     cy.get('.btn').contains('Sign in').click()    
})
})
//////////////////////////// DASHBOARD////////////////////////////////////////////
describe('PMS Login',function()
{   

     it ('Varification of Dashboard',function()
{
    cy.title().should('eq', 'Argon Dashboard - Free Dashboard for Bootstrap 4')
   
   
        
})
    it ('Varification of navbar',function()
    {
      cy.get('#sidenav-collapse-main > ul > li:nth-child(1) > a > span').scrollIntoView().contains('Dashboard')
      cy.get('#sidenav-collapse-main > ul > li:nth-child(2) > a > span').scrollIntoView().contains('Role')
      cy.get('#sidenav-collapse-main > ul > li:nth-child(3) > a > span').scrollIntoView().contains('User')
      cy.get('#sidenav-collapse-main > ul > li:nth-child(4) > a > span').scrollIntoView().contains('Department')
      cy.get('#sidenav-collapse-main > ul > li:nth-child(5) > a > span').scrollIntoView().contains('Project')
      cy.get('#sidenav-collapse-main > ul > li:nth-child(6) > a > span').scrollIntoView().contains('My Task')
      cy.get('#sidenav-collapse-main > ul > li:nth-child(7) > a > span').scrollIntoView().contains('Tickets')
            
    })
    it ('Varification of Dashboard items',function()
    {
        cy.log('---------------DASHBOARD--------------------------')
           
    })
    it ('Varification of Role',function()
    {
      
           cy.log('---------------ROLE--------------------------')
    })
    it ('Varification of User',function()
    {
        cy.log('---------------USER--------------------------')
           
    })
    it ('Varification of Department items',function()
    {
      
        cy.log('---------------DEPARTMENT--------------------------')
    })
    it ('Varification of My Task',function()
    {
        cy.log('-------------MY TASK----------------------------')
           
    })
    it ('Varification of Tickets items',function()
    {
        cy.log('----------------TICKETS-------------------------')
           
    })
    it ('Varification of logout',function()
    {
          

        cy.get('#username').click()
        cy.get('.ml-auto > .nav-item > .dropdown-menu > .dropdown-item').click()
     
      const username='pakiza123',userpass='pakiza123'
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(userpass)
      cy.get('.btn ').contains('Sign in').click()  
    })


})