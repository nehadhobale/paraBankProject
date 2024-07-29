
describe('AssertionTest',()=>{
    it('ImplictAssertionTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and and 
        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','opensource')

        // to avoide mupltiple url() fuction 
        // cy.url().should('include','orangehrmlive')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','opensource')

        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','opensource')
        .and('not.contain','greenHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
        .and('exist') //logo exist
    })

    it('ExplicityAssertionTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[ name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="vishv Patel";

        cy.get("[class='oxd-userdropdown-tab']").then((name)=>{
            let actName=name.text()
            expect(actName).to.eq(expName)//BDD style

            //TDD style 
            asert(actName,expName)
        })
    })
})