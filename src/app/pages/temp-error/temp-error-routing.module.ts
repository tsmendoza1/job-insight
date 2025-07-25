import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempErrorPage } from './temp-error.page';

const routes: Routes = [
  {
    path: '',
    component: TempErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempErrorPageRoutingModule {}
