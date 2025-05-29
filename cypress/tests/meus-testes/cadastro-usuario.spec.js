import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON
import CadastroPage from '../../support/pagesObj/cadastroPage'; // importação da classe LoginPage

// instaciação da classe CadastroPage
const cadastroPage = new CadastroPage();


describe('Testes de Cadastro de usuário', () => {
    beforeEach(() => {
        cy.clearLocalStorage(); // limpa tudo do localStorage
    });

    it.only('Cadastro realizado com sucesso', () => {
        cadastroPage.acessoPagCadastro(); // acessa a página de cadastro
        cadastroPage.cadastroUsuario(
            userData.cadastro.firstName,
            userData.cadastro.lastName,
            userData.cadastro.username,
            userData.cadastro.password,
            userData.cadastro.password
        ); // realiza o cadastro com os dados do usuário
        cadastroPage.verificaCadastroSucesso(); // verifica se o cadastro foi bem-sucedido
    });

    it('Cadastro com dados diferentes nos campos Password e Confirm Password', () => {
        cadastroPage.acessoPagCadastro(); // acessa a página de cadastro
        cadastroPage.cadastroUsuario(
            userData.cadastro.firstName,
            userData.cadastro.lastName,
            userData.cadastro.username,
            userData.cadastro.password,
            userData.cadastro.password + 'errado' // preenche o campo confirmPassword com dado diferente
        );
        cadastroPage.verificaMsgErroConfirmPassword(); // verifica se a mensagem de erro está visível
    });
});