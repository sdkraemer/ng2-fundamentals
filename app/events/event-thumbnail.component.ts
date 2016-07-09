import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';


@Component({
  selector: 'event-thumbnail',
  template:`
<div class="well hoverwell thumbnail" [routerLink]="['Event', {id: event.id}]">
  <h2>{{event.name}}</h2>
  <span>Date:</span>
  <span>{{event.date}}</span><br>
  <span>Time:</span>
  <span>{{event.time}}</span><br>
  <span>Price:</span>
  <!-- we add the price pipe in the pipes section -->
  <span>{{event.price | currency:'USD':true}}</span><br>
  <span>Location:</span>
  <span>{{event.location.address}}</span>
  <span>&nbsp;</span>
  <span>{{event.location.city}}, {{event.location.country}}</span>
</div>
  `,
  directives: [RouterLink]
})
export class EventThumbnailComponent {
  @Input() event: any;
}