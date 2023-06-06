import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private singleUser = "http://localhost:8080/single/{dasId}";
  private registerUrl = 'http://localhost:8080/Registration';
  private postUrl = 'http://localhost:8080/register';
  private updateSingleUserUrl = 'http://localhost:8080/update/{dasId}';
  private updateUrl = 'http://localhost:8080/update';
  private deleteUrl = 'http://localhost:8080/delete/{dasId}';
  private searchUrl = 'http://localhost:8080/search';
  private toSeeCardStatus = 'http://localhost:8080/cardStatus/';
  private commentUrl = 'http://localhost:8080/comments';
  private getCommentUrl = 'http://localhost:8080/getComments';
  private managerUrl = 'http://localhost:8080/managers';
  private managerAllData = 'http://localhost:8080/getManager';



  constructor(private http: HttpClient) { }
  data: any

  register() {
    return this.http.get(this.registerUrl);
  }
  saveData(registrationData: any) {
    return this.http.post(this.postUrl, registrationData);
  }

  enter(searchText: string) {
    let link = `${this.searchUrl}?query=${searchText}`;
    return this.http.get(link);
  }

  deleteCard() {
    return this.http.delete(this.deleteUrl);
  }

  commentSection(commentText: string) {
    return this.http.post(this.commentUrl, { "userComment": commentText });
  }
  commentSectionToGetData() {
    return this.http.get(this.getCommentUrl);
  }
  getBgLog() {
    return this.http.get(this.registerUrl);
  }
  enterCSVData() {
    return this.http.get(this.registerUrl);
  }

  updateDragAndDrop(data: any, data2: any) {
    let a: any = `${this.toSeeCardStatus}${data}`;
    return this.http.put(a, { cardStatus: data2 });
  }

  loginData(data: any) {
    return this.http.post(this.managerUrl, data);
  }



}

