import { Component, OnInit } from '@angular/core';
import { SubHeader } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
  directives: [SubHeader] 
})
export class ScheduleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
