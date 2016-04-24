import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';
import { Sorter } from '../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../shared/directives/sortby.directive';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';

@Component({ 
  selector: 'customers', 
  providers: [DataService],
  templateUrl: 'app/customers/customers.component.html',
  directives: [RouterLink, FilterTextboxComponent, SortByDirective],
  pipes: [CapitalizePipe, TrimPipe]
})
export class CustomersComponent {

  title: string;
  filterText: string;
  listDisplayModeEnabled: boolean;
  channels: any[] = [];
  filteredChannels: any[] = [];
  sorter: Sorter;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Channels';
    this.filterText = 'Filter Channels:';
    this.listDisplayModeEnabled = false;

    this.dataService.getChannels()
        .subscribe((channels:any[]) => {
          this.channels = this.filteredChannels = channels;
        });

    this.sorter = new Sorter();
  }

  changeDisplayMode(mode: string) {
      this.listDisplayModeEnabled = (mode === 'List');
  }

  filterChanged(data: string) {
    if (data && this.channels) {
        data = data.toUpperCase();
        let props = ['channelName', 'channelNumber', 'channelTag'];
        let filtered = this.channels.filter(item => {
            let match = false;
            for (let prop of props) {
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredChannels = filtered;
    }
    else {
      this.filteredChannels = this.channels;
    }
  }

  deleteCustomer(id: number) {

  }

  sort(prop: string) {
      //Check for complex type such as 'state.name'
      if (prop && prop.indexOf('.')) {
        
      }
      this.sorter.sort(this.filteredChannels, prop);
  }

}
