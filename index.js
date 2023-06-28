/// <reference types="cypress" />

// A cypress custom command to get uncertain element
Cypress.Commands.add('findcat', { prevSubject: true }, (theBox, cat, catMoves) => {
	const catJumps = () => {
		cy.log('Cat is alive, and jumps for no reason')
		console.log('Cat is alive, and jumps for no reason')
		cy.exec("echo 'Cat is alive, and jumps for no reason'")
	}
	
	theBox.find(cat)
		.each(() => {
			const catChoose = catMoves || catJumps
			catChoose()
		})
})