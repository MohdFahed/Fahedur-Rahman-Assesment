import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-dailogbox',
  templateUrl: './dailogbox.component.html',
  styleUrls: ['./dailogbox.component.css'],
})
export class DailogboxComponent implements OnInit {
  orgGroup: FormGroup;
  info: any;
  fromSubmit: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DailogboxComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private login: LoginService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.createForm();
    this.login.data.subscribe((res) => {
      if (res.length) {
        this.info = res;
        this.info.forEach((Iemheirarchy) => {
          this.addHeirarchy(Iemheirarchy);
        });
      }
    });
  }

  createForm() {
    this.orgGroup = this.fb.group({
      orgHeirarchy: this.fb.array([]),
    });
  }
  closeDailog() {
    this.dialogRef.close((res) => {
      console.log('closed Dailog');
    });
  }

  createHeirarchyGroup(heirarchy: any): FormGroup {
    return this.fb.group({
      info: [heirarchy.info, [Validators.required]],
    });
  }
  get heirarchy(): FormArray {
    return <FormArray>this.orgGroup.get('orgHeirarchy');
  }
  addHeirarchy(heirarchy: any) {
    this.heirarchy.push(this.createHeirarchyGroup(heirarchy));
  }
  addNewHeirarchy() {
    this.addHeirarchy({ info: null });
  }
  submitContact(heirarchy) {
    this.fromSubmit = true;
    if (this.orgGroup.invalid) {
      alert('Invalid..');
    } else {
      this.login.data.next([...heirarchy]);
      this.closeDailog();
    }
  }
  delete(index: any) {
    const control = <FormArray>this.orgGroup.get('orgHeirarchy');
    control.removeAt(index);
  }
}
