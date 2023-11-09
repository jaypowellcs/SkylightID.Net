import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifydeckComponent } from './identifydeck.component';

describe('IdentifydeckComponent', () => {
  let component: IdentifydeckComponent;
  let fixture: ComponentFixture<IdentifydeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentifydeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentifydeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
