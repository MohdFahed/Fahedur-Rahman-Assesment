import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDailogboxComponent } from './address-dailogbox.component';

describe('AddressDailogboxComponent', () => {
  let component: AddressDailogboxComponent;
  let fixture: ComponentFixture<AddressDailogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressDailogboxComponent]
    });
    fixture = TestBed.createComponent(AddressDailogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
