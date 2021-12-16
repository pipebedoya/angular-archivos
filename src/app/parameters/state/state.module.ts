import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateCreateComponent } from './pages/state-create/state-create.component';
import { StateUpdateComponent } from './pages/state-update/state-update.component';
import { StateDeleteComponent } from './pages/state-delete/state-delete.component';
import { StateReadComponent } from './pages/state-read/state-read.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    StateCreateComponent,
    StateUpdateComponent,
    StateDeleteComponent,
    StateReadComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class StateModule { }
