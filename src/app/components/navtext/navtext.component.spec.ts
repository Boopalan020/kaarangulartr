import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtextComponent } from './navtext.component';

describe('NavtextComponent', () => {
  let component: NavtextComponent;
  let fixture: ComponentFixture<NavtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
