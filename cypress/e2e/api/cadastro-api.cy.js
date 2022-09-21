/// <reference types="cypress" />

describe('Funcionalidade: Cadastro via API', () => {
    it('Deve fazer cadastro com sucesso', () => {
        let email = `ambev_${Math.floor(Math.random() * 1000)}@dojo.com`
        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Marília",
                "email": email,
                "password": "teste123"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
        
        })
        
    });
    
});