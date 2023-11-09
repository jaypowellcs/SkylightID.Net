import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyselfComponent } from './identifyself.component';

describe('IdentifyselfComponent', () => {
  let component: IdentifyselfComponent;
  let fixture: ComponentFixture<IdentifyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentifyselfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentifyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
