import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightToolbarComponent } from './light-toolbar.component';

describe('LightToolbarComponent', () => {
  let component: LightToolbarComponent;
  let fixture: ComponentFixture<LightToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
