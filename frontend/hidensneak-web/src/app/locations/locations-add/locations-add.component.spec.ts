import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsAddComponent } from './locations-add.component';

describe('LocationsAddComponent', () => {
  let component: LocationsAddComponent;
  let fixture: ComponentFixture<LocationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
