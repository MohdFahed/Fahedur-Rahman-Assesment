import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-newlocation-dailogbox',
  templateUrl: './newlocation-dailogbox.component.html',
  styleUrls: ['./newlocation-dailogbox.component.css'],
})
export class NewlocationDailogboxComponent {
  newForm: FormGroup;
  data: any;
  formSubmit: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<NewlocationDailogboxComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private login: LoginService,
    private fb: FormBuilder,
    private addressData: LoginService
  ) {
    this.createForm();
    this.login.data.subscribe((res) => {
      this.data = res;
    });
  }
  createForm() {
    this.newForm = this.fb.group({
      country: ['', Validators.required],
      officeName: ['', Validators.required],
      address: [''],
    });
  }

  get formStatus() {
    return this.newForm.controls;
  }
  add() {
    this.formSubmit = true;
    if (!this.newForm.valid) {
    } else {
    }
  }
  cancel() {
    this.dialogRef.close();
  }
}
