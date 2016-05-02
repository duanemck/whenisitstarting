import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ScheduleComponent} from './schedule'
import {SearchComponent} from './search'
import {ProfileComponent} from './profile'

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'
import {MdButton} from '@angular2-material/button'
import {MdToolbar} from '@angular2-material/toolbar'
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  moduleId: __moduleName,
  selector: 'when-is-it-starting',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdButton, MD_LIST_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path : '/schedule', name : 'Schedule', component : ScheduleComponent, useAsDefault : true},
  {path : '/search', name : 'Search', component : SearchComponent},
  {path : '/settings', name : 'Profile', component : ProfileComponent}
])
export class WhenIsItStartingApp {

}
