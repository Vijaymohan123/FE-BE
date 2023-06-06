import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginObject: FormGroup;
  //  loginText:string='';

  constructor(private router: Router,
    private service: SharedserviceService, private loginFormBuilder: FormBuilder) {
    this.loginObject = this.loginFormBuilder.group({
      id: [''],
      managerName: ['', [Validators.required]],
      password: ['', [Validators.required]]

    })

  }


  ngOnInit(): void {
  }

  onRegisterClick() {
    if (this.loginObject.invalid) {
      return;
    }
    let a = { ...this.loginObject.value }
    this.router.navigate(['/todo']);
    this.service.loginData(a).subscribe((a) => { console.log(a) });

  }

}
