import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/find-jobs/pages/profile/profile.component'

const routes: Routes = [
  {
    path: 'find-work',
    // loadChildren: './modules/find-jobs/find-jobs.module#FindJobsModule'
    loadChildren: () => import('./modules/find-jobs/find-jobs.module').then(m => m.FindJobsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
