import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovofficialincidentsComponent } from './govofficialincidents.component';

describe('GovofficialincidentsComponent', () => {
  let component: GovofficialincidentsComponent;
  let fixture: ComponentFixture<GovofficialincidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovofficialincidentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovofficialincidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
