import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventService, Event } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'upvote',
  styleUrls: ['upvote.component.css'],
  template:`
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <!-- for setting the color -->
          <i class="glyphicon glyphicon-heart"
            [style.color]="iconColor"></i>
            
            
          <!-- use this for changing the icon -->
          <!--<i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
          <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>-->
        </div>
        <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
})
export class UpvoteComponent implements OnInit {
  @Output() vote = new EventEmitter();
  @Input() count : number;
  
  // use this for changing the color
  @Input() set voted(val){
    this.iconColor = val ? 'red' : 'white';
  }
  iconColor : string;

  // use this for different icons
  // @Input() voted: boolean;

  constructor() {}
  
  ngOnInit() {
  }
  
  onClick() {
    this.vote.emit({});
  }
}