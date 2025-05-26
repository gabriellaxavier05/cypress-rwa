import userData from '../../fixtures/userData.json'; // importação dos dados do usuário do arquivo JSON

describe('Testes de Cadastro de usuário', () => {
    const seletoresCadastro = {
        linkSignUp: "[href='/signup']",
        campoFirstName: "[name='firstName']",
        campoLastName: "[name='lastName']",
        campoUsername: "[name='username']",
        campoPassword: "[name='password']",
        campoConfirmPassword: "[name='confirmPassword']",
        btnSingUp: "[type='submit']",
        tituloSignIn: "h1",
    };

    it('Cadastro realizado com sucesso', () => {
        cy.visit('/signin')
        cy.get(seletoresCadastro.linkSignUp).click(); // clica no link de cadastro
        cy.get(seletoresCadastro.campoFirstName).type(userData.cadastro.firstName); // preenche o campo firstName
        cy.get(seletoresCadastro.campoLastName).type(userData.cadastro.lastName); // preenche o campo lastName
        cy.get(seletoresCadastro.campoUsername).type(userData.cadastro.username); // preenche o campo username
        cy.get(seletoresCadastro.campoPassword).type(userData.cadastro.password); // preenche o campo password
        cy.get(seletoresCadastro.campoConfirmPassword).type(userData.cadastro.password); // preenche o campo confirmPassword
        cy.get(seletoresCadastro.btnSingUp).click(); // clica no botão de cadastro
        cy.get(seletoresCadastro.tituloSignIn).should('contain', 'Sign in'); // verifica se o título de Sign In está visível
    })
});