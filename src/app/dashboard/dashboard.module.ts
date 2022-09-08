import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MusicRecomComponent } from './pages/music-recom/music-recom.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GenresSelectComponent } from './components/genres-select/genres-select.component';
import { CardTrackComponent } from './components/card-track/card-track.component';

@NgModule({
  declarations: [
    MusicRecomComponent,
    DashboardComponent,
    ProfileComponent,
    GenresSelectComponent,
    CardTrackComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DashboardModule {}
