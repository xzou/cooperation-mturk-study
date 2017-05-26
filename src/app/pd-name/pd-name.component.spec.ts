/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDNameComponent } from './pd-name.component';

describe('PDNameComponent', () => {
  let component: PDNameComponent;
  let fixture: ComponentFixture<PDNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
