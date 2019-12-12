import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InstituicaoService } from '../../instituicao/instituicao.service';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  formulario: FormGroup;

  message: string;

  constructor(private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private route: Router
    ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      email: [null],
      cpf: [null],
      login: [null],
      password: [null]
  });
  }

  onSubmit(){
    this.pessoaService.cadastrar(this.f.nome.value, this.f.sobrenome.value, this.f.email.value, this.f.cpf.value, this.f.login.value, this.f.password.value).subscribe(
      () =>{
        this.route.navigate(['logado/pessoa']);
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
