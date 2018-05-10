describe('My First Test', () => {
    it('Visit google search!', () => {
        cy.visit('https://staging.xpa.exchange/#/exchange')
        cy.get('.button > span').contains("創建錢包").click()
        
        cy.get('.modal-input').within(() => {
            cy.get('input').type('esthertsai1204')            // Only yield inputs within form
        })

        cy.get('.modal-btn .button').contains("創建").click()
        cy.wait(30000)
        cy.get('.button').contains("匯出錢包") 
    })
  })