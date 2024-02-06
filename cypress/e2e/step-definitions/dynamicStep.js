const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor');
const DynamicTablesPage = require('../../pages/DynamicTablesPage');

const dynamicTablesPage = new DynamicTablesPage()

Given('the user is on {string}', (url) => {
	cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamicTablesPage.getHeader().should('have.text', heading)
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const headers = dataTable.rawTable.flat()
	
	dynamicTablesPage.getTableHeader().each(($el, index) => {
		cy.wrap($el.text()).should('eq', headers[index])
	})
})

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
	
	dynamicTablesPage.getTableRows().each(($el, index) => {
		cy.wrap($el.text()).should('eq', arr[index])
	})
})
	

Then(/^the user should see the "([^"]*)" text displayed$/, (amount) => {
	dynamicTablesPage.getTotalAmount().should('contain.text', amount)
})


When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	dynamicTablesPage.getclickOnAddBtn(button)
})


Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {
	dynamicTablesPage.getAddNewProductModal().should('have.text', heading)
});


Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	dynamicTablesPage.getBtnEnabled(button).should('be.enabled')
});

Then(/^the user should see the "([^"]*)" label$/, (label) => {
	dynamicTablesPage.getLabels(label).should('have.text', label)
});

Then(/^the user should see the "([^"]*)" input box is enabled$/, (input) => {
	dynamicTablesPage.getInputEnabled(input).should('be.enabled')
});

Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamicTablesPage.getAddNewProductModal().should('not.exist')
});

Then(/^the user enters the quantity as "([^"]*)"$/, (input) => {
	dynamicTablesPage.getQuantityInput().type(input)
});

Then(/^the user enters the product as "([^"]*)"$/, (product) => {
	dynamicTablesPage.getProductInput().type(product)

});

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
	dynamicTablesPage.getPriceInput().type(price)
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const table = dataTable.rawTable.flat()
	
	dynamicTablesPage.getNewRow().each(($el, index) => {
		cy.wrap($el.text()).should('eq', table[index])
	})

});




