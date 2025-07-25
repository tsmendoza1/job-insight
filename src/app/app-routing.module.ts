import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { SingInPage } from './pages/sing-in/sing-in.page';
import { JobApplicationsPage } from './pages/job-applications/job-applications.page';
import { CreateJobPostingPage } from './pages/create-job-posting/create-job-posting.page';
import { NaturalLanguageDBPage } from './pages/natural-language-db/natural-language-db.page';
import { NaturalLanguageSPPage } from './pages/natural-language-sp/natural-language-sp.page';
import { TempErrorPage } from './pages/temp-error/temp-error.page';

const routes: Routes = [
  
  { path: 'home', component: HomePage },
  { path: '', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'profile', component: ProfilePage },
  { path: 'singIn', component: SingInPage },
  {path: 'jobApplications', component: JobApplicationsPage},
  {path: 'jobPosting', component: CreateJobPostingPage},
  {path: 'nlDB', component: NaturalLanguageDBPage},
  {path: 'nlSP', component: NaturalLanguageSPPage},
  {path: '404', component: TempErrorPage},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
