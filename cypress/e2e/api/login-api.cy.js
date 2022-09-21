/// <reference types="cypress" />

describe('Funcionalidade: Login - API', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url:'api/auth',
            body: {
                "email": "teste@dojo.com",
                "password": "teste@123"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lessThan(300)      
        })
    })

    it('Deve validar mensagem de erro quando inserir dados inválidos', () => {
        cy.request({
            method: 'POST',
            url:'api/auth',
            body: {
                "email": "inexistente@dojo.com",
                "password": "teste@123"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401)
            cy.log(response.duration)
            expect(response.body.errors[0].msg).to.equal("Credenciais inválidas")
               
        })
    })
})