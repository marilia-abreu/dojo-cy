/// <reference types="cypress" />

describe('Ações do usuário', () => {
    it('Criar um novo usuário', () => {
        let email = `gorest_${Math.floor(Math.random() * 1000)}@dojo.com`
        cy.request({
            method: 'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 877fc074178f541cc25d02010d8a5fdd4f0bd18b94b5450a75ca721825648608"
            },
            body: {
                "name": "marilia",
                "gender": "female",
                "email":email,
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
        cy.request({
            method: 'POST',
            url:`https://gorest.co.in/public/v2/users/${Math.floor(Math.random() * 100)}/posts`,
            headers: {
                Authorization: "Bearer 877fc074178f541cc25d02010d8a5fdd4f0bd18b94b5450a75ca721825648608"
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