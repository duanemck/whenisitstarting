import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Channel} from './domain/channel';

@Injectable()
export class ChannelService {

  constructor(private http: Http) {

  }

  getChannels(bouquetCode: string): Promise<Channel[]> {
    return Promise.resolve([
      {
        name: "M-Net",
        number: "101",
        tag: "HDT",

        smallLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels/New%20Logos/Mnet_small.png",
        mediumLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels/NowLogos/Mnet_small_web.png",
        largeLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels/New%20Logos/MnetII_display.jpg",
        xlargeLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels/NowLogos/Mnet_small.png",

        description: "M-Net (Channel 101) is your channel to connect with the very best in television entertainment. Experience the latest blockbuster movies, gripping international series and highly acclaimed local shows in one magical destination, M-Net, Where Magic Lives.",
        url: "http://mnet.dstv.com/"
      },
      {
        name: "M-Net Movies Family",
        number: "105",
        tag: "MFH",
        smallLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels//New_logos/MMfamily_small.png",
        mediumLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels/NowLogos/MMfamily_small_web.png",
        largeLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels//New_logos/MMfamily_display.jpg",
        xlargeLogo: "http://cdn.dstv.com/www.dstv.com/dstvchannels/NowLogos/MMfamily_small.png",
        description: "Wholesome entertainment for all ages awaits with the family channel. A fun and enjoyable lineup featuring animation, musicals, fantasy and feel-good family movies will keep both kids and the young at heart engrossed all day.",
        url: "http://mnetmovies.dstv.com/"
      }
    ]);
  }
}

