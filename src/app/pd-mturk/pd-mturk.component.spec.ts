/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDMturkComponent } from './pd-mturk.component';

describe('PDMturkComponent', () => {
  let component: PDMturkComponent;
  let fixture: ComponentFixture<PDMturkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDMturkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDMturkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
