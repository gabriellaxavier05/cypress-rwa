class CadastroPage {
    listaSeletores() {
        const seletoresCadastro = {
            linkSignUp: "[href='/signup']",
            campoFirstName: "[name='firstName']",
            campoLastName: "[name='lastName']",
            campoUsername: "[name='username']",
            campoPassword: "[name='password']",
            campoConfirmPassword: "[name='confirmPassword']",
            btnSingUp: "[type='submit']",
            tituloSignIn: "h1",
            errorCampoConfirmPassword: "#confirmPassword-helper-text",
        }

        return seletoresCadastro; //retorna os seletores para serem usados em outros métodos

    }

    // Criação dos passos dos testes
    acessoPagCadastro() {
        cy.visit('/signin'); // acessa a página de login
        cy.get(this.listaSeletores().linkSignUp).click(); // clica no link de cadastro
    }

    cadastroUsuario(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.listaSeletores().campoFirstName).type(firstName); // preenche o campo firstName
        cy.get(this.listaSeletores().campoLastName).type(lastName); // preenche o campo lastName
        cy.get(this.listaSeletores().campoUsername).type(username); // preenche o campo username
        cy.get(this.listaSeletores().campoPassword).type(password); // preenche o campo password
        cy.get(this.listaSeletores().campoConfirmPassword).type(confirmPassword); // preenche o campo confirmPassword        
    }

    verificaCadastroSucesso() {
        cy.get(this.listaSeletores().btnSingUp).click(); // clica no botão de cadastro
        cy.get(this.listaSeletores().tituloSignIn).should('contain', 'Sign in'); // verifica se o título de Sign In está visível
    }

    verificaMsgErroConfirmPassword() {
        cy.get(this.listaSeletores().errorCampoConfirmPassword).should('contain', 'Password does not match'); // verifica se a mensagem de erro está visível
    }
}

export default CadastroPage; // exportação da classe para usá-la em outros arquivos