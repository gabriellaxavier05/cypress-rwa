import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON
import LoginPage from '../../support/pagesObj/loginPage'; // importação da classe LoginPage

// instanciações
const loginPage = new LoginPage();


describe('Testes de Envio de Dinheiro', () => {
    const seletoresEnvioDinheiro = {
        btnNewTransaction: "[href='/transaction/new']",
        contatoTransacao: "[data-test='users-list']",
        campoAmount: "[name='amount']",
        campoNoteAmount: "[name='description']",
        btnPay: "[type='submit']",
        alertaSucessoTransacao: "[role='alert']",
    }

    it('Enviar dinheiro com sucesso', () => {
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password); // realiza o login com os dados de sucesso
        loginPage.verificaLoginSucesso(); // verifica se o login foi bem-sucedido
        cy.get(seletoresEnvioDinheiro.btnNewTransaction).click(); // clica no botão de nova transação
        cy.contains(seletoresEnvioDinheiro.contatoTransacao, 'Ted Parisian').click();
        cy.get(seletoresEnvioDinheiro.campoAmount).type('10'); // preenche o campo de valor da transação
        cy.get(seletoresEnvioDinheiro.campoNoteAmount).eq(1).type('dinheiro'); // preenche o campo
        cy.get(seletoresEnvioDinheiro.btnPay).eq(1).click(); // clica no botão de pagar
        cy.get(seletoresEnvioDinheiro.alertaSucessoTransacao).should('contain', 'Transaction Submitted!'); // verifica se a transação foi bem-sucedida
    });
    
});