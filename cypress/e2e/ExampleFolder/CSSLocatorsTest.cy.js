


describe('CssLocatorsTest', () =>{
    it('verifyAll', () => {
        cy.visit('https://www.amazon.co.jp/')
        cy.get('input#twotabsearchtextbox').type('Books')
        cy.get('input#nav-search-submit-button').click()
        cy.get('.a-color-state').contains('Books')
    })
})