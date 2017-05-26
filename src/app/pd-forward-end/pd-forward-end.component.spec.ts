/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDForwardEndComponent } from './pd-forward-end.component';

describe('PDForwardEndComponent', () => {
  let component: PDForwardEndComponent;
  let fixture: ComponentFixture<PDForwardEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDForwardEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDForwardEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
