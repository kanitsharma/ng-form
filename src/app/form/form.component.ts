import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {LocalstorageService} from '../localstorage.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [LocalstorageService]
})
export class FormComponent implements OnInit {

  response = 1;
  registerForm: FormGroup;
  loginForm : FormGroup;
  submitted : boolean = false;
  gg = 0;
  pwelcome:string = "";

  constructor(private formBuilder: FormBuilder,private lservice : LocalstorageService) {

  }

  ngOnInit() {
  this.registerForm = this.formBuilder.group({
   pusername: ['', Validators.required],
   email: ['', Validators.required],
   newpass: ['', Validators.required],
   human: [false,Validators.required],
  })
  this.loginForm = this.formBuilder.group({
   username: ['', Validators.required],
   password: ['', Validators.required],
   checkbox: [true, Validators.required],
  })
  }

  submit(data){
    this.submitted=true;
    this.lservice.store(data);
    this.gg = 1;
  }
  login(data){
    this.submitted=true;
    this.lservice.getdata(data);
    this.welcome(data.username);
    this.gg = 2;
  }
  welcome(data){
    this.pwelcome = data;
  }
  skip(){
    this.gg = 1;
  }
  previous(){
    this.gg--;
  }

}
