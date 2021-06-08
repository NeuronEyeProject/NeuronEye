import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaininfoComponent } from './domaininfo.component';

describe('DomaininfoComponent', () => {
  let component: DomaininfoComponent;
  let fixture: ComponentFixture<DomaininfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaininfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
