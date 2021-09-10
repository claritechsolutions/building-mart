import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShopComponent } from './add-shop/add-shop.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path     : 'add-shop',
      component: AddShopComponent
  },

];

@NgModule({
  declarations: [
    AddShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuildingMartModule { }
