import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizensPollsComponent } from './citizens-polls.component';

describe('CitizensPollsComponent', () => {
  let component: CitizensPollsComponent;
  let fixture: ComponentFixture<CitizensPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizensPollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizensPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
