import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../shared/material.module';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { TableSimpleComponent } from './table-simple/table-simple.component';
import { StylesTableComponent } from './styles-table/styles-table.component';
import { TableHyperComponent } from './table-hyper/table-hyper.component';


@NgModule({
  declarations: [
    TableComponent,
    TableSimpleComponent,
    StylesTableComponent,
    TableHyperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    TableVirtualScrollModule
  ],
  exports:[
    TableComponent,
    TableSimpleComponent,
    StylesTableComponent,
    TableHyperComponent
  ]
})
export class ComponentsModule { }
