import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Nomenfant: string;
  nomparent:string;
  temp: number;
Classe: string;
  localisation:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  { Nomenfant: 'aymen hedi',nomparent:'mohamed hedi', temp: 56, Classe: 'H',localisation:4},
  
  
 
];
@Component({
  selector: 'app-liste-deseleves',
  templateUrl: './liste-deseleves.component.html',
  styleUrls: ['./liste-deseleves.component.scss']
})
export class ListeDeselevesComponent implements OnInit {
  displayedColumns: string[] = ['Nomenfant','nomparent', 'Classe','status'];
  dataSource = ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
