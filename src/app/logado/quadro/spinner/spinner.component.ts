import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input('valorInicial')
  public value = 0;

  @Output('mudou')
  public change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  diminuir(){
    this.value--;
    this.change.emit(this.value);
  }

  aumentar(){
    this.value++;
    this.change.emit(this.value);
  }
}
