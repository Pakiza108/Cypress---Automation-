///<reference types="cypress"/>
import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Registration',function()
{

    it ('Varification of site',function()
    { 
     cy.visit("/")
     cy.title().should('be.equal','OutcastSolutions Employee Management System')
     
    })
    it ('Varification of main headings',function()
    {
    cy.get('h1').contains('OutcastSolutions')
     
    })
    it ('Varification of all heading',function()
    {
    cy.get('body > section > div > div > div.panel-title-sign.mt-xl.text-right > h2').contains(' Sign Up')
    cy.get('.panel-title').contains('Bank Detail')
    cy.get('body > section > div > div > div:nth-child(4) > div > section > header > h2').contains('Emergency Contact')
     
    })
    it ('Varification of signin links',function()
    {
        
    cy.get('.text-center').contains('Already have an account? ')
    cy.get('body > p > a').contains('Sign In!').should('be.visible')

     
    })
    it ('Varification of all elements should be visible',function()
    {
        // Personal Information 
     cy.get('input[name=first_name]').should('be.visible')
     cy.get('input[name=last_name]').should('be.visible')
     cy.get('input[name=contact]').should('be.visible')
     cy.get('input[name=cnic]').should('be.visible')
     cy.get('input[name=email]').should('be.visible')
     cy.get('input[name=password]').should('be.visible')
     cy.get('body > section > div > div > div.panel-body > form > div.form-group.mb-none > div:nth-child(7) > select').should('be.visible')
     cy.get('input[name=allergies]').should('be.visible')
     cy.get('input[name=address]').should('be.visible')
     cy.get('input[name=cnic_address]').should('be.visible')

     // Bank Details 
     cy.get('input[name=bank_name]').should('be.visible')
     cy.get('input[name=account_title]').should('be.visible')
     cy.get('input[name=account_number]').should('be.visible')
     //Emergency Contact
     cy.get('input[name=emergency_name]').should('be.visible')
     cy.get('input[name=emergency_relationship]').should('be.visible')
     cy.get('input[name=emergency_contact]').should('be.visible')
     cy.get('input[name=emergency_email]').should('be.visible')
     // Passport Size Picture
     cy.get('input[name=profile_pic]').should('be.visible')
     cy.get('input[name=cnic_pic_front]').should('be.visible')
     cy.get('input[name=salary_slip_pic]').should('be.visible')
    cy.get('body > div > div > input').should('be.visible').should('be.enabled')
    })
   
    it ('User should not be registered with Garbage test data ',function()
    {
        // Personal Information 
     cy.get('input[name=first_name]').type("/////")
     cy.get('input[name=last_name]').type("/////")
     cy.get('input[name=contact]').type("/////")
     cy.get('input[name=cnic]').type("/////")
     cy.get('input[name=email]').type("/////")
     cy.get('input[name=password]').type("/////")
     cy.get('body > section > div > div > div.panel-body > form > div.form-group.mb-none > div:nth-child(7) > select').select('A+')
     cy.get('input[name=allergies]').type("/////")
     cy.get('input[name=address]').type("/////")
     cy.get('input[name=cnic_address]').type("/////")
     // Bank Details 
     cy.get('input[name=bank_name]').type("/////")
     cy.get('input[name=account_title]').type("/////")
     cy.get('input[name=account_number]').type("/////")
     //Emergency Contact
     cy.get('input[name=emergency_name]').type("/////")
     cy.get('input[name=emergency_relationship]').type("/////")
     cy.get('input[name=emergency_contact]').type("/////")
     cy.get('input[name=emergency_email]').type("/////")
     // Passport Size Picture
    
     cy.get('body > div > div > input').click()
     cy.get('input[name=contact]').focused()
     

 })
 it ('Empty fields get focused Credentials ',function()
    {
        // Personal Information 
     cy.get('input[name=first_name]').clear().type("test")
     cy.get('input[name=last_name]').clear().type("data")
     cy.get('input[name=contact]').clear().type("/////")
     cy.get('input[name=cnic]').clear().type("41303-1234567-1")
     cy.get('body > div > div > input').click()
     cy.focused()
     
 })
 it ('Wrong email validation',function()
    {
        // Personal Information 
     cy.get('input[name=first_name]').clear().type("test")
     cy.get('input[name=last_name]').clear().type("data")
     cy.get('input[name=contact]').clear().type("(1341) 988-2926")
     cy.get('input[name=cnic]').clear().type("41303-1234567-1")
     cy.get('input[name=email]').type("sdsfe@.com")
     cy.get('body > div > div > input').click()
     cy.focused()   
     
 })
 it('User should be registered successfully ',function()
    {
        const fname='abc1',lname='test1',contctno='(1341) 988-2986',cnicno='41344-1234567-1',useremail='abc34@mail.com',userpass='1834567894',BG='O+',algry='Kidney diseases'
        ,addres='Gulistan e johar block 11' ,cnicaddress='Gulistan e johar block 11',bankname='Alflah islamic',acctitle='PAKIZA MUNAWAR',accnum='5214454515484',emrgname='Muhammad Munawar'
        ,emrgrel='Father',emgrcontact='(1341) 888-2977',emgremail='muhmmadmunawar12@gmail.com',p1='quiz3.PNG'
    
        // Personal Information 
     cy.get('input[name=first_name]').clear().type(fname).should('have.value',fname)
     cy.get('input[name=last_name]').clear().type(lname).should('have.value',lname)
     cy.get('input[name=contact]').clear().type(contctno).should('have.value',contctno)
     cy.get('input[name=cnic]').clear().type(cnicno).should('have.value',cnicno)
     cy.get('input[name=email]').clear().type(useremail).should('have.value',useremail)
     cy.get('input[name=password]').clear().type(userpass).should('have.value',userpass)
     cy.get('body > section > div > div > div.panel-body > form > div.form-group.mb-none > div:nth-child(7) > select').select(BG)
     cy.get('input[name=allergies]').clear().type(algry).should('have.value',algry)
     cy.get('input[name=address]').clear().type(addres).should('have.value',addres)
     cy.get('input[name=cnic_address]').clear().type(cnicaddress).should('have.value',cnicaddress)
     // Bank Details 
     cy.get('input[name=bank_name]').clear().type(bankname).should('have.value',bankname)
     cy.get('input[name=account_title]').clear().type(acctitle).should('have.value',acctitle)
     cy.get('input[name=account_number]').clear().type(accnum).should('have.value',accnum)
     //Emergency Contact
     cy.get('input[name=emergency_name]').clear().type(emrgname).should('have.value',emrgname)
     cy.get('input[name=emergency_relationship]').clear().type(emrgrel).should('have.value',emrgrel)
     cy.get('input[name=emergency_contact]').clear().type(emgrcontact).should('have.value',emgrcontact)
     cy.get('input[name=emergency_email]').clear().type(emgremail).should('have.value',emgremail)
     // Passport Size Picture
     //cy.get('input[name=profile_pic]').should('be.visible')
     cy.get('input[name=profile_pic]').attachFile(p1)
     cy.get('input[name=cnic_pic_front]').attachFile(p1)
     cy.get('input[name=cnic_pic_back]').attachFile(p1) 
     cy.get('input[name=salary_slip_pic]').attachFile(p1) 
     cy.get('body > div > div > input').click()
     cy.clearCookies()
     //cy.title().should('be.equal','OutcastSolutions Employee Management System')
     cy.log('signup---------------------------------------------')
     
    })

    
   
   
 })