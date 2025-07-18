import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateJobPostingPageRoutingModule } from './create-job-posting-routing.module';

import { CreateJobPostingPage } from './create-job-posting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateJobPostingPageRoutingModule
  ],
  declarations: [CreateJobPostingPage]
})
export class CreateJobPostingPageModule {}
