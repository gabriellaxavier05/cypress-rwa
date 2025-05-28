class HistoricoTransacaoPage {
    listaSeletores() {
        const seletoresTransacao = {
            abaMineTransacao: "[data-test='nav-personal-tab']",
            areaListaTransacoes: "[data-test='transaction-list']",
            areaListaVaziaTransacoes: "[data-test='empty-list-header']",
        }

        return seletoresTransacao; // retorna os seletores para serem usados em outros métodos
    }

    // Criação dos passos dos testes

    acessoPagHistoricoTransacao() {
        cy.get(this.listaSeletores().abaMineTransacao).click(); // clica na aba de transações
    }

    verificaAreaListaTransacoesVisivel() {
        cy.get(this.listaSeletores().areaListaTransacoes).should('be.visible'); // verifica se a área de lista de transações está visível
        cy.log('✅ Lista de transações visível'); // exibe no Test Runner do Cypress
    }

    verificaAreaVaziaTransacoesVisivel() {
        cy.get(this.listaSeletores().areaListaVaziaTransacoes).should('be.visible'); // verifica se a área de lista vazia de transações está visível
        cy.log('Nenhuma transação visível'); // exibe no Test Runner do Cypress
    }
}

export default HistoricoTransacaoPage; // exportação da classe para usá-la em outros arquivos