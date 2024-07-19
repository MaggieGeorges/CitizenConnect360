import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingovofficialmanageComponent } from './admingovofficialmanage.component';

describe('AdmingovofficialmanageComponent', () => {
  let component: AdmingovofficialmanageComponent;
  let fixture: ComponentFixture<AdmingovofficialmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmingovofficialmanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmingovofficialmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
