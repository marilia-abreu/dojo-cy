/// <reference types="cypress" />

import token from "../../fixtures/token.json"
let bodyData

describe('Ações do usuário', () => {

    before(() => {
        cy.fixture('token.json').then(token => {
        bodyData = token 
        })
        
    });
    it.only('Criar um novo usuário', () => {
        let email = `gorest_${Math.floor(Math.random() * 1000)}@dojo.com`

        cy.request({
            method: 'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: bodyData.token
            },
            body: {
                "name": "marilia",
                "gender": "female",
                "email": email,
                "status": "active"
            }        
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('id')
            expect(response.duration).be.lessThan(600)      
        })
        
    })

    it('Criar uma nova publicação', () => {
        let text = `Oi, sou a publicação nº ${Math.floor(Math.random() * 1000)}`
        let token = tokenGoRest

        cy.request({
            method: 'POST',
            url:`https://gorest.co.in/public/v2/users/${Math.floor(Math.random() * 100)}/posts`,
            headers: {
                Authorization: token
            },
            body: {
                user: "marilia",
                title: "Teste",
                body: text
            }        
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('user_id')
            expect(response.duration).be.lessThan(600)      
        })
    })
})