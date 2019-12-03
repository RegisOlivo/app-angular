import { Identifiers } from '@angular/compiler';

export class Evento {
  public id: string;
  dataInicio: Date;
  dataTermino: Date;
  descricao: String;
  local: String;
  //IDinstituicao: ?????????????

  public Evento(id){
    this.id = id;
  }
}
