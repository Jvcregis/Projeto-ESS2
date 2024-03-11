import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('o usuário está na página {string}', (page: string)=>{
    cy.visit(`http://localhost:3000/${page}`)
});

Given('o item de ID {string} está na lista de itens do carrinho', (string: string) => {
    const CPF = "123.456.789-10";

    cy.get('input.inputCpf').type(CPF);

    cy.get('button.viewCartButton').click();

    cy.get('.itemPageButton').click();

    cy.get('.itemAddButton').click();

    cy.get('.cartButton').click();

    cy.get('button.viewCartButton').click();

    // Verificar se o item com o ID específico está presente na lista
    cy.get('.itemList > li').each(($li) => { 
        cy.wrap($li).find('span.itemID').contains(`(ID: ${string})`).should('exist');
    });
});

When('o usuário clica no botão {string} do item {string}', (string: string, string2: string) => {
    if (string === "remover") {
        cy.get('.itemList > li').each(($li) => {
            cy.wrap($li).find('span.itemID').contains(`(ID: ${string2})`).then(($span) => {
                // Verifica se o span contendo o ID do item foi encontrado
                if ($span) {
                    // Se o span com o ID do item existe, procura pelo botão de remover no mesmo 'li' e clica nele
                    cy.wrap($li).find('button.removeButton').click();
                }
            });
        });
    }
});

Then('o usuário não deve ver mais o item de ID {string} na lista de itens do carrinho', (itemID) => {
    const CPF = "123.456.789-10";

    cy.get('input.inputCpf').type(CPF);
    cy.get('button.viewCartButton').click();

    // Carrinho vazio
    cy.get('.itemList').find('li').should('not.exist')
});