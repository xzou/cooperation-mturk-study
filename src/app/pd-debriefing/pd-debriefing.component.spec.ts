/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDDebriefingComponent } from './pd-debriefing.component';

describe('PDDebriefingComponent', () => {
  let component: PDDebriefingComponent;
  let fixture: ComponentFixture<PDDebriefingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDDebriefingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDDebriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
