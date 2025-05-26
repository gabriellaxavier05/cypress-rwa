import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON

describe('Testes de Login', () => {
    const seletoresLogin = {
        campoUsername: "[name='username']",
        campoPassword: "[name='password']",
        checkboxRemember: "[name='remember']",
        btnSignIn: "[type='submit']",
        abaEveryoneHome: "[tabindex='0']",
    }

    it('Login com sucesso', () => {
        cy.visit('/signin');
        cy.get(seletoresLogin.campoUsername).type(userData.usuarioSucesso.username) // preenche o campo username
        cy.get(seletoresLogin.campoPassword).type(userData.usuarioSucesso.password) // preenche o campo password
        cy.get(seletoresLogin.checkboxRemember).check() // clica no checkbox
        cy.get(seletoresLogin.btnSignIn).click() // clica no botão de login
        cy.get(seletoresLogin.abaEveryoneHome).should('contain', 'Everyone') // verifica se a aba Everyone Home está visível
    });
});