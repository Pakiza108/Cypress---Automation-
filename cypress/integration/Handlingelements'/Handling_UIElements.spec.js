///<reference types="cypress"/>

const { values } = require("lodash")

//describe('Locating Elements',function()
//{
     //it ('Varify Login Elements',function()
//{      
      //  cy.visit("http://demo.guru99.com/v4/index.php")      // visit URL
      //   cy.url().should('include','guru99')                               // URL varification 
      //   cy.get('input[name=uid]').should('be.visible').should('be.enabled') .should('be.empty').type("mgr123")               //Username Validation
      //   cy.get('input[name=password]').should('be.visible').should('be.enabled') .should('be.empty').type("mgr!23")               //Password Validation
       //  cy.get('input[name=btnLogin]').should('be.visible').should('be.enabled').click()
       
        //After Successfull verfication , Titile validation
       
          //Radio Button Validations 
          //cy.get(selector).invoke('removeAttr', 'target').click()
          //cy.get('body > div:nth-child(7) > div > ul > li:nth-child(2) > a').should('be.visible').click();
          //cy.title().should('eq',' Guru99 Bank New Customer Entry Page ')
             //cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')         // visibilty and also checked status       , by defult roundtrip button should be checked                                                               
             //cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()    
            //cy.get('input[name=findFlights]').should('be.visible').should('be.enabled').click()  // continue button by defult oneway button should be unchecked )
      //After Successfull verfication , Titile validation
      //cy.title().should('eq','Flight: Mercury Tours:')
          //  })
           // it ('Varify Add new customer Elements',function(){
              
            
            //    cy.get('a[href="addcustomerpage.php"]').should('contain','New Customer').click()
            //    cy.get('input[name=name]').should('be.visible').should('be.enabled').should('be.empty').type("Pakiza Munawar")  // validation customwer name 
                // vadliation of radio buttons 
           //     cy.get('input[value=m]').should('be.visible').should('be.checked')         // visibilty and also checked status       , by defult roundtrip button should be checked                                                               
           //    cy.get('input[value=f]').should('be.visible').should('not.be.checked').check()  
               // calender 
               //cy.get('input[name=dob]').click()
           //   cy.get("#dob").click().type("1998-12-05")


           // })
//})//// ------------ Automation demo site ----------------

//describe('Locating Elements',function()
//{
     //it ('Check boxeses',function()
//{

//cy.visit("http://demo.automationtesting.in/Register.html")
// positive validation
//cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
//cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
//cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')  // already checked or not validation 
// uncheck the same checkbox, Negative validation 
///cy.get('#checkbox1').uncheck().should('not.be.checked')
//cy.get('#checkbox2').uncheck().should('not.be.checked')
//cy.get('#checkbox3').uncheck().should('not.be.checked')

//cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

//})
// dropdown static select
//it('Skills Drop Down',function(){
//cy.get('#Skills').select('Android').should('have.value','Android')
//})
// Dropdown multi select
//it('Laguage Multi  Drop Down',function(){
  //cy.get('#msdd').click()
  //cy.get('.ui-corner-all').contains('English').click()
  //cy.get('.ui-corner-all').contains('Arabic').click()
  //})
  // searchable dropdownb 
  //it('Laguage Multi  Drop Down',function(){
  //cy.get('[role=combobox]').click({force: true})
 // cy.get('.select2-search__field').type('Ind')
  //cy.get('.select2-search__field').type('{enter}')

  //})

//})

// Alerts Rediff.com

describe('Locating Elements',function()
{
     it ('Alerts',function()
{

cy.visit("http://demo.guru99.com/V4/index.php")
cy.get('input[type=submit]').click()
   // firing window: alert event with on() method
cy.on('window:alert',(str) =>

{
  //Mocha assertions
  expect(str).to.equal('User or Password is not valid').click()

})

})


})


