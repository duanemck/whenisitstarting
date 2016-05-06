import { Component, OnInit } from '@angular/core';
import { SubHeader } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [SubHeader] 
})
export class SearchComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
