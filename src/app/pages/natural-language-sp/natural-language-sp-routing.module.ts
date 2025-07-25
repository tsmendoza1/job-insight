import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaturalLanguageSPPage } from './natural-language-sp.page';

const routes: Routes = [
  {
    path: '',
    component: NaturalLanguageSPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaturalLanguageSPPageRoutingModule {}
