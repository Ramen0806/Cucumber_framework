const { Given, When} = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTables = require('../../../pages/TGDynamicTables')

const dynamicTables = new TGDynamicTables()



Given('user navigates to {string}', (url) => {
    cy.visit(url)
})


When('user click on the {string} button', (button) => {
    switch (button) {
        case 'Register':
            return tgHtmlElementsPage.clickButtonByText(button)
        case 'Sign in':
            return tgHtmlElementsPage.clickButtonByText(button)
        case 'ADD PRODUCT':
          return  dynamicTables.clickAddProductBtnByText(button)
        case 'CLOSE':
          return dynamicTables.clickClosePopUpBtn(button)
        default:
    }
})



