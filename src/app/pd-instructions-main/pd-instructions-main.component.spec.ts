/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDInstructionsMainComponent } from './pd-instructions-main.component';

describe('PDInstructionsMainComponent', () => {
  let component: PDInstructionsMainComponent;
  let fixture: ComponentFixture<PDInstructionsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDInstructionsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDInstructionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
