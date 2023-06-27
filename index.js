/// <reference types="cypress" />

// A cypress custom command to get uncertain element
Cypress.Commands.add('findcat', { prevSubject: element }, (cat, catJumps) => {
    if (!catJumps) {
        const catJumps = () => {
            cy.log('Cat is alive, and jumps for no reason')
            console.log('Cat is alive, and jumps for no reason')
        }
    }
    
    cy.wrap(prevSubject)
        .then(($prevSubject) => {
            $prevSubject.find(cat).each(()=> {
                //do something with it
                catJumps()
            })
        })
})