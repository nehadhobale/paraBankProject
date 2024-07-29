
describe('Drop Down Test',()=>{
    it.skip('Select DropDown Test',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('India')
        .should('have.value','India')

    })

    it.skip('Without Select DropDown Test',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
        

    })
    it('Auto Suggest DropDown Test',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
        

    })
})