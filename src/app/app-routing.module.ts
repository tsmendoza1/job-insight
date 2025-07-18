import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { SingInPage } from './pages/sing-in/sing-in.page';
import { JobApplicationsPage } from './pages/job-applications/job-applications.page';
import { CreateJobPostingPage } from './pages/create-job-posting/create-job-posting.page';

const routes: Routes = [
  
  { path: 'home', component: HomePage },
  { path: '', component: LoginPage },
  { path: 'profile', component: ProfilePage },
  { path: 'singIn', component: SingInPage },
  {path: 'jobApplications', component: JobApplicationsPage},
  // {path: 'jobPosting', component: CreateJobPostingPage},
  {
  path: 'jobPosting',
  loadComponent: () => import('./pages/create-job-posting/create-job-posting.page').then(m => m.CreateJobPostingPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
