import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';




import { Pro2RoutingModule } from './pro2-routing.module';
import { Pro2Component } from './pro2.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    Pro2Component
  ],
  imports: [
    CommonModule,
    Pro2RoutingModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule
  ]
})
export class Pro2Module { }
