import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfcalComponent } from './selfcal.component';

describe('SelfcalComponent', () => {
  let component: SelfcalComponent;
  let fixture: ComponentFixture<SelfcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfcalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
