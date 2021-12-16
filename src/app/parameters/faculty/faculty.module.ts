import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyUpdateComponent } from './pages/faculty-update/faculty-update.component';
import { FacultyCreateComponent } from './pages/faculty-create/faculty-create.component';
import { FacultyDeleteComponent } from './pages/faculty-delete/faculty-delete.component';
import { FacultyReadComponent } from './pages/faculty-read/faculty-read.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FacultyUpdateComponent,
    FacultyCreateComponent,
    FacultyDeleteComponent,
    FacultyReadComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class FacultyModule { }
