import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangersiteComponent } from './dangersite.component';

describe('DangersiteComponent', () => {
  let component: DangersiteComponent;
  let fixture: ComponentFixture<DangersiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangersiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangersiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
