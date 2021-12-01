///<reference types="cypress"/>

describe('Locating Elements',function()
{
     it ('Varify types of locators',function()
{
       cy.visit("https://demo.nopcommerce.com/")   //open URL 
       cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // search box
        //cy.get(".search-box-button").click() 
        cy.get("[type='submit']").click() // click on search button 
        cy.get(".product-box-add-to-cart-button").click() // click on add to cart button  
        cy.get("#product_enteredQuantity_4").clear().type("3") // value on quantity feild is remove
        cy.get("#add-to-wishlist-button-4").click() // add to whishlist
        cy.wait(2000) // wait for 2 sec
        cy.get(".add-to-cart-button").click() // click on add to cart button
        cy.wait(5000) // wait for 5 sec
        cy.get("#topcartlink > a > span.cart-label").click() // shopping cart link
        cy.wait(3000) // wait for 3 sec
        cy.get(".product-subtotal").contains('$5,400.00') //validation for expected total price
        /// Interacting with UI Elements 
        
    }
        )
    }
)