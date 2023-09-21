import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pro2Component } from './pro2.component';

const routes: Routes = [
  {
    path:'',
    component:Pro2Component
  },
  {
    path:'',
    loadChildren:()=> import('../pro1/pro1.module').then(m=> m.Pro1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pro2RoutingModule { }
