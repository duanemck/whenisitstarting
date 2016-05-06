import { Component, OnInit } from '@angular/core';
import { SubHeader } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [SubHeader] 
})
export class ProfileComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
