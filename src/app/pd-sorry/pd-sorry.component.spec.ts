/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDSorryComponent } from './pd-sorry.component';

describe('PDSorryComponent', () => {
  let component: PDSorryComponent;
  let fixture: ComponentFixture<PDSorryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDSorryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDSorryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
