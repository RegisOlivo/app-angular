import { Component, OnInit } from '@angular/core';
import { QuadroService } from '../quadro.service';
import { Quadro } from '../quadro.model';
 
@Component({
  selector: 'app-quadro-list',
  templateUrl: './quadro-list.component.html',
  styleUrls: ['./quadro-list.component.css']
})
export class QuadroListComponent implements OnInit {
  public quadros: Quadro[];
 
  constructor(private quadroService: QuadroService) { }
 
  ngOnInit() {
    this.getQuadros();
  }
 
  private getQuadros(): void {
    this.quadroService.getAll().subscribe(
      (data: Quadro[]) => this.quadros = data,
      (error) => console.log(error),
      () => console.log(this.quadros)
    );
  }
}