import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Router }from '@angular/router'
import {SharedserviceService}from "./../sharedservice.service"



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrationObject:FormGroup;
  constructor(private router:Router,
    private service:SharedserviceService,private registrationFormBuilder:FormBuilder
) {  
  this.registrationObject = this.registrationFormBuilder.group({
    dasId: ['', [Validators.required]],
    candidateName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  totalExperience:['',[Validators.required]],
  age:['',[Validators.required]],
  relevantExperience:['',[Validators.required]],
  expectedLWD:['',[Validators.required]],
  location:['',[Validators.required]],
  skills:['',[Validators.required]],
  technology:['',[Validators.required]],
  maritalStatus:['',[Validators.required]]
  });

  }

  ngOnInit(): void {
  }
  collectRegister()
  {
    this.service.register().subscribe((reg)=>{console.log(reg)});
    this.router.navigate(["/login"]);
    console.log("Received Response");
  }
  save()
  {
    console.log("hello");
     if(this.registrationObject.invalid){
       return ;
     }
     console.log(this.registrationObject);
     this.service.saveData(this.registrationObject.value).subscribe((data)=>{console.log(data)});
  }

}

