import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepsPage } from './sleeps.page';

describe('SleepsPage', () => {
  let component: SleepsPage;
  let fixture: ComponentFixture<SleepsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
