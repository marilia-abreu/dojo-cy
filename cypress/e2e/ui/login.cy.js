/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {        
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('mariliaabreu@dojo.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456789')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Marília Abreu')
    });

    it('Deve validar mensagem de erro ao fazer login com dados inválidos', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('mariliaabreu@dojo.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')       
    });

    it('Deve fazer login com sucesso - Usando Commands', () => {
        cy.login('mariliaabreu@dojo.com', '123456789')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Marília Abreu')
        
    });
    it('Deve fazer login com sucesso usando importação de massa de dados', () => {
        cy.login(usuario.usuario, usuario.senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', usuario.nome)                       
    });

    it.only('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture("multi-usuario").then((multi) =>{
            cy.login(multi[0].usuario, multi[0].senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', multi[0].nome) 
        })
    });

})

