import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestDeleteComponent } from './pages/request-delete/request-delete.component';
import { RequestCreateComponent } from './pages/request-create/request-create.component';
import { RequestUpdateComponent } from './pages/request-update/request-update.component';
import { RequestReadComponent } from './pages/request-read/request-read.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    RequestDeleteComponent,
    RequestCreateComponent,
    RequestUpdateComponent,
    RequestReadComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class RequestModule { }
