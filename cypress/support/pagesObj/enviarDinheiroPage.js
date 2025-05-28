class EnviarDinheiro {
    listaSeletores() {
        const seletoresEnvioDinheiro = {
            btnNewTransaction: "[href='/transaction/new']",
            contatoTransacao: "[data-test='users-list']",
            campoAmount: "[name='amount']",
            campoNoteAmount: "[name='description']",
            btnPay: "[type='submit']",
            alertaSucessoTransacao: "[role='alert']",
        }
        return seletoresEnvioDinheiro; // retorna os seletores para serem usados em outros métodos
    }

    // Criação dos passos dos testes   
    acessaPagTransacao() {
        cy.get(this.listaSeletores().btnNewTransaction).click(); // clica no botão de nova transação
    }

    selecionaContatoTransacao(contato){
        cy.contains(this.listaSeletores().contatoTransacao, contato).click(); // seleciona o contato para a transação
    }

    fazTransacao(valor, descricao) {
        cy.get(this.listaSeletores().campoAmount).type(valor); // preenche o campo de valor da transação
        cy.get(this.listaSeletores().campoNoteAmount).eq(1).type(descricao); // preenche o campo de descrição
        cy.get(this.listaSeletores().btnPay).eq(1).click(); // clica no botão de pagar
    }

    verificaTransacaoSucesso() {
        cy.get(this.listaSeletores().alertaSucessoTransacao).should('contain', 'Transaction Submitted!'); // verifica se a transação foi bem-sucedida
    }

}

export default EnviarDinheiro; // exportação da classe para usá-la em outros arquivos