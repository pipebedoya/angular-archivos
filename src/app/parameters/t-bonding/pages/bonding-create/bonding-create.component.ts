import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BondingService } from '../../services/bonding.service';

@Component({
  selector: 'app-bonding-create',
  templateUrl: './bonding-create.component.html',
  styles: [
  ]
})
export class BondingCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private bondingService: BondingService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createBonding(){
    const {nombre}=this.miFormulario.value;
    this.bondingService.createBonding(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new Bonding has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/bonding/bonding-read')
      })
  }

}
