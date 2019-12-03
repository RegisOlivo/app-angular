import { Identifiers } from '@angular/compiler';

export class Instituicao {
  public id: string;
  nomeFantasia: string;
  cnpj: string;
  campus: string;

  public Instituicao(id){
    this.id = id;
  }
}
