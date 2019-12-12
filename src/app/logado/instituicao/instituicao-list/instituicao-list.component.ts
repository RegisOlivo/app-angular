import { Component, OnInit, Inject } from '@angular/core';
import { InstituicaoService } from '../instituicao.service';
import { Instituicao } from '../Instituicao';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { getDefaultUrl } from 'src/app/app.const';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  nomeFantasia: string;
  cnpj: string;
  campus: string;
}

@Component({
  selector: 'app-instituicao-list',
  templateUrl: './instituicao-list.component.html',
  styleUrls: ['./instituicao-list.component.css']
})
export class InstituicaoListComponent implements OnInit {

  displayedColumns: string[] = ['nomeFantasia', 'campus', 'editar_excluir'];

  id: string;
  nomeFantasia: string;
  cnpj: string;
  campus: string;
  listaInstituicao: any[];
  public formulario: FormGroup;
  message: string;
  public instituicao: Instituicao;

  constructor(
    private instituicaoService: InstituicaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listarInstituicao();
  }

  public listarInstituicao() {
    this.instituicaoService.getAll().subscribe(
      dados => {
        this.listaInstituicao = dados;
        console.log(this.listaInstituicao);
      }
    );

  }

  onDelete(id: String) {
    console.log(id);
    this.instituicaoService.deletar(id).subscribe(() => {
      alert(' Deletado com Sucesso! ');
      this.listarInstituicao();
    });
  }

  openDialog(id: string, nomeFantasia: string, cnpj: string, campus: string): void {
    const dialogRef = this.dialog.open(EditarInstituicaoDialog, {
      width: '250px',
      data: {id: id, nomeFantasia: nomeFantasia, cnpj: cnpj, campus:campus}
    });
    console.log(id, nomeFantasia, cnpj, campus);
  }
}

@Component({
  selector: 'app-editar-instituicao-dialog',
  templateUrl: './editar-instituicao-dialog.html',
})
export class EditarInstituicaoDialog {

  public instituicao: Instituicao;
  message: string;
  listaInstituicao: any[];

  constructor(
    private instituicaoService: InstituicaoService,
    private router: Router,
    public dialogRef: MatDialogRef<EditarInstituicaoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    public listarInstituicao() {
      this.instituicaoService.getAll().subscribe(
        dados => {
          this.listaInstituicao = dados;
          console.log(this.listaInstituicao);
        }
      );

    }

    onEditar(id: string, nomeFantasia: string, cnpj: string, campus: string) {
      this.instituicaoService.editar(id, nomeFantasia, cnpj, campus).subscribe(() => {
        alert(' Deletado com Sucesso! ');
        this.dialogRef.close();
        this.listarInstituicao();
      });
    }

}
