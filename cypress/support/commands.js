// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, senha) => { 
    cy.visit('login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
 })

import user from "../fixtures/multi-usuario.json"

Cypress.Commands.add('token', () =>{
    cy.request({
        method: 'POST',
        url:'api/auth',
        body: {
            "email": user[0].usuario,
            "password": user[0].senha
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
        return response.body.jwt     
    })
})


Cypress.Commands.add('criarPerfil', (email, senha, nome) => {
    
    cy.get('.large').should('contain', 'Cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-submit"]').click()

    cy.visit('/criar-perfil')
    cy.url().should('contain', 'https://conexaoqa.herokuapp.com/criar-perfil')
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-1"]').click()
        .should('have.text', 'QA Júnior')
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Ambev Tech')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.ambevtech.com.br/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Fortaleza, CE')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes Manuais, Cypress')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('marilia-abreu')
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Sou QA Júnior há um ano e um mês')
    
})

Cypress.Commands.add('criarPerfilInvalido', (email, senha, nome) => {
    
    cy.get('.large').should('contain', 'Cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-submit"]').click()

    cy.visit('/criar-perfil')
    cy.url().should('contain', 'https://conexaoqa.herokuapp.com/criar-perfil')
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-1"]').click()
        .should('have.text', 'QA Júnior')
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Ambev Tech')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('www.ambevtech.com.br/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Fortaleza, CE')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes Manuais, Cypress')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('marilia-abreu')
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Sou QA Júnior há um ano e um mês')
    
})

Cypress.Commands.add('criarPost', (token, texto) => {
    cy.request({
    method: 'POST',
    url: 'api/posts',
    headers: { Cookie: token },
    body: {
        text: texto
    }
})

})