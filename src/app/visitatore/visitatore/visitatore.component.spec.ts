import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitatoreComponent } from './visitatore.component';

describe('VisitatoreComponent', () => {
  let component: VisitatoreComponent;
  let fixture: ComponentFixture<VisitatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitatoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
