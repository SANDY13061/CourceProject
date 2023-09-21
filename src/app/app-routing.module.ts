import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pro2Module } from './pro2/pro2.module';

const routes: Routes = [
  
  {
    path:'',
    loadChildren:()=> import('./pro2/pro2.module').then(m=> m.Pro2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
