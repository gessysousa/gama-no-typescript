"use strict";
//Boolean
var contaPaga = false; //declara a variável e indica qual o tipo dela
//Number
var idade = 23; //declaração sempre em letra minúscula
var avaliacao = 4.5;
//String
var nome = "Gessy Sousa";
//Array
var idades = [23, 28, 45];
var idades2 = [23, 345, 456, 46];
//Tuple (parecido com array)
var jogadores; //eu digo quantas posições são, é fixo
jogadores = ["Gessy", 3, true];
//Enum (te ajuda com o mapeamento de informações)
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Reprovado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
//Any (quando você não sabe o tipo de informação, não recomendado)
var retornoDaAPI = [123, "Gessy", false];
var retornoDaAPI2 = {};
//Void (quando não retorna nada, pouco utilizado)
function printaNaTela(msg) {
    console.log(msg);
}
//Null e Undefined (quando você quer declarar que as variáveis são assim)
var u = undefined;
var n = null;
//object (você sabe que é um objeto, mas ele não é um tipo primitivo, como string, number )
function criar(objeto) {
    //..
}
criar({
    propriedade: 1,
});
//Never (função que nunca tem retorno)
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo falhou!");
}
//Union Types (função que pode ter um tipo ou outro)
var nota = 54;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota("10");
exibirNota(10);
//type funcionarios = funcionario[];
var funcionarios = [{
        nome: "Gessy",
        sobrenome: "Sousa",
        dataNascimento: new Date()
    }, {
        nome: "Helena",
        sobrenome: "Schwanz",
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionário", funcionario.nome);
    }
}
//normalmente, não é possível atribuir um tipo a uma variável (nesse caso number a variável altura e depois atribuir nulo)
//para que isso seja possível, é necessário mudar a regra no arquivo tsconfig.json.
//para essa situação, se retirou o comentário do parâmetro strictNullChecks e se mudou o atributo para false
var altura = 1.6;
altura = null;
var contato = {
    nome: "Gessy",
    telefone1: "999999999",
    telefone2: "9981765432"
};
//Type Assertion (eu falo pro typescript que a variável a partir daquele momento virou number)
var minhaIdade = 23;
minhaIdade.toString();
//(<number>minhaIdade).toString();
var input = document.getElementById("numero1");
//const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);
