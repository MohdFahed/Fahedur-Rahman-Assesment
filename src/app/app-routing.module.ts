import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./component/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
