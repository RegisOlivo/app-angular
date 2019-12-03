import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InstituicaoService } from '../instituicao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instituicao-form',
  templateUrl: './instituicao-form.component.html',
  styleUrls: ['./instituicao-form.component.css']
})
export class InstituicaoFormComponent implements OnInit {

  formulario: FormGroup;

  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private instituicaoService: InstituicaoService,
    private route: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nomeFantasia: [null],
      cnpj: [null],
      campus: [null]
  });
  }

  onSubmit(){
    this.instituicaoService.cadastrar(this.f.nomeFantasia.value, this.f.cnpj.value, this.f.campus.value).subscribe(
      () =>{
        this.route.navigate(['logado/instituicao']);
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
