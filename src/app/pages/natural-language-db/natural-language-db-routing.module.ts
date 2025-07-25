import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaturalLanguageDBPage } from './natural-language-db.page';

const routes: Routes = [
  {
    path: '',
    component: NaturalLanguageDBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaturalLanguageDBPageRoutingModule {}
