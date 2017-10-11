import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleMarketComponent } from './bicycle-market.component';

describe('BicycleMarketComponent', () => {
  let component: BicycleMarketComponent;
  let fixture: ComponentFixture<BicycleMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
