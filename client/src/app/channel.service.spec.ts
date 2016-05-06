import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ChannelService } from './channel.service';

describe('Channel Service', () => {
  beforeEachProviders(() => [ChannelService]);

  it('should ...',
      inject([ChannelService], (service: ChannelService) => {
    expect(service).toBeTruthy();
  }));
});
