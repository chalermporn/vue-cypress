// https://docs.cypress.io/api/introduction/api.html

describe('show about', () => {
  it('Visits the app root url', () => {
    cy.visit('#/about')
    cy.contains('h1', 'This is an about page')
  })
})
