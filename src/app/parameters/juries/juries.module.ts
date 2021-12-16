import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuriesRoutingModule } from './juries-routing.module';
import { JurieCreateComponent } from './pages/jurie-create/jurie-create.component';
import { JurieUpdateComponent } from './pages/jurie-update/jurie-update.component';
import { JurieDeleteComponent } from './pages/jurie-delete/jurie-delete.component';
import { JurieReadComponent } from './pages/jurie-read/jurie-read.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    JurieCreateComponent,
    JurieUpdateComponent,
    JurieDeleteComponent,
    JurieReadComponent
  ],
  imports: [
    CommonModule,
    JuriesRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class JuriesModule { }
