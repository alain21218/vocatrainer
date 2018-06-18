import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfileComponent } from './inputfile.component';

describe('InputfileComponent', () => {
  let component: InputfileComponent;
  let fixture: ComponentFixture<InputfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
