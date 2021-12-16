import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ModalityService } from '../../services/modality.service';

@Component({
  selector: 'app-modality-create',
  templateUrl: './modality-create.component.html',
  styles: [
  ]
})
export class ModalityCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private modalityService: ModalityService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createModality(){
    const {nombre}=this.miFormulario.value;
    this.modalityService.createModality(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new modality has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/modalities/modality-read')
      })
  }

}
