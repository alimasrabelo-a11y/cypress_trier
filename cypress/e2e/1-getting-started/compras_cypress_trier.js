function compras() {

    //Realizando compras normal

    cy.get('.inventory_item').should('have.length', 6)//verifica os itens do inventario

    cy.get('.btn_inventory').first().click()// adiciona um itens ao carrinho
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.get('.shopping_cart_link').click()//abre o carrinho e verifica os itens la dentro
    cy.get('.cart_item').should('have.length', 1)

    cy.get('#checkout').click()//preenche os dados para compra
    cy.get('#first-name').type('Alberto')//nome
    cy.get('#last-name').type('Tester')//sobrenome
    cy.get('#postal-code').type('88700-000')//codigo postal
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.contains('Thank you for your order!')//botão de finalização da compra

    cy.get('#back-to-products').click()//volta para a loja

    //adicionando multiplos itens e retirando os produtos do carrinho

    // Adiciona todos os itens ao carrinho
    cy.get('.btn_inventory').each(($btn, index) => {// adiciona todos os produtos ao carrinho
        if (index < 6) {
            cy.wrap($btn).click()
        }
    })
    cy.get('.shopping_cart_link').click()//abre o carrinho e verifica os itens la dentro
    cy.get('.cart_item').should('have.length', 6)

    // removendo individualmente cada item
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.get('#remove-sauce-labs-bolt-t-shirt').click()
    cy.get('#remove-sauce-labs-onesie').click()
    cy.get('#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)').click()
    cy.get('#remove-sauce-labs-fleece-jacket').click()

    cy.get('#continue-shopping').click()// volta para o shopping

    //adicionar e remover produtos sem a nescessidade de olhar o carrinho

    // adiciona os itens ao carrinho
    cy.get('.btn_inventory').each(($btn, index) => {// adiciona todos os produtos ao carrinho
        if (index < 6) {
            cy.wrap($btn).click()
        }
    })

    cy.get('.shopping_cart_badge').should('contain', '6')//conferindo se os produtos estão no carrinho

    //removendo os produtos
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.get('#remove-sauce-labs-bolt-t-shirt').click()
    cy.get('#remove-sauce-labs-onesie').click()
    cy.get('#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)').click()
    cy.get('#remove-sauce-labs-fleece-jacket').click()


}

module.exports = {compras};