import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesTableComponent } from './styles-table.component';

describe('StylesTableComponent', () => {
  let component: StylesTableComponent;
  let fixture: ComponentFixture<StylesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
