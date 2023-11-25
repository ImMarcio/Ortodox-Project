export class Admin{
  id: number
  email:string
  nome: string;

  senha:string

  constructor(id:number, email:string,  nome:string,  senha:string) {
    this.id = id;
    this.email = email;
    this.nome = nome;
    this.senha = senha
  }
}
