import { Component, OnInit } from '@angular/core';
import { InstituicaoService } from '../instituicao.service';
import { Instituicao } from '../Instituicao';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-instituicao-edit',
  templateUrl: './instituicao-edit.component.html',
  styleUrls: ['./instituicao-edit.component.css']
})
export class InstituicaoEditComponent implements OnInit {

  id;
  public formulario: FormGroup;
  private sub: any;
  message: string;
  public instituicao: Instituicao;

  constructor(
    private instituicaoService: InstituicaoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nomeFantasia: [null],
      cnpj: [null],
      campus: [null]
    });

    this.getById(this.id);
  }

  private getById(id: String){
    this.instituicaoService.getById(this.id).subscribe( (dados: Instituicao) =>{ this.instituicao = dados; });
  }

  get f() {
    return this.formulario.controls;
  }

  onSubmit(){
    this.instituicaoService.editar(this.id, this.f.nomeFantasia.value, this.f.cnpj.value, this.f.campus.value).subscribe(() => {
      this.router.navigate(['instituicao']);
    },
    (error) => {
      this.message = error;
    });
  }
}
