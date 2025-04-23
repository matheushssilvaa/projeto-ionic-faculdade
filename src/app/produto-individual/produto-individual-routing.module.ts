import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoIndividualPage } from './produto-individual.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoIndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoIndividualPageRoutingModule {}
