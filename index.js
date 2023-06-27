/// <reference types="cypress" />

const catJump = () => {
    cy.log('Cat is alive, and jumps for no reason')
    console.log('Cat is alive, and jumps for no reason')
}
// A cypress custom command to get uncertain element
Cypress.Commands.add('findcat', { prevSubject: element }, (cat, catJump) => {
    cy.wrap(prevSubject)
        .then(($prevSubject) => {
            $prevSubject.find(cat).each(()=> {
                //do something with it
                catJump()
            })
        })
})