import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-page.module').then((m) => m.ProfilePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
