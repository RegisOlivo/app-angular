import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}*/


/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'sobrenome', 'email', 'editar_excluir'];
  //dataSource = ELEMENT_DATA;

  listaPessoa: any[];

  constructor(
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.listarPessoa();
  }

  public listarPessoa() {
    this.pessoaService.getAll().subscribe(
      dados => {
        this.listaPessoa = dados;
        console.log(this.listaPessoa);
      }
    );

  }

  onDelete(id: String) {
    console.log(id);
    this.pessoaService.deletar(id).subscribe(() => {
      alert(' Deletado com Sucesso! ');
      this.listarPessoa();
    });
  }

}
