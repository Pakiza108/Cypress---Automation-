     ///<reference types="cypress"/>

     describe('Iterate Elements',function()
     {
          it ('log information of all hair products',function()
     {
          cy.visit("https://automationteststore.com/")   //open URL 
          cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
          cy.get(".fixed_wrapper .prdocutname").each(($el,index,$list) => {

          cy.log('Index: ' +index + ':' +$el.text())

          })
     })

     it ('Add specific prduct to basket',function()
          {
               cy.visit("https://automationteststore.com/")   //open URL 
               cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
               cy.get(".fixed_wrapper .prdocutname").each(($el,index,$list) => {
               if($el.text().includes('Curls to straight Shampoo')){
               cy.wrap($el).click()
                              }
               
     
          })

               it ('Add specific prduct to basket',function()
               {
               cy.visit("https://automationteststore.com/")   //open URL 
               cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
               cy.get(".fixed_wrapper .prdocutname").each(($el,index,$list) => {
               if($el.text().includes('Curls to straight Shampoo')){
               cy.wrap($el).click()
                              }
               
     
               })
          
          })
     })
     })
     //////////// Alias and invoke

     describe.only('Alias and invoke',function()
     {
          it ('Validate a specific hair care product',function()
     {
          cy.visit("https://automationteststore.com/")   //open URL 
          cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
          cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productname')
          //cy.get('@productname').its(length).should('be.gt', 5)
          cy.get('@productname').should('include','Seaweed Conditioner')

          
     })
     // total count of products   
     
     it ('Validate a specific hair care product',function()
     {
               cy.visit("https://automationteststore.com/")   //open URL 
               cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
               cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productname')
               //cy.get('@productname').its(length).should('be.gt', 5)
               cy.get('@productname').should('include','Seaweed Conditioner')   
               cy.get('.thumbnail').as('productthumbail')
               cy.get('@productthumbail').should('have.length',8)

               // invoke the add to cart button title exsist or not 
               cy.get('@productthumbail').find('.productcart').invoke('attr','title').should('include','Add to Cart')
               

               
     })
     /// calculate total of normal and sale products 
     it.only ('calculate total of normal and sale products ',function()
     {
               cy.visit("https://automationteststore.com/")   //open URL 
               //cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
               // invoke the add to cart button title exsist or not 
               cy.get('.thumbnail').as('productthumbail')
               //cy.get('@productthumbail').find('.price').each(($el,index,$list)=>{
               //    cy.log($el.text())
               //   })
               // get price of non sell items
          
               cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')
               cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleitemprice')
               var itemsTotal = 0
               cy.get('@itemprice').then($linkText => {
                    var itemprice =$linkText.split('$')
                    var itemPriceTotal =0
                    var i;
                    for(i=5; i < itemprice.length; i++){
                         cy.log(itemprice[i])
                    itemPriceTotal +=Number(itemprice[i])
                    }
                    itemsTotal +=itemPriceTotal
                    cy.log('Non sale items total : ' +itemsTotal)

               })
               cy.get('@saleitemprice').then($linkText => {
                    var saleitempsrice =0
                    var saleitemprice =$linkText.split('$')
               
                    var i;
                    for(i=5; i < saleitemprice.length; i++){
                         cy.log(saleitemprice[i])
                         saleitempsrice +=Number(saleitemprice[i])
                    
                    }
          
                    cy.log(' sale items total : ' + saleitempsrice)
                    itemsTotal +=saleitempsrice
                    cy.log(' Overall items total price : ' +   itemsTotal)
               
          })
          // conformaion of total items price is correct or not 
          .then(()=>{
          cy.log("The total price of all products would be euqal to : " +itemsTotal)
          expect(itemsTotal).to.eq(274)

          })

               
     })    
     })
