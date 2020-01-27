import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkCardComponent } from './dark-card.component';

describe('DarkCardComponent', () => {
  let component: DarkCardComponent;
  let fixture: ComponentFixture<DarkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
