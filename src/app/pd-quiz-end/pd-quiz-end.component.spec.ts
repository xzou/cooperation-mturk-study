/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdQuizEndComponent } from './pd-quiz-end.component';

describe('PdQuizEndComponent', () => {
  let component: PdQuizEndComponent;
  let fixture: ComponentFixture<PdQuizEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdQuizEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdQuizEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
