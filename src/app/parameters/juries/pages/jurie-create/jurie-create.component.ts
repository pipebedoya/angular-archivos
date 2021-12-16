import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { JurieService } from '../../services/jurie.service';

@Component({
  selector: 'app-jurie-create',
  templateUrl: './jurie-create.component.html',
  styles: [
  ]
})
export class JurieCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private jurieService: JurieService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    celular:['',[Validators.required, Validators.minLength(3)]],
    correo:['',[Validators.required, Validators.minLength(3)]],
    entidad:['',[Validators.required, Validators.minLength(3)]]
  })

  createJurie(){
    const {nombre,celular,correo,entidad}=this.miFormulario.value;
    this.jurieService.createJurie(nombre,celular,correo,entidad)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new Jurie has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/juries/Jurie-read')
      })
  }

}
