///<reference types="cypress"/>

   
    ////////// LOGIN////////////////////////////////////////////////////////////////////////////////////
    describe('Async and Sync Scripts Example',function()
    {   
        it('Async and Sync Scripts ',function()
        {
            //run first
         console.log('naavigate to url')  // non cypress - asyn script  
        //run fourth
         cy.visit('http://demo.guru99.com/v4/index.php') // cypress - sync script run first
        //run second
         console.log('enter username') // non cyoress - asyn script               
           
     
             //run fifth
         cy.get(':nth-child(1) > :nth-child(2) > input').type('pakiz@gmail.com').then(()=>{            // using then to make asyn scripts to sync scripts and make executions in order 
            //run sixth
            console.log('then - enter mail')
         })
              //run third
         console.log('Enter password')
            //run seventh
         cy.get(':nth-child(2) > :nth-child(2) > input').type('123454')
   
          
        })

 
    })
