import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceavailabilityComponent } from './resourceavailability.component';

describe('ResourceavailabilityComponent', () => {
  let component: ResourceavailabilityComponent;
  let fixture: ComponentFixture<ResourceavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceavailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
