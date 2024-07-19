import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizensProfileComponent } from './citizens-profile.component';

describe('CitizensProfileComponent', () => {
  let component: CitizensProfileComponent;
  let fixture: ComponentFixture<CitizensProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizensProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizensProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
