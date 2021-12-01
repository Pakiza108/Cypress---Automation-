// ///<reference types="cypress"/>

// const { invoke } = require("lodash")

// Cypress.on('uncaught:exception', (err, runnable) => {
//        // returning false here prevents Cypress from
//        // failing the test
//        return false
// })
//  describe('Main site  webdriveruniversity', function () {
// //        it('Verify site ', function () {
// //               cy.visit('https://webdriveruniversity.com/')   //open URL 
// //               cy.get('#contact-us > .thumbnail > .section-title > h1').contains('CONTACT US')
// //               cy.get('#login-portal > .thumbnail > .section-title > h1').contains('LOGIN PORTAL')
// //               cy.get('#button-clicks > .thumbnail > .section-title > h1').contains('BUTTON CLICKS')
// //               cy.get('#to-do-list > .thumbnail > .section-title > h1').contains('TO DO LIST')
// //               cy.get(':nth-child(7) > #page-object-model > .thumbnail > .section-title > h1').contains('PAGE OBJECT MODEL')
// //               cy.get(':nth-child(8) > #page-object-model > .thumbnail > .section-title > h1').contains('ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)')
// //               cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail > .section-title > h1').contains('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)')
// //               cy.get('#ajax-loader > .thumbnail > .section-title > h1').contains('AJAX LOADER')
// //               cy.get('#actions > .thumbnail > .section-title > h1').contains('ACTIONS')
// //               cy.get('#scrolling-around > .thumbnail > .section-title > h1').contains('SCROLLING AROUND')
// //               cy.get('#popup-alerts > .thumbnail > .section-title > h1').contains('POPUP & ALERTS')
// //               cy.get('#iframe > .thumbnail > .section-title > h1').contains('IFRAME')
// //               cy.get('#hidden-elements > .thumbnail > .section-title > h1').contains('HIDDEN ELEMENTS')
// //               cy.get('#data-table > .thumbnail > .section-title > h1').contains('DATA, TABLES & BUTTON STATES')
// //               cy.get('#autocomplete-textfield > .thumbnail > .section-title > h1').contains('AUTOCOMPLETE TEXTFIELD')
// //               cy.get('#file-upload > .thumbnail > .section-title > h1').contains('FILE UPLOAD')
// //               cy.get('#datepicker > .thumbnail > .section-title > h1').contains('DATEPICKER')


// //        })
// //        // it('Verify contact us  form ', function () {
// //        //        cy.get('#contact-us > .thumbnail > .section-title > h1').click().then(() => {
// //        //               cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
// //        //               cy.get('[name="first_name"]').type('helo')
// //        //               cy.get('[name="last_name"]').type('12')
// //        //               cy.get('[name="email"]').type('helo@gmail.com')
// //        //               cy.get('textarea.feedback-input').type('helo 1234')
// //        //               cy.get('[type="submit"]').click()



// //        //        })

// //        // })
// // //        it('Verify Login form ', function () {

// // //               //open URL 
// // //               cy.visit('https://webdriveruniversity.com/')   //open URL 
// // //               cy.get('#login-portal > .thumbnail > .section-title > h1').click()
// // //               cy.get('#contact-us > .thumbnail > .section-title > h1').click().then(() => {
// // //                      cy.visit('https://webdriveruniversity.com/Login-Portal/index.html')
// // //                      cy.get('#text').type('abc')
// // //                      cy.get('#password').type('1234')
// // //                      cy.get('#login-button').click()
// // //               })

// //        // })
// //        it('Handling multiple tabs  ', function () {
// //               cy.visit('https://webdriveruniversity.com/')   //open URL 
// //               cy.get('#contact-us').invoke('removeAttr','target').click()
// //               cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
// //                      cy.get('[name="first_name"]').type('helo')
// //                      cy.get('[name="last_name"]').type('12')
// //                      cy.get('[name="email"]').type('helo@gmail.com')
// //                      cy.get('textarea.feedback-input').type('helo 1234')
// //                      cy.get('[type="submit"]').click()

// //        })
// //        it('Verify Login form ', function () {

// //               //open URL 
// //               cy.visit('https://webdriveruniversity.com/')   //open URL 
// //               cy.get('#login-portal').invoke('removeAttr','target').click()                    
// //                      cy.get('#text').type('abc')
// //                      cy.get('#password').type('1234')
// //                      cy.get('#login-button').click()         

// //        })
// //        it('Validate multiple domains  ', function () {

// //               //open URL 
// //               cy.visit('https://webdriveruniversity.com/')   //open URL  
         
// //               cy.get('#automation-test-store').invoke('removeAttr','target').click()     .click()                         

// //        })


// //   it ('Verify reset button of contact us form ',function()
// //   {
// //          cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')   //open URL 
// //          cy.title().should('be.equal','WebDriver | Contact Us')
// //          cy.get('[name="first_name"]').type('helo')
// //          cy.get('[name="last_name"]').type('12')
// //          cy.get('[name="email"]').type('helo@gmail.com')
// //          cy.get('textarea.feedback-input').type('helo 1234')
// //          cy.get('[type="reset"]').click()
// //   })
// //      it ('Successfuly submission of contact us form ',function()
// // {
// //        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')   //open URL 
// //        cy.title().should('be.equal','WebDriver | Contact Us')
// //        cy.get('[name="first_name"]').type('helo')
// //        cy.get('[name="last_name"]').type('12')
// //        cy.get('[name="email"]').type('helo@gmail.com')
// //        cy.get('textarea.feedback-input').type('helo 1234')
// //        cy.get('[type="submit"]').click()
// // })
// // it('Successfuly submission of contact us form with valid feilds  ',function()
// // {
// //        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')   //open URL 
// //        cy.title().should('be.equal','WebDriver | Contact Us')
// //        cy.get('[name="first_name"]').type('helo')
// //       //  cy.get('[name="last_name"]').type('12')
// //       //  cy.get('[name="email"]').type('helo@gmail.com')
// //       //  cy.get('textarea.feedback-input').type('helo 1234')
// //        cy.get('[type="submit"]').click()
// // })
// it('Handling js alerts ',function()
// {
//        cy.visit('https://webdriveruniversity.com/')   //open URL 
//        cy.get('#popup-alerts').invoke('removeAttr','target').click()
//        cy.get('#button1 > p').click()
//        // window alert
//        cy.on('window:alert',(str)=>{
//               expect(str).to.equal('I am an alert box!')
//        })
// })
// it('Validate js confirm alert box works correctly when clicking ok',function()
// {
//        cy.visit('https://webdriveruniversity.com/')   //open URL 
//        cy.get('#popup-alerts').invoke('removeAttr','target').click()
//        cy.get('#button4 > p').click()
//        // window alert
//        cy.on('window:confirm',(str)=>{
//               return true
//        })
//        cy.get('#confirm-alert-text').contains('You pressed OK!')
// })
// it('Validate js confirm alert box works correctly when clicking cancel',function()
// {
//        cy.visit('https://webdriveruniversity.com/')   //open URL 
//        cy.get('#popup-alerts').invoke('removeAttr','target').click()
//        cy.get('#button4 > p').click()
//        // window alert
//        cy.on('window:confirm',(str)=>{
//               return false
//        })
//        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
// })

// })
describe('Mouse actions ', function () {
       beforeEach(() => {
              cy.viewport('iphone-7')
            })
      
       it('scrollIntoView',function()
       { 
              // cy.viewport('iphone-7')
              cy.visit('https://webdriveruniversity.com/')   //open URL 
             
              cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
             
       }) 
        it('Drag and drop ',function()
       {  
             
              cy.get('#draggable > p > b').trigger('mousedown',{which:1});
              cy.get('#droppable > p > b').trigger('mousemove').trigger('mouseup',{force:true})
             
       })
       it('Double click ',function()
       {
              cy.get('#double-click').wait(2000).dblclick();
             
       })
       
       it('Click and hold ',function()
       {
              
              cy.get('#click-box').trigger('mousedown',{which: 1}).then(($element)=>{
                     expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
              })
             
       })



})