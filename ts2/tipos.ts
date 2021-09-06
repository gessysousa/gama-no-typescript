//Boolean
const contaPaga: boolean = false; //declara a variável e indica qual o tipo dela

//Number
const idade: number = 23; //declaração sempre em letra minúscula
const avaliacao: number = 4.5;

//String
const nome: string = "Gessy Sousa";

//Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 345, 456, 46];

//Tuple (parecido com array)
let jogadores: [string, number, boolean]; //eu digo quantas posições são, é fixo
jogadores = ["Gessy", 3, true];

//Enum (te ajuda com o mapeamento de informações)
enum statusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Reprovado = "003"
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

//Any (quando você não sabe o tipo de informação, não recomendado)
const retornoDaAPI: any[] = [123, "Gessy", false];
const retornoDaAPI2: any = {};

//Void (quando não retorna nada, pouco utilizado)
function printaNaTela(msg: string): void {
    console.log(msg);
}

//Null e Undefined (quando você quer declarar que as variáveis são assim)
const u: undefined = undefined;
const n: null = null;

//object (você sabe que é um objeto, mas ele não é um tipo primitivo, como string, number )
function criar(objeto: object) {
    //..
}
criar({
    propriedade: 1,
})

//Never (função que nunca tem retorno)
function loopInfinito(): never {
    while (true) { }
}
function erro(mensagem: string) {
    throw new Error(mensagem);
}

function falha() {
    return erro("Algo falhou!");
}

//Union Types (função que pode ter um tipo ou outro)
const nota: string | number = 54;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}
exibirNota("10");
exibirNota(10);

//Alias (cria um type exclusivo)

type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}
//type funcionarios = funcionario[];
const funcionarios: Funcionario[] = [{
    nome: "Gessy",
    sobrenome: "Sousa",
    dataNascimento: new Date()
}, {
    nome: "Helena",
    sobrenome: "Schwanz",
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionário", funcionario.nome);
    }
}

//normalmente, não é possível atribuir um tipo a uma variável (nesse caso number a variável altura e depois atribuir nulo)
//para que isso seja possível, é necessário mudar a regra no arquivo tsconfig.json.
//para essa situação, se retirou o comentário do parâmetro strictNullChecks e se mudou o atributo para false
let altura : number | null = 1.6;
altura = null;

type Contato = {
    nome : string;
    telefone1 : string;
    telefone2? : string; //quando eu coloco interrogação, a variável pode ser tanto string quanto undefined, para que eu não precise declarar string|null, por exemplo
}
const contato : Contato = {
    nome : "Gessy",
    telefone1 : "999999999",
    telefone2 : "9981765432"
}

//Type Assertion (eu falo pro typescript que a variável a partir daquele momento virou number)
const minhaIdade : any = 23;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();

const input = <HTMLInputElement>document.getElementById("numero1");
//const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);