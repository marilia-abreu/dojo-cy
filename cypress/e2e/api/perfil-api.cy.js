/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil via API', () => {

    let token

    beforeEach(() => {
        cy.token().then((tkn) => {
            token = tkn
        })
    })

    it('Deve criar perfil com sucesso', () => {
        cy.request({
            method: 'POST',
            url:'api/profile',
            headers: {
                Cookie: token
            },
            body: 
            {
                "company": "Dojo",
                "status": "QA Sênior",
                "location": "SP",
                "website": "https://ambevtech.com.br",
                "skills": "Java script",
                "bio": "Formado em TI..",
                "githubusername": "dojo-dojo",
            
              }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.company).equal("Dojo")

            })
              
        })
    });