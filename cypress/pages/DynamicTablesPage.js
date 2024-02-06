class DynamicTablesPage {
 /* Locators */
getHeader() {
    return cy.get('.is-size-3')
}
getTableHeader() {
    return cy.get('.header')
}
getTableRows() {
    return cy.get('td')
}
getAddProductBtn() {
    return cy.get('#add_product_btn')
}
getTotalAmount() {
    return cy.get('#total_amount')
}
getAddNewProductModal() {
    return cy.get('#modal_title')
}
getXBtn() {
    return cy.get('.delete')
}
getLabels(label) {
    return cy.contains(label)
}
getQuantityInput() {
    return cy.get('#quantity')
}
getProductInput() {
    return cy.get('#product')
}
getPriceInput() {
    return cy.get('#price')
}
getSubmitBtn(){
    return cy.get('#submit')
}
getNewRow() {
    return cy.get('tbody > :nth-child(4) > td')
}

/* Method */
getclickOnAddBtn(button) {
   this.getBtnEnabled(button).click()
}

getBtnEnabled(button) {
    switch (button) {
        case 'ADD PRODUCT':
            return this.getAddProductBtn()
        case 'X':
            return this.getXBtn()
        case 'SUBMIT':
            return this.getSubmitBtn()
        default:
            throw new Error(`Case not found ${button}`)
}
}
getInputEnabled(input) {
    switch(input) {
        case 'Quantity':
            return this.getQuantityInput()
        case 'Product':
        return this.getProductInput()
        case 'Price':
            return this.getPriceInput()
        default:
            throw new Error(`Case not found ${input}`)
    }
}
}



module.exports = DynamicTablesPage