import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { FindWorkComponent } from './pages/find-work/find-work.component'
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component'
import { ProposalsComponent } from './pages/proposals/proposals.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { MyStatsComponent } from './pages/my-stats/my-stats.component'
import { ReadinessTestComponent } from './pages/readiness-test/readiness-test.component'
import { MyProjectDashboardComponent } from './pages/my-project-dashboard/my-project-dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: FindWorkComponent,
  },
  {
    path: 'saved-jobs',
    component: SavedJobsComponent
  },
  {
    path: 'proposals',
    component: ProposalsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'my-stats',
    component: MyStatsComponent
  },
  {
    path: 'test',
    component: ReadinessTestComponent
  },
  {
    path: 'project-dashboard',
    component: MyProjectDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindJobsRoutingModule { }
