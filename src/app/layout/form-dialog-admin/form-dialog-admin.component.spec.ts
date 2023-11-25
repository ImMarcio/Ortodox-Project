import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogAdminComponent } from './form-dialog-admin.component';

describe('FormDialogAdminComponent', () => {
  let component: FormDialogAdminComponent;
  let fixture: ComponentFixture<FormDialogAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDialogAdminComponent]
    });
    fixture = TestBed.createComponent(FormDialogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
