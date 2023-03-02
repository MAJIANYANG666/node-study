describe('百度', () => {
  it('能搜索', () => {
    cy.visit('http://baidu.com')
    cy.get('input#kw').eq(0).type('饥人谷')
    cy.contains('百度一下').click()
    cy.contains('饥人谷官网').should('exist')
    cy.contains('jirengu').should('exist')
  })
})