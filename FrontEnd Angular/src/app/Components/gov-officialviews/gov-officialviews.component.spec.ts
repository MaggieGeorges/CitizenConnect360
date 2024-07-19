import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovOfficialviewsComponent } from './gov-officialviews.component';

describe('GovOfficialviewsComponent', () => {
  let component: GovOfficialviewsComponent;
  let fixture: ComponentFixture<GovOfficialviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovOfficialviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovOfficialviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
