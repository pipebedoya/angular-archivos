import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  

  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
  
})
export class ParametersModule { }
