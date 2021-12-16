import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-state-create',
  templateUrl: './state-create.component.html',
  styles: [
  ]
})
export class StateCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private stateService: StateService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createState(){
    const {nombre}=this.miFormulario.value;
    this.stateService.createState(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new State has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/status/state-read')
      })
  }

}
