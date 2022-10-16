import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private registerUrl='http://localhost:8080/Registration';
  private url='http://localhost:8080/register';

  constructor(private http:HttpClient) {}
  data:any
  
  register()
  {
    return this.http.get(this.registerUrl);
  }
 saveData(registrationData:any)
 {
  return this.http.post(this.url,registrationData);
 }



}

