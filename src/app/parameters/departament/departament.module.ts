import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentRoutingModule } from './departament-routing.module';
import { DepartamentReadComponent } from './pages/departament-read/departament-read.component';
import { DepartamentDeleteComponent } from './pages/departament-delete/departament-delete.component';
import { DepartamentCreateComponent } from './pages/departament-create/departament-create.component';
import { DepartamentUpdateComponent } from './pages/departament-update/departament-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    DepartamentReadComponent,
    DepartamentDeleteComponent,
    DepartamentCreateComponent,
    DepartamentUpdateComponent
  ],
  imports: [
    CommonModule,
    DepartamentRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class DepartamentModule { }
