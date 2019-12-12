import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Evento } from '../Evento';
import { EventoService } from '../evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { element } from 'protractor';
import { Instituicao } from '../../instituicao/Instituicao';
import { InstituicaoService } from '../../instituicao/instituicao.service';

export interface DialogData {
  id: string;
  descricao: string;
  atividades: any[];
}

export interface DialogDataEditar {
  id: string;
  dataInicio: string;
  dataTermino: string;
  descricao: string;
  local: string;
  atividades: any[];
}

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  displayedColumns: string[] = ['dataInicio', 'dataTermino', 'descricao', 'local', 'addatv', 'atividades', 'editar', 'excluir'];

  id: string;
  dataInicio: string;
  dataTermino: string;
  descricao: string;
  local: string;
  listaEvento: any[];
  listaInstituicao: any[];
  public formulario: FormGroup;
  message: string;
  public evento: Evento;
  public instituicao: Instituicao;
  atividades: any[];

  constructor(
    private eventoService: EventoService,
    private instiuicaoService: InstituicaoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.listarEvento();
    this.listarInstituicao();
  }

  public listarEvento() {
    this.eventoService.getAll().subscribe(
      dados => {
        this.listaEvento = dados;
        console.log(this.listaEvento);
      }
    );
  }

  public listarInstituicao(){
    this.instiuicaoService.getAll().subscribe(
      dados => {
        this.listaInstituicao = dados;
        console.log(this.listaInstituicao);
      }
    );
  }

  onDelete(id: String) {
    console.log(id);
    this.eventoService.deletar(id).subscribe(() => {
      alert(' Deletado com Sucesso! ');
      this.listarEvento();
    });
  }

  openDialog(id: string, descricao: string, atividades: any[]): void {
    const dialogRef = this.dialog.open(ListaAtividadesDialog, {
      data: {id: id, descricao: descricao, atividades: atividades}
    });
    console.log(id, descricao, atividades);
  }

  openADD(id: string, descricao: string, atividades: any[]): void {
    const dialogRef = this.dialog.open(ADDAtividadesDialog, {
      data: {id: id, descricao: descricao, atividades: atividades}
    });
    console.log(id, descricao, atividades);
  }


  openEditar(id: string, dataInicio: string, dataTermino: string, descricao: string, local: string, atividades: any[]): void {
    const dialogRef = this.dialog.open(ListaEditarDialog, {
      width: '250px',
      data: {id: id, dataInicio: dataInicio, dataTermino: dataTermino, descricao: descricao, local: local, atividades: atividades}
    });
    console.log(id, dataInicio, dataTermino, descricao, local, atividades);
  }
}

@Component({
  selector: 'app-lista-atividades-dialog',
  templateUrl: './lista-atividades-dialog.html',
})
export class ListaAtividadesDialog {

  constructor(
    private eventoService: EventoService,
    public dialogRef: MatDialogRef<ListaAtividadesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(id: String) {
    console.log(id);
    this.eventoService.deletarAtv(id).subscribe(() => {
      alert(' Deletado com Sucesso! ');
    });
  }

}


@Component({
  selector: 'app-lista-editar-dialog',
  templateUrl: './lista-editar-dialog.html',
})
export class ListaEditarDialog {

  public evento: Evento;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    public dialogRef: MatDialogRef<ListaEditarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataEditar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditar(id: string, dataInicio: string, dataTermino: string, descricao: string, local: string) {
    this.eventoService.editar(id, dataInicio, dataTermino, descricao, local).subscribe(() => {
      alert(' Deletado com Sucesso! ');
      this.dialogRef.close();
    });
  }

}

@Component({
  selector: 'app-add-atividades-dialog',
  templateUrl: './add-atividades-dialog.html',
})
export class ADDAtividadesDialog implements OnInit{

  id;
  public evento: Evento;
  formulario: FormGroup;
  message: string;

  constructor(
    private eventoService: EventoService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<ListaEditarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataEditar) {}

    ngOnInit() {
      this.formulario = this.formBuilder.group({
        descricao: [null],
        valor: [null],
        evento: [null]
    });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    this.eventoService.cadastrarAtividade(this.f.descricao.value, this.f.valor.value, this.f.evento.value).subscribe(
      () =>{
      },
      (error) => {
        this.message = error;
      }
    );
    console.log(this.formulario.value);
    console.log(JSON.stringify(this.formulario.value));

  }

  get f() {
    return this.formulario.controls;
  }

}


