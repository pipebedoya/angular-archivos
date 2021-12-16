import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalityRoutingModule } from './modality-routing.module';
import { ModalityUpdateComponent } from './pages/modality-update/modality-update.component';
import { ModalityCreateComponent } from './pages/modality-create/modality-create.component';
import { ModalityDeleteComponent } from './pages/modality-delete/modality-delete.component';
import { ModalityReadComponent } from './pages/modality-read/modality-read.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ModalityUpdateComponent,
    ModalityCreateComponent,
    ModalityDeleteComponent,
    ModalityReadComponent
  ],
  imports: [
    CommonModule,
    ModalityRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class ModalityModule { }
