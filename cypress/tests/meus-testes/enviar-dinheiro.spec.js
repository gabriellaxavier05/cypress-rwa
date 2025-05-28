import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON
import LoginPage from '../../support/pagesObj/loginPage'; // importação da classe LoginPage
import EnviarDinheiro from '../../support/pagesObj/enviarDinheiroPage'; // importação da classe EnviarDinheiro 

// instanciações
const loginPage = new LoginPage();
const enviarDinheiro = new EnviarDinheiro();


describe('Testes de Envio de Dinheiro', () => {
    beforeEach(() => {
        cy.clearLocalStorage(); // limpa tudo do localStorage
    });

    it('Enviar dinheiro com sucesso', () => {
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password); // realiza o login com os dados de sucesso
        loginPage.verificaLoginSucesso(); // verifica se o login foi bem-sucedido
        enviarDinheiro.acessaPagTransacao(); // acessa a página de nova transação
        enviarDinheiro.selecionaContatoTransacao('Ted Parisian'); // seleciona o contato para a transação
        enviarDinheiro.fazTransacao('10', 'dinheiro'); // realiza a transação com valor e descrição
        enviarDinheiro.verificaTransacaoSucesso(); // verifica se a transação foi bem-sucedida
    });

    it('Enviar dinheiro com saldo insuficiente', () => {
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.usuarioSemSaldo.username, userData.usuarioSemSaldo.password); // realiza o login com os dados de usuário sem saldo
        loginPage.verificaLoginSucesso(); // verifica se o login foi bem-sucedido
        enviarDinheiro.acessaPagTransacao(); // acessa a página de nova transação
        enviarDinheiro.selecionaContatoTransacao('Lia Rosenbaum') // seleciona o contato para a transação
        enviarDinheiro.fazTransacao('1600', 'dinheiro'); // tenta realizar a transação com valor e descrição
    });
    
});