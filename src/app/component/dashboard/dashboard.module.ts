import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavbarComponent } from './dashboard/sidenavbar/sidenavbar.component';
import { OrgHierarchyComponent } from './dashboard/org-hierarchy/org-hierarchy.component';
import { OfficeComponent } from './dashboard/office/office.component';
import { OfficeLocationComponent } from './dashboard/office-location/office-location.component';
import { DailogboxComponent } from './DailogBoxs/dailogbox/dailogbox.component';
import { AddressDailogboxComponent } from './DailogBoxs/address-dailogbox/address-dailogbox.component';
import { NewlocationDailogboxComponent } from './DailogBoxs/newlocation-dailogbox/newlocation-dailogbox.component';
@NgModule({
  declarations: [
    DashboardComponent,
    SidenavbarComponent,
    OrgHierarchyComponent,
    OfficeComponent,
    OfficeLocationComponent,
    DailogboxComponent,
    AddressDailogboxComponent,
    NewlocationDailogboxComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
