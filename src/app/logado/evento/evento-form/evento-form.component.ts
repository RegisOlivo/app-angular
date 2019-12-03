import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  edicao: string;
  excluir: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', edicao: '', excluir: ''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', edicao: '', excluir: ''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', edicao: '', excluir: ''},
];

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edicao', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
}
