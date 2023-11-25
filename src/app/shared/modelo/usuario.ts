export class Usuario {
  id: number
  email:string
  nome: string;
  endereco: string;
  senha:string
  idade: number;
  religiao: string;
  ideologiaPolitica: string;
  profissao: string;
  numeroFilhos: number;
  rendaFamiliar: number;
  grauFormacao: string;

  constructor(id:number,email:string, nome: string, endereco: string, senha:string, idade: number, religiao: string, ideologiaPolitica: string, profissao: string, numeroFilhos: number, rendaFamiliar: number, grauFormacao: string) {
    this.id = id;
    this.email = email
    this.nome = nome;
    this.endereco = endereco;
    this.senha = senha;
    this.idade = idade;
    this.religiao = religiao;
    this.ideologiaPolitica = ideologiaPolitica;
    this.profissao = profissao;
    this.numeroFilhos = numeroFilhos;
    this.rendaFamiliar = rendaFamiliar;
    this.grauFormacao = grauFormacao;
  }

  toString(): string {
    return `Nome: ${this.nome}\nEndereço: ${this.endereco}\nIdade: ${this.idade}\nReligião: ${this.religiao}\nIdeologia Política: ${this.ideologiaPolitica}\nProfissão: ${this.profissao}\nNúmero de Filhos: ${this.numeroFilhos}\nRenda Familiar: ${this.rendaFamiliar}\nGrau de Formação Escolar: ${this.grauFormacao}`;
  }
}

// Exemplo de uso da classe:

