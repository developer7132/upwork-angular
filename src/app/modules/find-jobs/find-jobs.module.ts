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

@NgModule({
  declarations: [
    TopicListComponent,
    
    
    FindWorkComponent,
    ProfileComponent,
    SavedJobsComponent,
    ProposalsComponent,
    MyStatsComponent,
    ReadinessTestComponent,
    MyProjectDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    FindJobsRoutingModule,

    MatListModule
  ]
})
export class FindJobsModule { }
