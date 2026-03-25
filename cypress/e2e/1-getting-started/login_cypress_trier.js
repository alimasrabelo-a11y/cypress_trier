function login(user, ) {
    //campo do usuario
    cy.get('#user-name').should('be.visible').type(user)
    // campo da senha, a senha é a mesma para todos os usuarios
    cy.get('#password').should('be.visible').type('secret_sauce')
    cy.get('#login-button').click();//click no botão login
    cy.contains('Products');//verificar o titulo products e ver se esta na pagina correta
}

module.exports = {login};