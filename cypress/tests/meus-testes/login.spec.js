

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
        cy.get(seletoresLogin.campoUsername).type('Heath93') // preenche o campo username
        cy.get(seletoresLogin.campoPassword).type('s3cret') // preenche o campo password
        cy.get(seletoresLogin.checkboxRemember).check() // clica no checkbox
        cy.get(seletoresLogin.btnSignIn).click() // clica no botão de login
        cy.get(seletoresLogin.abaEveryoneHome).should('contain', 'Everyone') // verifica se a aba Everyone Home está visível
    });
});