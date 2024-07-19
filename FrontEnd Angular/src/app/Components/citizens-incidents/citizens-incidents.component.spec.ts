import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizensIncidentsComponent } from './citizens-incidents.component';

describe('CitizensIncidentsComponent', () => {
  let component: CitizensIncidentsComponent;
  let fixture: ComponentFixture<CitizensIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizensIncidentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizensIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
