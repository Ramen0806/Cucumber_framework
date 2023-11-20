const {  Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTables = require('../../../pages/TGDynamicTables')
const dynamicTables = new TGDynamicTables()



Then(/^user should see Add New Product pop-up$/, () => {
	dynamicTables.addNewProductPopUp().should('be.visible')
})



Then(/^user should not see Add New Product pop-up$/, () => {
	dynamicTables.addNewProductPopUp().should('not.exist')
})





