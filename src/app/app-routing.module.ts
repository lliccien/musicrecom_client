import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicRecomComponent } from './dashboard/pages/music-recom/music-recom.component';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { ValidatedTokenGuard } from './guards/validated-token.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [ValidatedTokenGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    title: 'SignIn',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'SignUp',
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
