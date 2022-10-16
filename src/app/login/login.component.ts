import { Component, Input, OnInit } from '@angular/core';
import {Router }from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
 
   dasId:number=0;
   emailId:string='';
   password:string='';

  ngOnInit(): void {
  }

  onRegisterClick():void
  {
      this.router.navigate(['/todo']);
      console.log("registerClicked");
  }

}
