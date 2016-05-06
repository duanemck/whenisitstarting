import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BouquetService } from './bouquet.service';

describe('BouquetService Service', () => {
  beforeEachProviders(() => [BouquetService]);

  it('should ...',
      inject([BouquetService], (service: BouquetService) => {
    expect(service).toBeTruthy();
  }));
});
