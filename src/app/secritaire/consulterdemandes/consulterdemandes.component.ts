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
  selector: 'app-consulterdemandes',
  templateUrl: './consulterdemandes.component.html',
  styleUrls: ['./consulterdemandes.component.scss']
})
export class ConsulterdemandesComponent implements OnInit {
  displayedColumns: string[] = ['Nomenfant','temp', 'Classe','localisation','actions'];
  dataSource = ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
