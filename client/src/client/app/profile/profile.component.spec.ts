import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ProfileComponent} from './profile.component';

describe('Profile Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ProfileComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
