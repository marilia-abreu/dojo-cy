/// <reference types="cypress" />
import ExperienciaPage from "../../support/pages/experiencia.page";

describe('Funcionalidade: Adicionar experiência', () => {
    beforeEach(() => {
        cy.loginApp()
        ExperienciaPage.visitar()
    });

    it.only('Deve visitar a tela sem abrir tela de login', () => {
        cy.log('Visitou!')
        
    });
    
    it('Deve adicionar uma experiência com sucesso', () => {        
        ExperienciaPage.addExperiencia('QA Pleno', 'Ambev', 'Floripa', '01/01/2022', '01/01/2040', 'Empresa de TI')
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it.only('Deve adicionar uma experiência atual com sucesso', () => {        
        ExperienciaPage.addExperienciaAtual('QA Senior', 'Ambev Tech', 'SP', '01/01/2022', 'Empresa de Tecnologia')
        cy.get('[data-test="experience-delete"]').should('exist')
    });
});