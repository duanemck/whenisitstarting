import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {ScheduleComponent} from './schedule'
import {SearchComponent} from './search'
import {ProfileComponent} from './profile'

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'when-is-it-starting',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher, ROUTER_PROVIDERS ],
  pipes: []
})
@RouteConfig([
  { path: '/schedule', name: 'Schedule', component: ScheduleComponent, useAsDefault: true },
  { path: '/search', name: 'Search', component: SearchComponent },
  { path: '/settings', name: 'Profile', component: ProfileComponent }
])
export class WhenIsItStartingApp {
  constructor() {
    console.log('Hello world');
  }
}
