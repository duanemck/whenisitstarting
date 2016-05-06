import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Bouquet} from './domain/bouquet';

@Injectable()
export class BouquetService {

  constructor(private http: Http) {

  }

  getBouquets() : Promise<Bouquet[]> {
    return Promise.resolve([
      {
        name: 'DStv Premium',
        code: 'PRM'
      },
      {
        name: 'DStv Family',
        code: 'COFAMKU'
      },
      {
        name: 'DStv Extra',
        code: 'XTRKU'
      },
      {
        name: 'DStv Access',
        code: 'LITEKU'
      },
      {
        name: 'DStv Compact',
        code: 'COMPKU'
      },
      {
        name: 'DStv Portuguesa',
        code: 'PORTKU'
      },
      {
        name: 'DStv Easyview',
        code: 'EASYKU'
      },
      {
        name: 'M-Net Terrestrial',
        code: 'TER'
      },
      {
        name: 'DStv Mobile',
        code: 'MOBILE'
      },
      {
        name: 'DStv Indian',
        code: 'ASIA3KU'
      },
      {
        name: 'DStv Mobile DVBh',
        code: 'DVBHMOBILE'
      }
    ]);
  }

}
