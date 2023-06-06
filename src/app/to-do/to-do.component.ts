import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { ngxCsv } from 'ngx-csv';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';




interface User {
  age: number;
  candidateName: string;
  cardStatus: string;
  dasId: number;
  expectedLWD: Date;
  location: string;
  martialStatus: string;
  password: string
  relevantExperience: number;
  skills: string;
  technology: string;
  totalExperience: string;
  dueDate: Date;
}
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {


  constructor(private service: SharedserviceService,
    private dialogRef: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getBackLog();
    this.commentButton();
  }
  searchText: string = '';
  commentText: string = '';
  exportCSVData: any[] = [];
  exportCSVText: string = '';
  name: string = '';
  alert: boolean = false;
  editText: string = '';

  backlog: User[] = [];
  initialScreening: User[] = [];
  onHold: User[] = []
  inProgress: User[] = [];
  managerDiscussion: User[] = [];
  selected: User[] = [];
  rejected: User[] = [];

  Comments: any = [];
  searchResult: any = [];
  popupState: any = {};
  toggle: any = false;
  logoutText: any = '';
  msgComment: any = [];

  name1: string = '';

  searchData() {
    this.service.enter(this.searchText).subscribe((data: any) => {
      let newArr: any = (data || []).map((data: any) => {
        let mdata = (data || '').split(",");
        return {
          dasId: mdata[0],
          candidateName: mdata[2],
          cardStatus: mdata[12] || null,
          expectedLWD: mdata[3],
          location: mdata[4],
          technology: mdata[9],
          dueDate: mdata[13] || null
        }
      })
      this.searchFunc(newArr);
    });
  }
  getBackLog() {
    this.service.getBgLog().subscribe((data: any) => {
      this.exportCSVData = data;
      this.searchFunc(data);
    }
    );
  }

  searchFunc(data: any) {
    this.backlog = (data || []).filter((data: any) => data.cardStatus == "backlog");
    this.initialScreening = (data || []).filter((data: any) => data.cardStatus == "initialScreening");
    this.onHold = (data || []).filter((data: any) => data.cardStatus == "onHold");
    this.managerDiscussion = (data || []).filter((data: any) => data.cardStatus == "managerDiscussion");
    this.rejected = (data || []).filter((data: any) => data.cardStatus == "rejected");
    this.inProgress = (data || []).filter((data: any) => data.cardStatus == "inProgress");
    this.selected = (data || []).filter((data: any) => data.cardStatus == "selected");
  }

  logout() {
    this.router.navigate(['/']);
  }
  closeAlert() {
    this.alert = false;
  }

  candidateName() {
    if (this.name === "") {
      return;
    }
    this.name = '';
    console.log("hello");
  }

  buttonText(val: any) {
    console.log(val)
    this.popupState = val;
    this.toggle = true;
  }
  closeoverLay() {
    console.log("Iam coming insied 93")
    this.toggle = false;
    this.popupState = {};
  }
  data1: any = '';
  deleteTask() {
    this.service.deleteCard().subscribe();
  }
  commentField() {
    if (this.commentText.length > 0) {
      this.service.commentSection(this.commentText).subscribe((data) => console.log(data, "chacking the comment 71"));
    }
    this.commentButton();
  }


  drop(cardName: string, event: CdkDragDrop<User[]>): void {
    const dragItem = event.previousContainer;
    const addItem = event.container;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    const index = event.previousIndex;
  }

  testing(val: number, type: any) {
    this.update(val, type);
  }

  update(user: number, cardName: string) {
    this.service.updateDragAndDrop(user, cardName).subscribe((data) => { console.log(data) });

  }
  exportCSV() {
    new ngxCsv(this.exportCSVData, "registerlogin");
  }

  openButton() {
    this.dialogRef.open(PopupComponent);
  }

  commentButton() {
    this.service.commentSectionToGetData().subscribe((Comments) => {
      this.msgComment = Comments;
      // console.log(Comments, "))))))");
    });
  }

  dragItem() {
  }

  editCandidate() {
    this.router.navigate(["/registration"]);
    this.service.saveData(this.editText).subscribe((data) => { console.log(data) });

  }
}
