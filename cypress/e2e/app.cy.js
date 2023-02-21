describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: '../fixtures/resFixtures.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the site title', () => {
    cy.get('h1').contains("Turing Cafe Reservations")
  })

  it('Should display reservation cards', () => {
    cy.get('div[class=reservation-card]').should('be.visible')
  })

  it('Should show the reservation form', () => {
    cy.get('form[class=res-form')
  })

  it('Should be able to accept input and create a new reservation after submitting', () => {
    cy.get('input[name=name]').type('new');
    cy.get('input[name=name]').should('have.value', 'new');

    cy.get('input[name=date]').type('2024-01-01');
    cy.get('input[name=date]').should('have.value', '2024-01-01');

    cy.get('input[name=time]').type('07:00');
    cy.get('input[name=time]').should('have.value', '07:00');

    cy.get('input[name=party]').type('{uparrow} {uparrow}');
    cy.get('input[name=party]').should('have.value', '2');

    cy.get('button').click()

    cy.get('h2').contains('Guest: new')
  })

})