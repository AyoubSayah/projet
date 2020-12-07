import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  constructor() { }
Educanet=true
form:FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
email:new FormControl('',[Validators.required,Validators.email]),
password:new  FormControl('',[Validators.required,Validators.minLength(6)])
    })
    setTimeout(()=>{this.Educanet=false},2700)
  }

}
