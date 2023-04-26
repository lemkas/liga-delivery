import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
];

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
