/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDGameOppComponent } from './pd-game-opp.component';

describe('PDGameOppComponent', () => {
  let component: PDGameOppComponent;
  let fixture: ComponentFixture<PDGameOppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDGameOppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDGameOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
