import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pro1RoutingModule } from './pro1-routing.module';
import { Pro1Component } from './pro1.component';
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
    Pro1Component
  ],
  imports: [
    CommonModule,
    Pro1RoutingModule,
    MatToolbarModule,MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class Pro1Module { }
