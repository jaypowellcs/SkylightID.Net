import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkylightCalComponent } from './skylight.cal.component';

describe('SkylightCalComponent', () => {
  let component: SkylightCalComponent;
  let fixture: ComponentFixture<SkylightCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkylightCalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkylightCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
