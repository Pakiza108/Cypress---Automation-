    ///<reference types="cypress"/>

    const { values } = require("lodash")
    describe('Login',function(){
    
        before(function(){
            cy.visit('http://demo.guru99.com/v4/index.php')
        })
    
    it('Should load the correct URl',function(){
            //cy.url().should('eq','http://demo.guru99.com/v4/index.php')

    })

    before(function(){
    cy.log('---- Login Log--------------')
    })
    it('Has a valid login form',function(){
    cy.get('form').within(() =>
    {
     cy.get('input[name=uid]').should('be.visible').should('be.enabled').should('be.empty')           //Username Validation
    cy.get('input[name=password]').should('be.visible').should('be.enabled').should('be.empty')              //Password Validation
     cy.get('input[name=btnLogin]').should('be.visible').should('be.enabled')    
     cy.get('input[name=btnReset]').should('be.visible').should('be.enabled') 
    
    })

    })
    it('Should display an error message after login failure',function(){
    cy.get('input[name=uid]').type("pakiza12")               //Username Validation
    cy.get('input[name=password]').type("mgr!23")               //Password Validation
        cy.get('input[name=btnLogin]').click()
    
    cy.on('window:alert',(str) =>
    {
        //Mocha assertions
     expect(str).to.equal('User or Password is not valid').click()
    
    })

    })
    it('Should redirect to the dashboard after login success',function(){

        cy.get('input[name=uid]').type("mgr123")               //Username Validation
        cy.get('input[name=password]').type("mgr!23")               //Password Validation
        cy.get('input[name=btnLogin]').click()
            // after successfull login 
        cy.wait(1000)
        cy.title().should('eq','Guru99 Bank Manager HomePage')
        
    })
    it('Varify Element on the Dashboards',function(){

     cy.get('a[href="addcustomerpage.php"]').should('contain','New Customer').should('be.visible')
     cy.get('a[href="EditCustomer.php"]').should('contain','Edit Customer').should('be.visible')
     cy.get('a[href="DeleteCustomerInput.php"]').should('contain','Delete Customer').should('be.visible')
     cy.get('a[href="addAccount.php"]').should('contain','New Account').should('be.visible')
     cy.get('a[href="editAccount.php"]').should('contain','Edit Account').should('be.visible')
     cy.get('a[href="deleteAccountInput.php"]').should('contain','Delete Account').should('be.visible')
     cy.get('a[href="DepositInput.php"]').should('contain','Deposit').should('be.visible')
     cy.get('a[href="WithdrawalInput.php"]').should('contain','Withdrawal').should('be.visible')
     cy.get('a[href="FundTransInput.php"]').should('contain','Fund Transfer').should('be.visible')
     cy.get('a[href="PasswordInput.php"]').should('contain','Change Password').should('be.visible')
     cy.get('a[href="BalEnqInput.php"]').should('contain','Balance Enquiry').should('be.visible')
     cy.get('a[href="MiniStatementInput.php"]').should('contain','Mini Statement').should('be.visible')
     cy.get('a[href="CustomisedStatementInput.php"]').should('contain','Customised Statement').should('be.visible')
     cy.get('a[href="Logout.php"]').should('contain','Log out').should('be.visible')
    
    })
        describe('Add Customer',function(){

         it('Make sure all feilds are visible ',function(){
        
               cy.get('a[href="addcustomerpage.php"]').click()
               cy.get('input[name=name]').should('be.visible')  
               cy.get('input[value=m]').should('be.visible')                                                                      
           cy.get('input[value=f]').should('be.visible')  
            cy.get('input[name=dob]').should('be.visible')
              cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > textarea').should('be.visible')
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > textarea').should('be.visible')
             cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > textarea').should('be.visible')
                cy.get('input[name=city]').should('be.visible')
                cy.get('input[name=state]').should('be.visible')
                cy.get('input[name=pinno]').should('be.visible')
             cy.get('input[name=telephoneno]').should('be.visible')
             cy.get('input[name=emailid]').should('be.visible')
              cy.get('input[name=password]').should('be.visible')
              cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(14) > td:nth-child(2) > input[type=submit]:nth-child(1)').should('be.visible').should('be.enabled')
              cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(14) > td:nth-child(2) > input[type=reset]:nth-child(2)').should('be.visible').should('be.enabled')
            
         })
         it('Empty feilds should give error msg',function(){
              cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(14) > td:nth-child(2) > input[type=submit]:nth-child(1)').click()
             cy.wait(1000)
       cy.on('window:alert',(str) =>
      {
       //Mocha assertions
       expect(str).to.equal('please fill all fields')
    
      })
    })
      it('Varify reset button functionality',function(){
         cy.get('input[name=name]').type("Pakiza Munawar")  // validation customwer name 
         cy.get('input[value=m]').should('be.checked')         // visibilty and also checked status       , by defult roundtrip button should be checked                                                               
         cy.get('input[value=f]').should('not.be.checked').check()       
            cy.get('input[name=dob]').click()
           cy.get("#dob").click().type("1998-12-05")
            cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(14) > td:nth-child(2) > input[type=reset]:nth-child(2)').click()


      })
         it('Make sure all feilds are valid',function(){
        
                   cy.get('input[name=name]').type("Pakiza Munawar")  // validation customwer name 
                   cy.get('input[value=m]').should('be.checked')         // visibilty and also checked status       , by defult roundtrip button should be checked                                                               
                   cy.get('input[value=f]').should('not.be.checked').check()       
                  cy.get('input[name=dob]').click()
                 cy.get("#dob").click().type("1998-12-05")
                    cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > textarea').type("block 11 gulistan e johar karachi")
                    cy.get('input[name=city]').should('be.visible').type("Karachi")
                    cy.get('input[name=state]').should('be.visible').type("Sindh")
                    cy.get('input[name=pinno]').should('be.visible').type("124725")
                    cy.get('input[name=telephoneno]').should('be.visible').type("032452812415")
                    cy.get('input[name=emailid]').should('be.visible').type("pakiza12@gmail.com")
                    cy.get('input[name=password]').should('be.visible').type("0123456")
                    cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(14) > td:nth-child(2) > input[type=submit]:nth-child(1)').should('be.visible').should('be.enabled').type("Pakiza Munawar")
                    cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(14) > td:nth-child(2) > input[type=reset]:nth-child(2)').should('be.visible').should('be.enabled').type("Pakiza Munawar")
                    cy.go(-1) // navigate back
            
            })

            
        })
        describe('Edit Customer ',function(){
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            it('Make sure all feilds are visible',function(){
                cy.get('a[href="EditCustomer.php"]').click({force: true })
                cy.get('input[name=cusid]').should('be.visible')  // validation customwer name    
                cy.get('body > div:nth-child(5) > table > tbody > tr > td > table > tbody > tr:nth-child(11) > td:nth-child(2) > input[type=submit]:nth-child(1)').should('be.visible')
                cy.get('body > div:nth-child(5) > table > tbody > tr > td > table > tbody > tr:nth-child(11) > td:nth-child(2) > input[type=reset]:nth-child(2)').should('be.visible')

            })
            it('Reset Buttton functionalty ',function(){
            
                cy.get('input[name=cusid]').type("012")  // validation customwer name    
                cy.get('body > div:nth-child(5) > table > tbody > tr > td > table > tbody > tr:nth-child(11) > td:nth-child(2) > input[type=reset]:nth-child(2)').click()

            })
            it('Invalid customer id gives error msg ',function(){
            
                cy.get('input[name=cusid]').type("012")  // validation customwer name    
                cy.get('body > div:nth-child(5) > table > tbody > tr > td > table > tbody > tr:nth-child(11) > td:nth-child(2) > input[type=submit]:nth-child(1)').click()
        

            })





        })
        describe('Delete Customer ',function(){
           
            it('Make sure all feilds are visible',function(){
                cy.get('a[href="DeleteCustomerInput.php"]').click({force: true })
                cy.get('input[name=cusid]').should('be.visible')  // validation customwer name    
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=submit]:nth-child(1)').should('be.visible')
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=reset]:nth-child(2)').should('be.visible')

            })
            it('Reset Buttton functionalty ',function(){
            
                cy.get('input[name=cusid]').type("012")  // validation customwer name    
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=reset]:nth-child(2)').click()

            })
            it('Invalid customer id gives error msg ',function(){
            
                cy.get('input[name=cusid]').type("012")  // validation customwer name    
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=submit]:nth-child(1)').click()
    

            })

        })
       describe('New Account ',function(){
        
        
            it('Make sure all feilds are visible',function(){
                cy.get('a[href="addAccount.php"]').click({force: true })
                cy.get('input[name=cusid]').should('be.visible')  // validation customwer name      
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > select').should('be.visible')
                cy.get('input[name=inideposit]').should('be.visible')   
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(2) > input[type=submit]:nth-child(1)').should('be.visible')
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(2) > input[type=reset]:nth-child(2)').should('be.visible')

            })
            it('Reset Buttton functionalty ',function(){
    
                cy.get('input[name=cusid]').type("012")  // validation customwer name    
                cy.get('input[name=inideposit]').type("500")  
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(2) > input[type=reset]:nth-child(2)').click()

            })
            it('Invalid customer id gives error msg ',function(){
           
                cy.get('input[name=cusid]').type("012")  // validation customwer name   
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > select').select('Savings').should('have.value','Savings')
                cy.get('input[name=inideposit]').type("500") 
                cy.get('body > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(2) > input[type=submit]:nth-child(1)').click()
             
                
            

            })




        
        
        })
        // describe('Delete Account ',function(){    
        //      it('Make sure all feilds are visible',function(){
        //         cy.get('a[href="deleteAccountInput.php"]').click({force: true })
        //         // cy.get('a[href="deleteAccountInput.php"]').click({force: true })  
        //          cy.get('input[name=accountno]').should('be.visible')  
        //          cy.get('input[name=AccSubmit]').should('be.visible')
        //          cy.get('input[name=res]').should('be.visible')

        //      })
        //      it('Reset Buttton functionalty ',function(){
    
        //         cy.get('input[name=accountno]').type("012156414845")  // validation customwer name
        //         cy.get('input[name=res]').click()

        //     })
        //     it('Invalid customer id gives error msg ',function(){
         
        //         cy.get('input[name=accountno]').type("012156414845")  // validation customwer name   
        //         cy.get('input[name=AccSubmit]').click()
            
                       
        //     })
        
        // })

        // describe('Deposite ',function(){
        
        //      it('Make sure all feilds are visible',function(){
        //          cy.get('a[href="DepositInput.php"]').click()  
        //          cy.get('input[name=accountno]').should('be.visible')  
        //          cy.get('input[name=ammount]').should('be.visible')  
        //          cy.get('input[name=desc]').should('be.visible')  
        //          cy.get('input[name=AccSubmit]').should('be.visible')
        //          cy.get('input[name=res]').should('be.visible')

        //      })
        //      it('Reset Buttton functionalty ',function(){
    
        //         cy.get('input[name=accountno]').type("012156414845")  // validation customwer name
        //         cy.get('input[name=res]').click()

        //     })
        //     it('Invalid customer id gives error msg ',function(){
         
        //         cy.get('input[name=accountno]').type("012156414845")  // validation customwer name   
        //         cy.get('input[name=ammount]').type("1000000")  
        //          cy.get('input[name=desc]').type('aabcdef')
        //         cy.get('input[name=AccSubmit]').click()
            
                       
        //     })
        
        // })

        // describe('Amount Wuthdrawal ',function(){
        
        //      it('Make sure all feilds are visible',function(){
        //          cy.get('a[href="WithdrawalInput.php"]').click({force: true })  
        //          cy.get('input[name=accountno]').should('be.visible')  
        //          cy.get('input[name=ammount]').should('be.visible')  
        //          cy.get('input[name=desc]').should('be.visible')  
        //          cy.get('input[name=AccSubmit]').should('be.visible')
        //          cy.get('input[name=res]').should('be.visible')

        //      })
        //      it('Reset Buttton functionalty ',function(){
    
        //         cy.get('input[name=accountno]').type("012156414845")  // validation customwer name
        //         cy.get('input[name=res]').click()

        //     })
        //     it('Invalid customer id gives error msg ',function(){
         
        //         cy.get('input[name=accountno]').type("012156414845")  // validation customwer name   
        //         cy.get('input[name=ammount]').type("1000000")  
        //          cy.get('input[name=desc]').type('aabcdef')
        //         cy.get('input[name=AccSubmit]').click()
            
                       
        //     })
        
        // })


    //     describe('FundTransInput.php ',function(){
        
            
    //         it('Make sure all feilds are visible',function(){
    //             cy.get('a[href="FundTransInput.php"]').click()  
    //             cy.get('input[name=payersaccount]').should('be.visible')  
    //             cy.get('input[name=payeeaccount]').should('be.visible')  
    //             cy.get('input[name=ammount]').should('be.visible')  
    //             cy.get('input[name=desc]').should('be.visible')  
    //             cy.get('input[name=AccSubmit]').should('be.visible')
    //             cy.get('input[name=res]').should('be.visible')

    //         })
    //         it('Reset Buttton functionalty ',function(){
    //             cy.get('input[name=payersaccount]').type("012156414845")  
    //             cy.get('input[name=payeeaccount]').type("012156414845")    
    //             cy.get('input[name=ammount]').type('50000')  
    //             cy.get('input[name=res]').click()

    //        })
    //        it('Invalid customer id gives error msg ',function(){
        
    //         cy.get('input[name=payersaccount]').type("012156414845")  
    //         cy.get('input[name=payeeaccount]').type("012156414845")    
    //         cy.get('input[name=ammount]').type('50000')    
    //             cy.get('input[name=desc]').type('aabcdef')
    //            cy.get('input[name=AccSubmit]').click()
           
                      
    //        })
       
    //    })

    })