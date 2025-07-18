import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateJobPostingPage } from './create-job-posting.page';

const routes: Routes = [
  {
    path: '',
    component: CreateJobPostingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateJobPostingPageRoutingModule {}
