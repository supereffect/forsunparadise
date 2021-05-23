import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyarilarComponent } from './uyarilar.component';

describe('UyarilarComponent', () => {
  let component: UyarilarComponent;
  let fixture: ComponentFixture<UyarilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyarilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyarilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
