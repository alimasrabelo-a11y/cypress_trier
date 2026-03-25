function logout() {

    cy.get('#react-burger-menu-btn', {timeout:1000}).should('be.visible').click();//botão de menu

    cy.get('#logout_sidebar_link',{timeout: 1000}).should('be.visible').click();// fazendo logout para voltar a rotina de login

}

module.exports = {logout};