/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdGenderComponent } from './pd-gender.component';

describe('PdGenderComponent', () => {
  let component: PdGenderComponent;
  let fixture: ComponentFixture<PdGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
