import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TRequestService } from '../../services/t-request.service';

@Component({
  selector: 'app-trequest-create',
  templateUrl: './trequest-create.component.html',
  styles: [
  ]
})
export class TRequestCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private trequestService: TRequestService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createTRequest(){
    const {nombre}=this.miFormulario.value;
    this.trequestService.createTRequest(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new type request has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/types-requests/typerequest-read')
      })
  }
}
