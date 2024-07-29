
// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

  describe('My First Test',function(){
    
    it('verfiy test1 positive',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        
    })

    it('verfiy test2 negative',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })

  })