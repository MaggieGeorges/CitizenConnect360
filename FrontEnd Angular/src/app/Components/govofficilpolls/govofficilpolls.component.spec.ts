import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovofficilpollsComponent } from './govofficilpolls.component';

describe('GovofficilpollsComponent', () => {
  let component: GovofficilpollsComponent;
  let fixture: ComponentFixture<GovofficilpollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovofficilpollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovofficilpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
