import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Se importa el Toolbar
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
