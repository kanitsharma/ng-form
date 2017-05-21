import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  users = [];
  user = {};

  store(data){
    this.user = {
      username : data.pusername ,
      email : data.email ,
      password : data.newpass
    }
    if(localStorage.getItem('users')){
      this.users = JSON.parse(localStorage.getItem('users'));
      this.users.push(this.user);
      localStorage.setItem('users',(JSON.stringify(this.users)));
      console.log(localStorage.getItem('users'));
    }
    else{
      this.users.push(this.user);
      localStorage.setItem('users',JSON.stringify(this.users));
      console.log("data stored");
    }
  }
  public getdata(data){
    var counter : any = 0;
    if(!localStorage.getItem('users')){
      alert('invalid Email or password');
    }
    else{
      this.users = JSON.parse(localStorage.getItem('users'));
      this.users.map( user => {
        if(user.username == data.username && user.password == data.password){
          alert(`Welcome ${user.username}`);
          counter ++;
        }
      });
      if(counter == 0){
        alert('invalid email or password');
      }
    }
  }
}
