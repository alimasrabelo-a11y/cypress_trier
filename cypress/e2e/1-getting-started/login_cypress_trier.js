function login(user) {
    //campo do usuario
    cy.get('<input class="input_error form_input error" placeholder="Username" type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value="standard_user">').should('be.visible').type(user)
    cy.wait(5000);
    // campo da senha, a senha é a mesma para todos os usuarios
    cy.get('<input class="input_error form_input error" placeholder="Password" type="password" data-test="password" id="password" name="password" autocorrect="off" autocapitalize="none" value="secretsauce">').should('be.visible').type(secret_sauce)
    cy.wait(5000);// atraso de 5 segundos
}

module.exports = {login};