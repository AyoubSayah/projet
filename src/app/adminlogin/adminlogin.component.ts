import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

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