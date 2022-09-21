/// <reference types="cypress" />
var faker = require('faker-br')
import usuario from "../../fixtures/usuario.json"

describe('Criação de perfil', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    })
    it('Validar criação de perfil com todos os campos preenchidos', () => {

        let nome =  faker.name.findName()
        let email = faker.internet.email(nome)
        let senha = faker.internet.password()

        cy.criarPerfil(email, senha, nome)
        
        cy.get('[data-test="profile-submit"]').click()        
        cy.get('[data-test="dashboard-welcome"]').should('contain', nome)
    })

    it('Validar criação de perfil com campo obrigatório em branco', () => {

        let nome =  faker.name.findName()
        let email = faker.internet.email(nome)
        let senha = faker.internet.password()

        cy.criarPerfilInvalido(email, senha, nome)
        
        cy.get('.MuiFormHelperText-root').should('have.text','Digite uma url válida')
        cy.get('[data-test="profile-submit"]').click()
        cy.url('criar-perfil')
        cy.log('O cadastro não deve ser concluído e o usuário deve permanecer na mesma página')         
        
    })
    
})
