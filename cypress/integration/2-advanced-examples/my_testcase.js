describe('MyTestSuite', () =>
 {
    it('Verify title of the page - Positive ', () =>
     {
      cy.visit('http://demo.guru99.com/V4/')
      cy.title().should('eq','Guru99 Bank Home Page')
    })
    it('Verify title of the page - Negative ', () =>
     {
      cy.visit('http://demo.guru99.com/V4/')
      cy.title().should('eq','Guru99 Bank Home Page12')
    })

  })