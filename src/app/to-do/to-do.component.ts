import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
ngOnInit(): void {
    
}
  backlog = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  initialScreening = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  onHold=[
    "onHold1","ong1"
  ]
  inProgress=['inp1','inp2'];
  managerDiscussion=["md1","md2"];

  selected=['s1',"s2"];
  rejected=['r1','r2'];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }}
