const TGBasePage = require('./TGBasePage')


class TGDynamicTables extends TGBasePage { 

    addNewProductPopUp() {
       return cy.get('.modal')
    }
    getAddProductBtn(){
        return  cy.get('#add_product_btn')
      }

    clickAddProductBtnByText(buttonName) {
        this.getAddProductBtn().contains(buttonName).click()
    }
      getClosePopUpButton(){
        return cy.get('.delete')
    }
    clickClosePopUpBtn() {
        this.getClosePopUpButton().click()
    }
}

module.exports = TGDynamicTables