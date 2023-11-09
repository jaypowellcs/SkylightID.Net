import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurbcalComponent } from './curbcal.component';

describe('CurbcalComponent', () => {
  let component: CurbcalComponent;
  let fixture: ComponentFixture<CurbcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurbcalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurbcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
