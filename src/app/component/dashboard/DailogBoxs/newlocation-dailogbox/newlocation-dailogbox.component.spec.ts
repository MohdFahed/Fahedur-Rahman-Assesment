import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlocationDailogboxComponent } from './newlocation-dailogbox.component';

describe('NewlocationDailogboxComponent', () => {
  let component: NewlocationDailogboxComponent;
  let fixture: ComponentFixture<NewlocationDailogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewlocationDailogboxComponent]
    });
    fixture = TestBed.createComponent(NewlocationDailogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
