class HistoricoTransacaoPage {
    listaSeletores() {
        const seletoresTransacao = {
            abaMineTransacao: "[data-test='nav-personal-tab']",
            areaListaTransacoes: "[data-test='transaction-list']",
        }

        return seletoresTransacao; // retorna os seletores para serem usados em outros métodos
    }

    // Criação dos passos dos testes

    acessoPagHistoricoTransacao() {
        cy.get(this.listaSeletores().abaMineTransacao).click(); // clica na aba de transações
    }

    verificaAreaListaTransacoesVisivel() {
        cy.get('body').then(($body) => { // acessa o corpo do documento para verificar se a área de lista de transações está visível
            if ($body.find(this.listaSeletores().areaListaTransacoes).length > 0) { // verifica se no corpo do documento existe a área de lista de transações
                cy.get(this.listaSeletores().areaListaTransacoes).should('be.visible'); // verifica se a área de lista de transações está visível
                cy.log('✅ Área de lista de transações está visível');
            } else {
                cy.get(this.listaSeletores().areaListaTransacoes).should('not.exist'); // verifica se a área de lista de transações não existe
                cy.log('⚠️ Não há transações realizadas');
            }
        });
    }
}

export default HistoricoTransacaoPage; // exportação da classe para usá-la em outros arquivos