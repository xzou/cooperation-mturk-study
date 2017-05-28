/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDGameSelfComponent } from './pd-game-self.component';

describe('PDGameSelfComponent', () => {
  let component: PDGameSelfComponent;
  let fixture: ComponentFixture<PDGameSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDGameSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDGameSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
