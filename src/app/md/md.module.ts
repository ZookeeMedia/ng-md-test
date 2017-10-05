
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdTableComponent } from './md-table/md-table.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MdTableComponent,

  ],
  exports: [
    MdTableComponent,

  ]
})
export class MdModule { }
