import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgHierarchyComponent } from './org-hierarchy.component';

describe('OrgHierarchyComponent', () => {
  let component: OrgHierarchyComponent;
  let fixture: ComponentFixture<OrgHierarchyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgHierarchyComponent]
    });
    fixture = TestBed.createComponent(OrgHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
