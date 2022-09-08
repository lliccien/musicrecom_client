import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicRecomComponent } from './pages/music-recom/music-recom.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'recommended',
        component: MusicRecomComponent,
        title: 'Recommended',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
      },
      {
        path: '**',
        redirectTo: 'recommended',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
