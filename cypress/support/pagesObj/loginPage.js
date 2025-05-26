class LoginPage {
    listaSeletores() {
        const seletoresLogin = {
            campoUsername: "[name='username']",
            campoPassword: "[name='password']",
            checkboxRemember: "[name='remember']",
            btnSignIn: "[type='submit']",
            abaEveryoneHome: "[tabindex='0']",
            msgErroLogin: "[role='alert']",
        }

        return seletoresLogin; //retorna os seletores para serem usados em outros métodos
    }

    // Criação dos passos dos testes
    acessoPagLogin() {
        cy.visit('/signin');
    }

    loginUsuario(username, password) {
        cy.get(this.listaSeletores().campoUsername).type(username); // preenche o campo username
        cy.get(this.listaSeletores().campoPassword).type(password); // preenche o campo password
        cy.get(this.listaSeletores().checkboxRemember).check(); // clica no checkbox
        cy.get(this.listaSeletores().btnSignIn).click(); // clica no botão de login        
    }

    verificaLoginSucesso() {
        cy.get(this.listaSeletores().abaEveryoneHome).should('contain', 'Everyone'); // verifica se a aba Everyone Home está visível
    }

    verificaMsgErroLogin() {
        cy.get(this.listaSeletores().msgErroLogin).should('contain', 'Username or password is invalid') // verifica se a mensagem de erro está visível
    }
}

export default LoginPage; // exportação da classe para usá-la em outros arquivos