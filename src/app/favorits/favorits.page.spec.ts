import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritsPage } from './favorits.page';

describe('FavoritsPage', () => {
  let component: FavoritsPage;
  let fixture: ComponentFixture<FavoritsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
