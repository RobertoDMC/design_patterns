import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkToolbarComponent } from './dark-toolbar.component';

describe('DarkToolbarComponent', () => {
  let component: DarkToolbarComponent;
  let fixture: ComponentFixture<DarkToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
