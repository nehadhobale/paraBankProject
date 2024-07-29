

import { RegisterPage } from "../../PageObjects/ParaBankPageObject/RegisterPage"
const regPage = new RegisterPage()
import ParaBankTestData from '../../fixtures/ParaBankTestData.json' 

describe('ParaBankTestCases',()=>{
    it('VerfiyRegisterBankAccount',()=>{
        cy.visit(ParaBankTestData.URL)
        regPage.doRegisterLink()
        regPage.doRegister(ParaBankTestData.firstname,ParaBankTestData.lastname,ParaBankTestData.address,ParaBankTestData.cityname,ParaBankTestData.statename,ParaBankTestData.zipcodeno,ParaBankTestData.phoneno,ParaBankTestData.ssno)
        regPage.doLogin(ParaBankTestData.username,ParaBankTestData.password)
        regPage.getWelcomeTitle()
    })
})