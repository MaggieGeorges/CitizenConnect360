import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizensviewsComponent } from './citizensviews.component';

describe('CitizensviewsComponent', () => {
  let component: CitizensviewsComponent;
  let fixture: ComponentFixture<CitizensviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizensviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizensviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
