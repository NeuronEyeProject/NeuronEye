import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsiteComponent } from './goodsite.component';

describe('GoodsiteComponent', () => {
  let component: GoodsiteComponent;
  let fixture: ComponentFixture<GoodsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
