export class RegisterPage{
    //Locators
    fname=".input[name='customer.firstName']"
    lname=".input[name='customer.lastName']"
    add=".input[name='customer.address.street']"
    city=".input[name='customer.address.city']"
    state=".input[name='customer.address.state']"
    zipCode=".input[name='customer.address.zipCode']"
    phone=".input[name='customer.phoneNumber']"
    ssn=".input[name='customer.ssn']"
    userId = ".input[name='customer.username']"
    pass=".input[name='customer.password']"
    confirm=".input[name='repeatedPassword']"
    register=".button[value='Register']"
    successulyMesg ="#rightPanel>p"

    doRegisterLink(){
        cy.contains('a','Register').click()
    }

    doRegister(firstname,lastName,address,cityname,statename,zipcodeno,phoneno,ssno){
        cy.get(this.fname).type(firstname)
        cy.get(this.lname).type(lastName)
        cy.get(this.add).type(address)
        cy.get(this.city).type(cityname)
        cy.get(this.state).type(statename)
        cy.get(this.zipCode).type(zipcodeno)
        cy.get(this.phone).type(phoneno)
        cy.get(this.ssn).type(ssno)
    }
    doLogin(username,password){
        cy.get(this.userId).type(username)
        cy.get(this.pass).type(password)
        cy.get(this.confirm).type(password)
        cy.get(this.register).click()
    }

    getWelcomeTitle(){
     cy.get(this.successulyMesg).should('have.text','Your account was created successfully. You are now logged in.')
    }
}