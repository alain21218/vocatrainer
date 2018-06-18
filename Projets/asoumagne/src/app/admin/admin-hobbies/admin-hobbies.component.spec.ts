import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHobbiesComponent } from './admin-hobbies.component';

describe('AdminHobbiesComponent', () => {
  let component: AdminHobbiesComponent;
  let fixture: ComponentFixture<AdminHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
