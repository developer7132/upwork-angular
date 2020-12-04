import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindJobsRoutingModule } from './find-jobs-routing.module'
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { FindWorkComponent } from './pages/find-work/find-work.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component';
import { ProposalsComponent } from './pages/proposals/proposals.component';
import { MyStatsComponent } from './pages/my-stats/my-stats.component';
import { ReadinessTestComponent } from './pages/readiness-test/readiness-test.component';
import { MyProjectDashboardComponent } from './pages/my-project-dashboard/my-project-dashboard.component';

import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { JobListComponent } from './components/job-list/job-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { JobTileComponent } from './components/job-tile/job-tile.component';

@NgModule({
  declarations: [
    TopicListComponent,
    
    
    FindWorkComponent,
    ProfileComponent,
    SavedJobsComponent,
    ProposalsComponent,
    MyStatsComponent,
    ReadinessTestComponent,
    MyProjectDashboardComponent,
    JobListComponent,
    JobTileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FindJobsRoutingModule,

    MatListModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class FindJobsModule { }
