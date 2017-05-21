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

  constructor(private formBuilder: FormBuilder,private lservice : LocalstorageService) {

  }

  ngOnInit() {
  this.registerForm = this.formBuilder.group({
   pusername: ['', Validators.required],
   email: ['', Validators.required],
   newpass: ['', Validators.required],
  })
  this.loginForm = this.formBuilder.group({
   username: ['', Validators.required],
   password: ['', Validators.required],
  })
  }

  submit(data){
    this.submitted=true;
    this.lservice.store(data);
    alert("Welcome you can now log in");
  }
  login(data){
    this.submitted=true;
    this.lservice.getdata(data);
  }

}
