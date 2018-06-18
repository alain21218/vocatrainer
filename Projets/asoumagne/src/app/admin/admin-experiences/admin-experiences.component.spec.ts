import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperiencesComponent } from './admin-experiences.component';

describe('AdminExperiencesComponent', () => {
  let component: AdminExperiencesComponent;
  let fixture: ComponentFixture<AdminExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
