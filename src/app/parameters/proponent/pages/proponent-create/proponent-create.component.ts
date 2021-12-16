import { Component, OnInit } from '@angular/core';
import { Proponent } from '../../interfaces/proponent.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProponentService } from '../../services/proponent.service';
import { BondingService } from 'src/app/parameters/t-bonding/services/bonding.service';
import { Bonding } from '../../../t-bonding/interfaces/bonding.interface';

@Component({
  selector: 'app-proponent-create',
  templateUrl: './proponent-create.component.html',
  styles: [
  ]
})
export class ProponentCreateComponent implements OnInit {

  tipoVinculacion: Bonding[]= [];
  proponent!: Proponent;
  constructor(private fb: FormBuilder,
              private proponentService: ProponentService,
              private bodingService: BondingService
             ) { }

  ngOnInit(): void {
    this.bodingService.getBonding()
      .subscribe( resp => {
        console.log(resp);
        this.tipoVinculacion = resp
      })
  }

  miFormulario: FormGroup = this.fb.group({
    documento: [],
    primer_nombre: [],
    otros_nombres: [],
    primer_apellido: [],
    segundo_apellido: [],
    correo: [],
    celular: [],
    idtipovinculacion: []
  })

  crear(){
    console.log(this.miFormulario.value);
    const idVinculacion: number =+this.miFormulario.value.idtipovinculacion;
    console.log(idVinculacion);

    const {documento, primer_nombre, otros_nombres, primer_apellido, segundo_apellido, correo, celular } = this.miFormulario.value;
    this.proponentService.createProponent(documento, primer_nombre, otros_nombres, primer_apellido, segundo_apellido, correo, celular,idVinculacion )
      .subscribe(resp => {
        this.proponent = resp;
      })
  }

  

}
