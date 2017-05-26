/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdGameComponent } from './pd-game.component';

describe('PdGameComponent', () => {
  let component: PdGameComponent;
  let fixture: ComponentFixture<PdGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
