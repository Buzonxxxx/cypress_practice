describe('錢包', () => {
    it.skip('should create new wallet', () => {
        cy.visit('https://staging.xpa.exchange/#/exchange')
        cy.get('ul > :nth-child(2) > span').click()
        cy.get('.modal-input').within(() => {
            cy.get('input').type('esthertsai1204')            // Only yield inputs within form
        })
        cy.get('.modal-btn .button').contains("創建").click()
        cy.wait(15000)
        cy.get('.button').contains("匯出錢包") 
    })
  })