import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturalLanguageDBPageRoutingModule } from './natural-language-db-routing.module';

import { NaturalLanguageDBPage } from './natural-language-db.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaturalLanguageDBPageRoutingModule
  ],
  declarations: [NaturalLanguageDBPage]
})
export class NaturalLanguageDBPageModule {}
