import { Identifiers } from '@angular/compiler';

export class Pessoa {
  public id: string;
  nome: string;
  sobrenome: string;
  email: string;
  cpf: number;
  login: string;
  password: string;

  public Pessoa(id){
    this.id = id;
  }
}
