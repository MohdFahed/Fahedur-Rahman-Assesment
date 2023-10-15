import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { AddressDailogboxComponent } from '../../DailogBoxs/address-dailogbox/address-dailogbox.component';
import { NewlocationDailogboxComponent } from '../../DailogBoxs/newlocation-dailogbox/newlocation-dailogbox.component';

@Component({
  selector: 'app-office-location',
  templateUrl: './office-location.component.html',
  styleUrls: ['./office-location.component.css'],
})
export class OfficeLocationComponent implements OnInit {
  data: any;
  constructor(private dataService: LoginService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getAddress();
  }
  getAddress() {
    this.dataService.address.subscribe((res: any) => {
      this.data = res;
    });
  }
  deleteAddress(index) {
    this.data.splice(index, 1); // 2nd parameter means remove one item only
  }
  editAddress(index) {
    let record = this.data[index];
    this.openDailog(record, index);
  }

  openDailog(record: any, index) {
    const dialogPosition: DialogPosition = {
      top: 0 + 'px',
      right: 0 + 'px',
    };
    const dialogRef = this.dialog.open(AddressDailogboxComponent, {
      height: '100%',
      width: '600px',
      data: { record, index },

      position: dialogPosition,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  addNewLocation() {
    const dialogPosition: DialogPosition = {
      top: 0 + 'px',
      right: 0 + 'px',
    };
    const dialogRef = this.dialog.open(NewlocationDailogboxComponent, {
      height: '100%',
      width: '600px',
      position: dialogPosition,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
