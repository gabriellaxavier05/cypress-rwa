import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON
import LoginPage from '../../support/pagesObj/loginPage'; // importação da classe LoginPage

// instanciação da classe LoginPage
const loginPage = new LoginPage();

describe('Testes de Login', () => {

    beforeEach(() => {
        cy.clearLocalStorage(); // limpa tudo do localStorage
    });


    it('Login com sucesso', () => {
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password); // realiza o login com os dados de sucesso
        loginPage.verificaLoginSucesso(); // verifica se o login foi bem-sucedido
    });

    it.only('Login com falha - senha inválido', () => {
        loginPage.acessoPagLogin(); // acessa a página de login
        loginPage.loginUsuario(userData.usuarioFalha.username, userData.usuarioFalha.password); // realiza o login com os dados de falha
        loginPage.verificaMsgErroLogin(); // verifica se a mensagem de erro está visível
    });
    
});