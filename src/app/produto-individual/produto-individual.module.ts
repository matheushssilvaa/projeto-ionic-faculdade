import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoIndividualPageRoutingModule } from './produto-individual-routing.module';

import { ProdutoIndividualPage } from './produto-individual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoIndividualPageRoutingModule
  ],
  declarations: [ProdutoIndividualPage]
})
export class ProdutoIndividualPageModule {}
