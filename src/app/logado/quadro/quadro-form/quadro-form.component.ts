import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadro-form',
  templateUrl: './quadro-form.component.html',
  styleUrls: ['./quadro-form.component.css']
})
export class QuadroFormComponent implements OnInit {

  url = "http://lorempixel.com/400/200"

  conteudoSalvo;
  conteudoAtual;

  nome = "";

  constructor() { }

  ngOnInit() {
  }

  mudouValorSpinner(value){
    alert(value);
  }

  cliqueBotao(){
    alert("Clicou no botao")
  }

  digitou(param){
    console.log(param);
    this.conteudoAtual = param.target.value;
  }

  salvarConteudo(valor: String){
    this.conteudoSalvo = valor;
  }

  sobreSpan = false;

  passou(){
    this.sobreSpan = !this.sobreSpan;
  }

}
