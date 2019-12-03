import { Component, OnInit, Inject } from '@angular/core';
import { InstituicaoService } from '../instituicao.service';
import { Instituicao } from '../Instituicao';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { getDefaultUrl } from 'src/app/app.const';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-instituicao-list',
  templateUrl: './instituicao-list.component.html',
  styleUrls: ['./instituicao-list.component.css']
})
export class InstituicaoListComponent implements OnInit {

  displayedColumns: string[] = ['nomeFantasia', 'campus', 'editar_excluir'];

  listaInstituicao: any[];
  public formulario: FormGroup;
  message: string;
  public instituicao: Instituicao;

  constructor(
    private instituicaoService: InstituicaoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
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
}
