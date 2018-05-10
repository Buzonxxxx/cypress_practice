describe('My First Test', function() {
    it('Visit google search!', function() {
        cy.visit('https://beta.xpa.exchange/?1525944154915/#/exchange')
        cy.get('.button > span').contains("創建錢包").click()
        
        cy.get('.modal-input').within(() => {
            cy.get('input').type('esthertsai1204')            // Only yield inputs within form
        })

        cy.get('.modal-btn .button').contains("創建").click()

        cy.get('.button').contains("匯出錢包") 
    })
  })