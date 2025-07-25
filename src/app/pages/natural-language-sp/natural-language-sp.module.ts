import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturalLanguageSPPageRoutingModule } from './natural-language-sp-routing.module';

import { NaturalLanguageSPPage } from './natural-language-sp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaturalLanguageSPPageRoutingModule
  ],
  declarations: [NaturalLanguageSPPage]
})
export class NaturalLanguageSPPageModule {}
