/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDFindingOppComponent } from './pd-finding-opp.component';

describe('PDFindingOppComponent', () => {
  let component: PDFindingOppComponent;
  let fixture: ComponentFixture<PDFindingOppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFindingOppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFindingOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
