class EnviarDinheiro {
    listaSeletores() {
        const seletoresEnvioDinheiro = {
            btnNewTransaction: "[href='/transaction/new']",
            contatoTransacao: "[data-test='users-list']",
            campoAmount: "[name='amount']",
            campoNoteAmount: "[name='description']",
            btnPay: "[type='submit']",
            alertaSucessoTransacao: "[role='alert']",
            campoSaldoConta: "[data-test='sidenav-user-balance']",
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
        cy.get(this.listaSeletores().campoSaldoConta).then(($saldo) => {
            const saldoTexto = $saldo.text().replace('$', '').trim(); // Ex: "$250.00" → "250.00"
            const saldoNumerico = parseFloat(saldoTexto);

            cy.log(`💰 Saldo atual: ${saldoNumerico}`);
            cy.log(`💸 Valor da transação: ${valor}`);

            // verifica se o saldo é suficiente para a transação
            if (saldoNumerico < valor) {
                cy.log('🚫 Saldo insuficiente para realizar a transação');
            } else if (saldoNumerico === valor) {
                cy.log('⚖️ Saldo exatamente igual ao valor da transação');
            } else {
                cy.log('✅ Saldo suficiente para realizar a transação');
            }

            cy.get(this.listaSeletores().campoAmount).type(valor);
            cy.get(this.listaSeletores().campoNoteAmount).eq(1).type(descricao);
            cy.get(this.listaSeletores().btnPay).eq(1).click();
        });
    }

    verificaTransacaoSucesso() {
        cy.get(this.listaSeletores().alertaSucessoTransacao).should('contain', 'Transaction Submitted!'); // verifica se a transação foi bem-sucedida
    }

}

export default EnviarDinheiro; // exportação da classe para usá-la em outros arquivos