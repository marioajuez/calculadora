import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHyperComponent } from './table-hyper.component';

describe('TableHyperComponent', () => {
  let component: TableHyperComponent;
  let fixture: ComponentFixture<TableHyperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHyperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
