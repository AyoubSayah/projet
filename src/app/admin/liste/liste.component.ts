import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Nomenfant: string;
  Secritaire:string;
  Date: number;
Parent: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},
  { Nomenfant: 'aymen hedi',Secritaire:'mohamed hedi', Date: 12.00, Parent: 'ahmed hedi'},

  
  
 
];
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  displayedColumns: string[] = ['Nomenfant','Secritaire', 'Parent','Date'];
  dataSource = ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
