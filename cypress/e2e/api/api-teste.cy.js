
describe('Teste de API', () => {

    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fábio"
    }

var frutas = ["banana", "maça", "uva"]

var usuarios = [
    {
        "nome": "Fábio Araújo",
        "usuario": "teste@dojo.com",
        "senha": "teste@123"
    },

    {
        "nome": "Fabio",
        "usuario": "fabio@dojo.com",
        "senha": "teste@123"
    },

    {
        "nome": "Felipe Araújo",
        "usuario": "felipe@dojo.com",
        "senha": "teste@123"
    }
]

it('Teste DOJO', () => {
    expect(dojo.aula).to.equal("API")
    expect(dojo.duracao).to.equal(3)
    expect(dojo.professor).to.equal("Fábio")
});

it('Deve validar o retorno dos usuários', () => {
    expect(usuarios[2].usuario).to.equal("felipe@dojo.com")
    expect(usuarios[1].usuario).to.equal("fabio@dojo.com")
    expect(usuarios[0].usuario).to.equal("teste@dojo.com")
    
});
    
});

// atributo que recebe alguma coisa: parâmetro que recebe algo
// primeiro é fixo e o segundo é dinâmico