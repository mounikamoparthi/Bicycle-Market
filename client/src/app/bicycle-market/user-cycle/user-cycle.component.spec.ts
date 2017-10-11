import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCycleComponent } from './user-cycle.component';

describe('UserCycleComponent', () => {
  let component: UserCycleComponent;
  let fixture: ComponentFixture<UserCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
