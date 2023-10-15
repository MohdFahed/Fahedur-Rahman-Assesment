import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
  DialogPosition,
} from '@angular/material/dialog';
import { DailogboxComponent } from '../../DailogBoxs/dailogbox/dailogbox.component';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
})
export class OfficeComponent implements OnInit {
  data: any;
  constructor(private loginsetvice: LoginService, public dialog: MatDialog) {}
  ngOnInit() {
    this.loginsetvice.data.subscribe((res) => {
      this.data = res;

      console.log('Response==>', this.data);
    });
  }

  openDailog(event) {
    const dialogPosition: DialogPosition = {
      top: 0 + 'px',
      right: 0 + 'px',
    };
    const dialogRef = this.dialog.open(DailogboxComponent, {
      height: '100%',
      width: '600px',
      data: this.data,
      position: dialogPosition,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.data = result;
      console.log('Closed..');
    });
  }
}
