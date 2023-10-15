import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-dailogbox',
  templateUrl: './address-dailogbox.component.html',
  styleUrls: ['./address-dailogbox.component.css'],
})
export class AddressDailogboxComponent {
  editForm: FormGroup;
  data: any;
  records: any;
  constructor(
    public dialogRef: MatDialogRef<DailogboxComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private login: LoginService,
    private fb: FormBuilder,
    private addressData: LoginService
  ) {
    this.createForm();
    this.data = data.record;
    this.setFormData();
  }
  createForm() {
    this.editForm = this.fb.group({
      id: [''],
      country: [''],
      state: [''],
      city: [''],
      area: [''],
      subarea: [''],
      address: [''],
    });
  }
  setFormData() {
    this.editForm.patchValue(this.data);
  }
  update() {
    let sendData = this.editForm.value;
    this.login.address.subscribe((res) => {
      this.records = res;
    });
    let index = this.records.findIndex((obj) => {
      return obj.id == this.editForm.get('id').value;
    });
    this.records[index].country = sendData.country;
    this.records[index].state = sendData.state;
    this.records[index].city = sendData.city;
    this.records[index].area = sendData.area;
    this.records[index].subarea = sendData.subarea;
    this.records[index].address = sendData.address;
    this.login.address.next([...this.records]);
    this.dialogRef.close();
  }
}
