import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyipComponent } from './myip.component';

describe('MyipComponent', () => {
  let component: MyipComponent;
  let fixture: ComponentFixture<MyipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
