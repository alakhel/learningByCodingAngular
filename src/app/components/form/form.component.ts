import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  user ={
    name:'',
    email:''
  }

  ngOnInit(): void {
  }
  creatUser():void{
    console.log('bip', this.user.name , this.user.email)
  }

}
