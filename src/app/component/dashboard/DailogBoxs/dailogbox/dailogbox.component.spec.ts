import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogboxComponent } from './dailogbox.component';

describe('DailogboxComponent', () => {
  let component: DailogboxComponent;
  let fixture: ComponentFixture<DailogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogboxComponent]
    });
    fixture = TestBed.createComponent(DailogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
