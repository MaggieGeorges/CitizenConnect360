import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincitizensmanageComponent } from './admincitizensmanage.component';

describe('AdmincitizensmanageComponent', () => {
  let component: AdmincitizensmanageComponent;
  let fixture: ComponentFixture<AdmincitizensmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincitizensmanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincitizensmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
