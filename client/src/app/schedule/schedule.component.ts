import { Component, OnInit } from '@angular/core';
import { SubHeader } from '../shared';

import { Bouquet } from '../domain/bouquet';
import { BouquetService } from '../bouquet.service';

import { Channel } from '../domain/channel';
import { ChannelService } from '../channel.service';

@Component({
  moduleId: module.id,
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
  directives: [SubHeader],
  providers : [BouquetService, ChannelService]
})
export class ScheduleComponent implements OnInit {

  constructor(private _bouquetService : BouquetService,
            private _channelService : ChannelService) {
    
  }

  bouquets : Bouquet[];
  selectedBouquet : Bouquet;
  
  channels : Channel[];
  selectedChannel : Channel;

  ngOnInit() {
    this._bouquetService.getBouquets().then(bouquets => this.bouquets = bouquets);
  }
  
  onBouquetSelected(){
    this._channelService.getChannels(this.selectedBouquet.code).then(channels => this.channels = channels);
  }   
}
