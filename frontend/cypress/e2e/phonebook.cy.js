/* eslint-disable no-undef */
describe('phonebook CICD', () => {
	it('passes', () => {
		cy.visit('http://localhost:3000')
		cy.contains('Phonebook')
		cy.contains('add')
		cy.contains('Numbers')
	})
})