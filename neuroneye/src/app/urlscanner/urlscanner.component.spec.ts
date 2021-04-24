import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlscannerComponent } from './urlscanner.component';

describe('UrlscannerComponent', () => {
  let component: UrlscannerComponent;
  let fixture: ComponentFixture<UrlscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlscannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
