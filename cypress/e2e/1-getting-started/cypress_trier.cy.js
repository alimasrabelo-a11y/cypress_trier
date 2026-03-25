const {compras} = require('./compras_cypress_trier');//função rotina de compras
const {logout} = require('./logout_cypress_trier');//função rotina de logout
const {login} = require('./login_cypress_trier');//função de login

describe('Rotina de teste Swag Labs - Trier', () => {

    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/') // endereço web
    cy.contains('Swag Labs'); // verificar titulo, se esta no site correto
});
    it(' login fluxo normal de compras', () => {//prenche o campo de login e senha (standart_user)

        login('standard_user');//função preencher usuario

        compras();

       logout();

    })

    it(' login bloqueado', () => {//prenche o campo de login e senha (locked_out_user)

        //rotina unica sem função a ser chamada
        cy.get('#user-name').should('be.visible').type('locked_out_user')//preenche o campo do usuario
        cy.get('#password').should('be.visible').type('secret_sauce')// preenche o campo da senha
        cy.get('#login-button').click();//click no botão login
        cy.contains('error');//verificar o titulo de erro
    })

    it(' login usuario com problema', () => {//prenche o campo de login e senha (problem_user)

        login('problem_user');//função preencher usuario

        //compras();
        /*O campo de sobrenome está com defeito tornado incapaz de finalizar as comprar

        os itens abaixo não foram capaz de colocar no carrinho
        Sauce Labs Bolt T-Shirt
        Sauce Labs Fleece Jacket
        Test.allTheThings() T-Shirt (Red)

        os itens abaixo não foram possiveis retirar do carrinho
        Sauce Labs Backpack
        Sauce Labs Bike Light
        Sauce Labs Onesie
        */

        logout();//função logout
    })

    it(' login usuario com glitch', () => {//prenche o campo de login e senha (performance_glitch_user)

        login('performance_glitch_user');//função preencher usuario
        compras();
        logout();
    })

        it(' login usuario com erro', () => {//prenche o campo de login e senha (error_user)

            login('error_user');//função preencher usuario

            //compras();
           /*O campo de sobrenome está com defeito tornado incapaz de finalizar as comprar

          Ao fazer o login os itens abaixo jão se encontram no carrinho, e não é permitido retirar
          Sauce Labs Backpack
          Sauce Labs Bike Light

          não é possivel adicionar os itens abaixo ao carrinho
          Sauce Labs Bolt T-Shirt
          Sauce Labs Fleece Jacket
          Test.allTheThings() T-Shirt (Red)

          o item abaixo é possivel adicionar ao carrinho mas impossivel retirar
            Sauce Labs Onesie

            */
           logout();
        })

    it(' login Usuário visual', () => {//prenche o campo de login e senha (visual_user)

        login('visual_user');//função preencher usuario

        compras();

        logout();

    })


})