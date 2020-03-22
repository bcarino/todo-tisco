import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDialogComponent } from './colors-dialog.component';

describe('ColorsDialogComponent', () => {
  let component: ColorsDialogComponent;
  let fixture: ComponentFixture<ColorsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
