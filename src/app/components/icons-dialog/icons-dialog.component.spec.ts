import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDialogComponent } from './icons-dialog.component';

describe('IconsDialogComponent', () => {
  let component: IconsDialogComponent;
  let fixture: ComponentFixture<IconsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
