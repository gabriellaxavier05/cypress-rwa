// importações
import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON
import LoginPage from '../../support/pagesObj/loginPage'; // importação da classe LoginPage
import HistoricoTransacaoPage from '../../support/pagesObj/historicoTransPage'; // importação da classe HistoricoTransacaoPage

// instanciações
const loginPage = new LoginPage();
const historicoTransacaoPage = new HistoricoTransacaoPage();

describe('Testes de visualização de histórico de transações', () => {
    beforeEach(() => {
        cy.clearLocalStorage(); // limpa tudo do localStorage
    });

    it('Visualizar histórico de transações com sucesso', () => {
        // Login
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password); // realiza o login com os dados do usuário
        loginPage.verificaLoginSucesso(); // verifica se o login foi bem-sucedido

        // Acessa a página de histórico de transações
        historicoTransacaoPage.acessoPagHistoricoTransacao(); // clica na aba de transações
        historicoTransacaoPage.verificaAreaListaTransacoesVisivel(); // verifica se a área de lista de transações está visível
    });

    it('Visualizar o histórico de transações de um usuário sem transações anteriores', () => {
        // Login
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.cadastro.username, userData.cadastro.password); // realiza o login com os dados do usuário sem transações
        loginPage.verificaLoginSucesso(); // verifica se o login foi bem-sucedido

        // Acessa a página de histórico de transações
        historicoTransacaoPage.acessoPagHistoricoTransacao(); // clica na aba de transações

        // Verifica se a área de lista de transações está vazia
        historicoTransacaoPage.verificaAreaListaTransacoesVisivel();

    });
});